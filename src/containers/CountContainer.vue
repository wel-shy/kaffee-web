<template lang="pug">
    div#count-container
        section.section
            p You've had {{count}} damn fine cups of coffee
</template>

<script>
import CoffeeController from "../controllers/CoffeeController";

export default {
  name: "CountContainer",
  computed: {
    count: function() {
      return this.$store.getters.getCount;
    }
  },
  async mounted() {
      await CoffeeController.getCoffeeCount();
  }
};
</script>

<style lang="scss" scoped></style>
