import Vue from "vue";
import Vuex from "vuex";

import Profile from "./modules/Profile";
import StudySession from "./modules/StudySession";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Profile: Profile,
    StudySession: StudySession
  }
});
