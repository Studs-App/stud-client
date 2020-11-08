import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    studySessionId: '',
    title: '',
    subject: '',
    status: '',
    latitude: '',
    longitude: '',
    buds: '',
    duration: '',
    scheduledDate: '',
    isPrivate: false,
    profileId: '',
  },
  mutations: {},
  actions: {},
  modules: {}
});
