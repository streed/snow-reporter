import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import api from '../clients/api';

export default new Vuex.Store({
  state: {
    areas: []
  },
  mutations: {
    setAreas (state, areas) {
      state.areas = areas;
    }
  },
  actions: {
    async loadAreas ({commit}) {
      const areas = await api.areas();
      Vue.$log.info(`Loaded ${areas.length} areas`);
      commit('setAreas', areas);
    },
  },
  modules: {
  }
})
