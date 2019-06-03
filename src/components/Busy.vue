<template lang="pug">
    div#busy
        div.container.has-text-centered
            p
                span.icon.is-large
                    i.fas.fa-asterisk
            p {{message}}
</template>

<script>
export default {
  name: "Busy",
  computed: {
    message: function() {
      return this.$store.getters.getBusyMessage;
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.icon {
  font-size: 2.5rem;
  animation: spin 2s linear infinite;
}
</style>
