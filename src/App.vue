<template lang="pug">
    div#app
      Navbar
      Notification
      Title
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
import Notification from "./components/Notification.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

import AddContainer from "./containers/AddContainer.vue";
import CountContainer from "./containers/CountContainer.vue";
import AuthContainer from "./containers/AuthContainer.vue";
import AuthController from "./controllers/AuthController";

export default {
  name: "app",
  components: {
    Navbar,
    Title,
    AddContainer,
    CountContainer,
    AuthContainer,
    Notification,
    Footer
  },
  computed: {
    isAuthenticated: function() {
      return this.$store.getters.getAuthToken.length > 1;
    }
  },
  mounted: function() {
    const token = localStorage.getItem("refreshToken");
    if (!token) {
      return;
    }

    AuthController.fetchToken();
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
