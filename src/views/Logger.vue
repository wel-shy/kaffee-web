<template lang="pug">
    div#logger
      AddContainer
</template>

<script>
import AddContainer from "../containers/AddContainer.vue";
import CoffeeController from "../controllers/CoffeeController";

export default {
  name: "Logger",
  components: {
    AddContainer
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
    await CoffeeController.getCoffeeCount();
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
