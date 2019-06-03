<template lang="pug">
    div#add-container.has-text-center
        section.section
            Button(
                @clicked="logCoffee()",
                :msg="msg",
                :color="buttonColor",
                :textColor="textColor"
            )
</template>

<script>
import Button from "../components/Button.vue";
import CoffeeController from "../controllers/CoffeeController";

export default {
  name: "AddContainer",
  components: {
    Button
  },
  data: function() {
    return {
      msg: "Log a coffee",
      buttonColor: "#00d1b2",
      textColor: "#FFFFFF"
    };
  },
  methods: {
    logCoffee: async function() {
      await CoffeeController.addCoffee();
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding-top: 0;
  text-align: center;
}
</style>
