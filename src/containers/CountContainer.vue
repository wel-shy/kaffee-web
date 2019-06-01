<template lang="pug">
    div#count-container
        section.section
            p You've had {{count}} damn fine cups of coffee
</template>

<script>
export default {
  name: "CountContainer",
  computed: {
    count: function() {
      return this.$store.getters.getCount;
    }
  }
};
</script>

<style lang="scss" scoped></style>
