import Vue from "vue";
import Router from "vue-router";
import Logger from "./views/Logger.vue";
import Leaderboards from "./views/Leaderboards";
import Leaderboard from "./views/Leaderboard";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "logger",
      component: Logger
    },
    {
      path: "/leaderboards",
      name: "leaderboards",
      component: Leaderboards
    },
    {
      path: "/leaderboards/:id",
      name: "leaderboard",
      component: Leaderboard
    }
  ]
});
