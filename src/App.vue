<template lang="pug">
    div#app
      Navbar
      Title
      Busy(
        v-if="isBusy"
      )
      div(
        v-else
      )
        AuthContainer(
          v-if="!isAuthenticated"
        )

        div(
          v-else
        )
          AddContainer
          CountContainer
        
        Footer
</template>

<script>
import Title from "./components/Title.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Busy from "./components/Busy.vue";

import AddContainer from "./containers/AddContainer.vue";
import CountContainer from "./containers/CountContainer.vue";
import AuthContainer from "./containers/AuthContainer.vue";
import AuthController from "./controllers/AuthController";
import BusyController from './controllers/BusyController';
import CoffeeController from './controllers/CoffeeController';

export default {
  name: "app",
  components: {
    Navbar,
    Title,
    AddContainer,
    CountContainer,
    AuthContainer,
    Footer,
    Busy
  },
  computed: {
    isAuthenticated: function() {
      return this.$store.getters.getAuthToken.length > 1;
    },
    isBusy: function() {
      return this.$store.getters.getBusyStatus;
    }
  },
  mounted: async function() {
    BusyController.setBusy("Logging in")

    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      BusyController.setFree();
      return;
    }

    const token = await AuthController.fetchToken();
    if (token) {
      CoffeeController.getCoffeeCount();
    }
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
