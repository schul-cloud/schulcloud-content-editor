import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import createPersistedState from "vuex-persistedstate";
import ui from "./ui";
import user from "./user";
import resourceManagement from "./resourceManagement";

export default new Vuex.Store({
	strict: true,
	plugins: [createPersistedState()],
	modules: {
		ui,
		user,
		resourceManagement,
	},
});
