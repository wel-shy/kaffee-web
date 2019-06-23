import Vue from "vue";
import Vuex from "vuex";

import Coffee from "./modules/Coffee";
import Auth from "./modules/Auth";
import Notification from "./modules/Notification";
import Busy from "./modules/Busy";
import Location from "./modules/Location";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Coffee,
    Auth,
    Notification,
    Busy,
    Location
  }
});
