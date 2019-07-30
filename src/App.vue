<template lang="pug">
    div#app
      Navbar
      Title
      Busy(
        v-if="isBusy"
      )
      
      router-view(
        v-if="isAuthenticated"
      )

      Footer
</template>

<script>
import NotificationController from "./controllers/NotificationController";
import AuthController from "./controllers/AuthController";
import BusyController from "./controllers/BusyController";

import Title from "./components/Title.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Busy from "./components/Busy.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Title,
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
  async mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition);
    } else {
      NotificationController.setError(
        "Coffees will not be tagged with a location."
      );
    }

    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      BusyController.setFree();
      return;
    }

    await AuthController.fetchToken();
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
