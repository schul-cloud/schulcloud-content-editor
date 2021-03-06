<template>
	<div>
		<BaseTags
			v-model="visibleColoumnNames"
			:label="$lang.resourceManagement.bulk.visibleColoumns"
			:autocomplete-items="
				availableColoumns.map((a) => ({ text: $lang.resources[a.key] }))
			"
			:add-only-from-autocomplete="true"
		/>

		<BaseCheckbox
			v-model="bulkEdit"
			:label="$lang.resourceManagement.bulk.enableBulkEdit"
		/>
		<template v-if="bulkEdit">
			<p class="hint">
				Hinweis: Nur wenn der haken neben einem Eingabefeld gesetzt ist, wird
				das Feld auch verändert.
			</p>
			<BaseCheckbox
				v-if="bulkEdit"
				v-model="bulkAdvancedEdit"
				:label="$lang.resourceManagement.bulk.enableBulkEditAdvanced"
			/>
			<p v-if="bulkAdvancedEdit" class="hint">
				Hinweis: Ist die Suche aktiviert (Haken rechts neben Eingabefeld), so
				werden nur jene Teile der Daten verändert, auf die die Suche zutrifft.
				Der Rest der Daten bleibt erhalten.
				<br />
				So kann beispielsweise durch aktivieren einer "leeren" Suche ein Tag
				hinzugefügt werden, oder ein Teil der URL ausgetauscht werden.
			</p>
		</template>
		<br />

		<ResourceBulkEditTable
			:bulk-inputs="bulkInputs"
			:resources="resources"
			:header-visible="true"
			:visible-coloumns="visibleColoumns"
			:index-start="resourceStartIndex"
			@patchResource="patchResource"
			@deleteResource="deleteResource"
			@patchBulk="patchBulk"
			@deleteBulk="deleteBulk"
		/>
		<BaseConfirm :active="inProgress">
			<p slot="title" style="text-align:center">
				{{ $lang.resourceManagement.bulk.wip }}
			</p>
			<LoadingBooks />
		</BaseConfirm>
	</div>
</template>

<script>
import BaseCheckbox from "@/components/base/BaseCheckbox";
import BaseTags from "@/components/base/BaseTags";
import ResourceBulkEditTable, {
	availableColoumns,
} from "@/components/resourceManagement/index/ResourceBulkEditTable";
import BaseConfirm from "@/components/base/BaseConfirm";
import LoadingBooks from "@/components/LoadingBooks";

import api from "@/mixins/api.js";
import { setTimeout } from "timers";
import { mapMutations } from "vuex";

const emptyResource = (name) => {
	const resource = { name };
	availableColoumns.forEach((coloumn) => {
		resource[coloumn.key] = undefined;
	});
	return resource;
};

