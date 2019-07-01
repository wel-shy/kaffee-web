<template lang="pug">
    tr#coffee-row
        td.has-text-left {{ type }}
        td.has-text-right {{ count }}
        td.has-text-right
            Button(
                @clicked="logCoffee(type)",
                :msg="msg",
                :color="buttonColor",
                :textColor="textColor"
            )
</template>

<script>
import Button from "./Button.vue";
import CoffeeController from "../controllers/CoffeeController";

export default {
  name: "CoffeeRow",
  props: ["type"],
  components: {
    Button
  },
  data() {
    return {
      msg: "+",
      buttonColor: "#00d1b2",
      textColor: "#FFFFFF"
    };
  },
  methods: {
    /**
     * Log a coffee
     */
    logCoffee: async function() {
      await CoffeeController.addCoffee(this.type);
    }
  },
  computed: {
    /**
     * Get a count of this coffee type.
     */
    count: function() {
      return this.$store.getters.getCoffee.filter(c => c.type === this.type)
        .length;
    }
  }
};
</script>
