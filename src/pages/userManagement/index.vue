<template>
	<div>
		<h2>Verwaltung</h2>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Benutzername</th>
					<th>Vorname</th>
					<th>Nachname</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				<TableRow
					v-for="(user, index) in tmpUsers"
					:key="user._id"
					:resource="user"
					:rowName="index + 1"
					:visibleColoumns="TableMapping.map((a) => a.key)"
					:keyInputMapping="TableMapping"
					:actionConfig="{ submit: true, delete: true }"
					@submit="submitUser"
					@delete="deleteUser"
				/>
			</tbody>
		</table>
	</div>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import TableRow from "@/components/resourceManagement/index/EditTable/EditTableRow";
import TableInput from "@/components/resourceManagement/index/EditTable/TableInputs/TableInput";

export default {
	components: {
		TableRow,
	},
	data() {
		return {
			TableMapping: [
				{
					key: "username",
					component: TableInput,
					attributes: { type: "text" },
					wrapperAttributes: {},
					type: String,
				},
				{
					key: "forename",
					component: TableInput,
					attributes: { type: "text" },
					wrapperAttributes: {},
					type: String,
				},
				{
					key: "familyname",
					component: TableInput,
					attributes: { type: "text" },
					wrapperAttributes: {},
					type: String,
				},
				{
					key: "email",
					component: TableInput,
					attributes: { type: "email" },
					wrapperAttributes: {},
					type: String,
				},
			],
			tmpUsers: [],
		};
	},
	computed: {
		...mapGetters("user", {
			users: "GET_USERS",
		}),
	},
	watch: {
		users: function(to) {
			this.tmpUsers = JSON.parse(JSON.stringify(to));
		},
	},
	created() {
		const config = {
			path: this.$route.path,
			actions: [
				{
					icon: "add",
					text: "Registrieren",
					event: "navigate",
					payload: { name: "userManagement/registration" },
				},
			],
		};
		this.registerFab(config);
		this.fetchUsers();
	},
	methods: {
		...mapMutations("ui", {
			registerFab: "REGISTER_FAB",
		}),
		...mapActions("user", {
			fetchUsers: "FETCH_USERS",
			patchUser: "PATCH_USER",
			removeUser: "REMOVE_USER",
		}),
		submitUser(event) {
			this.patchUser(event).then(
				(response) => {
					this.$toasted.show(`Changed`);
				},
				(error) => {
					this.$toasted.error(`Failed to change user` + error);
				}
			);
		},
		deleteUser(event) {
			this.removeUser(event).then(
				(response) => {
					this.$toasted.show(`Deleted`);
				},
				(error) => {
					this.$toasted.error(`Failed to delete user` + error);
				}
			);
		},
	},
};
</script>
<style lang="scss" scoped>
table {
	width: 100%;
	border-collapse: collapse;
}
</style>
