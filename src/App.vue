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
          CoffeeContainer

        Footer
</template>

<script>
import Title from "./components/Title.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Busy from "./components/Busy.vue";

import CoffeeContainer from "./containers/CoffeeContainer.vue";
import AuthContainer from "./containers/AuthContainer.vue";
import AuthController from "./controllers/AuthController";
import BusyController from "./controllers/BusyController";
import CoffeeController from "./controllers/CoffeeController";
import NotificationController from "./controllers/NotificationController";

export default {
  name: "app",
  components: {
    Navbar,
    Title,
    CoffeeContainer,
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
  methods: {
    setPosition: function(position) {
      this.$store.commit("setCoords", position);
    }
  },
  mounted: async function() {
    BusyController.setBusy("Logging in");

    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      BusyController.setFree();
      return;
    }

    const token = await AuthController.fetchToken();
    if (token) {
      CoffeeController.getCoffeeCount();
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition);
    } else {
      NotificationController.setError(
        "Coffees will not be tagged with a location."
      );
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
