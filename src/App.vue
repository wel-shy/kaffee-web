<template lang="pug">
    div#app
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
</template>

<script>
import Title from "./components/Title.vue";
import Notification from "./components/Notification.vue";

import AddContainer from "./containers/AddContainer.vue";
import CountContainer from "./containers/CountContainer.vue";
import AuthContainer from "./containers/AuthContainer.vue";
import AuthController from "./controllers/AuthController";

export default {
  name: "app",
  components: {
    Title,
    AddContainer,
    CountContainer,
    AuthContainer,
    Notification
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