export default {
	components: {
		BaseCheckbox,
		BaseTags,
		ResourceBulkEditTable,
		BaseConfirm,
		LoadingBooks,
	},
	mixins: [api],
	props: {
		query: {
			type: Object,
			default: () => {},
		},
		resources: {
			type: Array,
			default: () => [],
		},
		resourceStartIndex: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			bulkReplace: emptyResource("Ersetzen"),
			bulkFind: emptyResource("Suchen"),
			availableColoumns,
			inProgress: false,
		};
	},
	computed: {
		bulkInputs() {
			const inputRows = [];
			if (this.bulkEdit) {
				inputRows.push(this.bulkReplace);
				if (this.bulkAdvancedEdit) {
					inputRows.push(this.bulkFind);
				}
			}
			return inputRows;
		},
		attributeNameDictionary() {
			const dict = {};
			Object.entries(this.$lang.resources).forEach(([key, value]) => {
				dict[value] = key;
			});
			return dict;
		},
		visibleColoumnNames: {
			get() {
				return this.visibleColoumns.map(
					(attribute) => this.$lang.resources[attribute]
				);
			},
			set(value) {
				this.visibleColoumns = value.map(
					(name) => this.attributeNameDictionary[name]
				);
			},
		},
		bulkEdit: {
			get() {
				return this.$store.state.resourceManagement.bulk.bulkEnabled;
			},
			set(value) {
				this.setBulkEnabled(value);
			},
		},
		bulkAdvancedEdit: {
			get() {
				return this.$store.state.resourceManagement.bulk.bulkAdvancedEnabled;
			},
			set(value) {
				this.setBulkAdvancedEnabled(value);
			},
		},
		visibleColoumns: {
			get() {
				return this.$store.state.resourceManagement.bulk.visibleColoumns;
			},
			set(value) {
				Object.keys(this.bulkReplace).forEach((key) => {
					if (!this.visibleColoumns.includes(key)) {
						this.bulkReplace[key] = undefined;
						this.bulkFind[key] = undefined;
					}
				});
				this.setVisibleColoumns(value);
			},
		},
	},
	methods: {
		...mapMutations("resourceManagement/bulk", {
			setVisibleColoumns: "SET_VISIBLE_COLOUMNS",
			setBulkEnabled: "SET_BULK_ENABLED",
			setBulkAdvancedEnabled: "SET_BULK_ADVANCED_ENABLED",
		}),
		// HELPER
		getResourceIndex(resource) {
			const resourceIndex = this.resources.findIndex(
				(item) => item._id === resource._id
			);
			if (resourceIndex === -1) {
				throw new Error("Item not found." + JSON.stringify(resource));
			}
			return resourceIndex;
		},
		getResourceSearchIndex(resource) {
			return this.resourceStartIndex + this.resources.indexOf(resource) + 1;
		},
		showNetworkError(fallbackMessage) {
			return (error) => {
				this.$toasted.error(error.message ? error.toString() : fallbackMessage);
			};
		},
		updateResource(existing, newResource) {
			Object.entries(newResource).forEach(([key, value]) => {
				existing[key] = value;
			});
		},
		// EDIT SINGLE
		patchResource(resource) {
			const resourceViewIndex = this.getResourceSearchIndex(resource);
			return this.$_resourcePatch(resource)
				.then((result) => {
					this.$toasted.show(`L${resourceViewIndex} - Saved`);
					this.updateResource(resource, result);
				})
				.catch(this.showNetworkError(`L${resourceViewIndex} - Failed to save`));
		},
		deleteResource(resource) {
			const resourceViewIndex = this.getResourceSearchIndex(resource);
			return this.$_resourceDelete(resource._id)
				.then((result) => {
					this.$toasted.show(`L${resourceViewIndex} - Deleted`);
					this.resources.splice(this.getResourceIndex(resource), 1);
				})
				.catch(
					this.showNetworkError(`L${resourceViewIndex} - Failed to delete`)
				);
		},
		// EDIT BULK
		async patchBulk(data) {
			function removeUndefined(obj) {
				const cleanedData = {};
				Object.entries(obj).forEach(([key, value]) => {
					if (value !== undefined) {
						cleanedData[key] = value;
					}
				});
				return cleanedData;
			}

			const replaceQuery = removeUndefined({
				...this.query,
				$replace: this.bulkFind,
			});

			const affectedItems = await this.$_resourceFindAmount(replaceQuery);
			if (!window.confirm(`${affectedItems} Einträge bearbeiten?`)) {
				return;
			}
			this.inProgress = true;

			return this.$_resourceBulkPatch(replaceQuery, removeUndefined(data))
				.then((results) => {
					this.$toasted.show(`Patched ${results.length} Resources`);
					const visibleIds = this.resources.map((r) => r._id);
					const visibleUpdatedResources = results.forEach((newResource) => {
						const visibileIndex = visibleIds.indexOf(newResource._id);
						if (visibileIndex === -1) {
							return;
						}
						this.updateResource(this.resources[visibileIndex], newResource);
					});
				})
				.catch(this.showNetworkError("Failed to patch"))
				.finally(() => {
					this.inProgress = false;
				});
		},
		async deleteBulk() {
			const affectedItems = await this.$_resourceFindAmount(this.query);
			if (
				!window.confirm(
					this.$lang.resourceManagement.bulk.confirmPatch(affectedItems)
				)
			) {
				return;
			}
			this.inProgress = true;

			return this.$_resourceBulkDelete(this.query)
				.then((results) => {
					this.$toasted.show(`Deleted ${results.length} Resources`);
					// give the server some time to sync up elasticsearch
					setTimeout(() => {
						this.$emit("reload");
					}, 3000);
				})
				.catch(this.showNetworkError("Failed to delete"))
				.finally(() => {
					this.inProgress = false;
				});
		},
	},
};
</script>
<style lang="scss" scoped>
.hint {
	margin: 0 auto 0.5em;
	color: var(--darkGrey);
}
</style>
