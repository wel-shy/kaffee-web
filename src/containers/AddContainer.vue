<template lang="pug">
    div#add-container.has-text-center
        section.section
            div.container
              table.table.is-hoverable.is-fullwidth
                tbody
                  tr(
                    v-for="coffee in coffeeTypes"
                  )
                    td.has-text-left {{ coffee }}
                    td.has-text-right
                      Button(
                        @clicked="logCoffee(coffee)",
                        :msg="msg",
                        :color="buttonColor",
                        :textColor="textColor"
                      )
              p You've had {{count}} damn fine cups of coffee

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
      msg: "+",
      buttonColor: "#00d1b2",
      textColor: "#FFFFFF",
      lat: "",
      lon: "",
      coffeeTypes: [
        "Americano",
        "Espresso",
        "Cappuccino",
        "Latte",
        "Freddo",
        "Flat White",
        "Other"
      ]
    };
  },
  methods: {
    logCoffee: async function(coffee) {
      await CoffeeController.addCoffee(coffee);
    }
  },
  computed: {
    count: function() {
      return this.$store.getters.getCount;
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
