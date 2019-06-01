<template lang="pug">
    div#add-container
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

export default {
  name: "AddContainer",
  components: {
    Button
  },
  data: function() {
    return {
      msg: "Log a coffee",
      buttonColor: "#ED5656",
      textColor: "#FFFFFF"
    };
  },
  methods: {
    logCoffee: function() {
      console.log("logging coffee");
      this.$store.commit("incrementCount");
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding-top: 0;
}
</style>
