<template lang="pug">
    div#notification(
        v-show="isVisible"
    )
        div.notification.box.is-danger.is-outlined
            button.delete(
                @click="close"
            )
            p {{notificationMessage}}
</template>

<script>
export default {
  name: "Notification",
  methods: {
    close: function() {
      this.$store.commit("setVisible", false);
    }
  },
  computed: {
    isVisible: function() {
      return this.$store.getters.getVisibility;
    },
    notificationMessage: function() {
      return this.$store.getters.getMessage;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Inconsolata:700&display=swap");
#notification {
  font-family: "Inconsolata", monospace;
  width: 20%;
  position: absolute;
  right: 15px;
  bottom: 15px;
  text-align: left;
}

@media only screen and (max-width: 769px) {
  #notification {
    width: 50%;
  }
}

@media only screen and (max-width: 700px) {
  #notification {
    width: 75%;
  }
}
</style>
