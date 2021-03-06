import qs from "query-string";

export const jsonFetch = (url, config = {}) => {
	const defaultConfig = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	const jwt = localStorage.getItem("jwt");
	if (jwt) {
		defaultConfig.headers["Authorization"] = `Bearer ${jwt}`;
	}

	if (typeof config.body === "object") {
		config.body = JSON.stringify(config.body);
	}

	return fetch(url, Object.assign({}, defaultConfig, config))
		.then((res) => res.json())
		.then((res) => {
			if (res.code < 200 || res.code >= 300) {
				throw new Error(res.message);
			}
			return res;
		});
};

export const unpaginateQuery = (query) => {
	const cleanQuery = Object.assign({}, query, {
		$limit: "-1",
	});
	delete cleanQuery["$skip"];
	return cleanQuery;
};

const flattenQuery = (queryObj, isRoot = true) => {
	const flatObj = {};
	for (const key in queryObj) {
		// key not in obj
		if (!queryObj.hasOwnProperty(key)) continue;

		// is nested?
		if (typeof queryObj[key] === "object" && !Array.isArray(queryObj[key])) {
			const flatObject = flattenQuery(queryObj[key], false);
			for (var nestedKey in flatObject) {
				// key not in obj
				if (!flatObject.hasOwnProperty(nestedKey)) continue;
				if (isRoot) {
					flatObj[key + nestedKey] = flatObject[nestedKey];
				} else {
					flatObj["[" + key + "]" + nestedKey] = flatObject[nestedKey];
				}
			}
		} else {
			if (!isRoot) {
				flatObj["[" + key + "]"] = queryObj[key];
			} else {
				flatObj[key] = queryObj[key];
			}
		}
	}
	return flatObj;
};

const removeUndefined = (obj) => {
	const cleanedData = {};
	Object.entries(obj).forEach(([key, value]) => {
		if (value !== undefined) {
			cleanedData[key] = value;
		}
	});
	return cleanedData;
};

const stringify = (query) => {
	const newQuery = {};
	// convert undefined to null
	// include empty arrays ?key=&...
	Object.entries(removeUndefined(flattenQuery(query))).forEach(
		([key, value]) => {
			if (Array.isArray(value) && value.length === 0) {
				newQuery[key] = [null];
			} else {
				newQuery[key] = value === undefined ? null : value;
			}
		}
	);
	return qs.stringify(newQuery);
};

export default {
	methods: {
		async $_providerGetById(providerId) {
			if (!providerId) {
				throw new Error("missing providerId");
			}
			return jsonFetch(
				this.$config.API.contentServerUrl +
					this.$config.API.getProviderPath +
					providerId
			);
		},
		async $_resourceGet(resourceId) {
			return jsonFetch(
				this.$config.API.contentServerUrl +
					this.$config.API.getContentPath +
					(resourceId ? resourceId : "")
			);
		},
		async $_resourceFind(query) {
			const queryString = stringify(query);

			return jsonFetch(
				this.$config.API.contentServerUrl +
					this.$config.API.searchContentPath +
					"?" +
					queryString
			);
		},
		async $_resourceFindAmount(query) {
			const newQuery = {
				...unpaginateQuery(query),
				$select: [],
			};
			const queryResult = await this.$_resourceFind(newQuery);
			return queryResult.length;
		},
		async $_resourceCreate(resource) {
			if (Array.isArray(resource)) {
				return this.$_resourceBulkCreate(resource);
			}
			return jsonFetch(
				this.$config.API.contentServerUrl + this.$config.API.pushContentPath,
				{
					method: "POST",
					body: resource,
				}
			);
		},
		async $_resourcePatch(resource) {
			return jsonFetch(
				this.$config.API.contentServerUrl +
					this.$config.API.pushContentPath +
					resource._id,
				{
					method: "PATCH",
					body: resource,
				}
			);
		},
		async $_resourceDelete(resourceId) {
			return jsonFetch(
				this.$config.API.contentServerUrl +
					this.$config.API.pushContentPath +
					resourceId,
				{
					method: "DELETE",
				}
			);
		},
		async $_resourceFilesGet(resourceId) {
			return jsonFetch(
				this.$config.API.contentServerUrl +
					this.$config.API.getFiletreePath +
					resourceId
			);
		},
		async $_resourceResourceSchemaGet() {
			return jsonFetch(
				this.$config.API.contentServerUrl + "/resources/resource-schema"
			);
		},
		async $_resourceBulkCreate(resource) {
			return jsonFetch(
				this.$config.API.contentServerUrl +
					this.$config.API.pushBulkContentPath,
				{
					method: "POST",
					body: resource,
				}
			);
		},
		async $_resourceBulkPatch(query, data = {}) {
			if (!query) {
				throw new Error("query (first) parameter is required!");
			}
			const queryString = stringify(unpaginateQuery(query));

			return jsonFetch(
				this.$config.API.contentServerUrl +
					this.$config.API.pushBulkContentPath +
					"?" +
					queryString,
				{
					method: "PATCH",
					body: data,
				}
			);
		},
		async $_resourceBulkDelete(query) {
			if (!query) {
				throw new Error("query (first) parameter is required!");
			}

			const queryString = stringify(unpaginateQuery(query));

			return jsonFetch(
				this.$config.API.contentServerUrl +
					this.$config.API.pushBulkContentPath +
					"?" +
					queryString,
				{
					method: "DELETE",
				}
			);
		},
	},
};
