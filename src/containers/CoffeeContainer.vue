<template lang="pug">
    div#coffee-container.has-text-center
        section.section
            div.container
              table.table.is-hoverable.is-fullwidth
                thead
                  th Coffee Type
                  th.has-text-right Count
                  th.has-text-right Add
                tbody
                  CoffeeRow(
                    v-for="type in coffeeTypes",
                    :type="type"
                  )
              p You've had {{count}} damn fine cups of coffee

</template>

<script>
import Button from "../components/Button.vue";
import CoffeeRow from "../components/CoffeeRow.vue";

export default {
  name: "CoffeeContainer",
  components: {
    Button,
    CoffeeRow
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
  computed: {
    count: function() {
      return this.$store.getters.getCount;
    },
    typeCount: function(type) {
      return this.$store.getters.getCoffee.filter(c => c.type === type).length;
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding-top: 0;
  text-align: center;
  table {
    max-width: 80vh;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
