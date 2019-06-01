import Vue from "vue";
import Vuex from "vuex";

import Coffee from "./modules/Coffee";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Coffee
  }
});
