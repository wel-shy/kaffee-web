<template lang="pug">
    div#title
        div.hero
            div.hero-header.has-text-right(
                v-if="isAuthenticated"
            )
                Button#logout(
                    @clicked="logout()",
                    :msg="logoutMsg",
                    :color="logoutColor",
                    :textColor="logoutTextColor"
                )
            div.hero-body
                h1.title Kaffee ☕️

</template>

<script>
import Button from "./Button.vue";
import { functionDeclaration } from "babel-types";

export default {
  name: "Title",
  components: {
    Button
  },
  data: function() {
    return {
      logoutMsg: "Logout",
      logoutColor: "#3273dc",
      logoutTextColor: "white"
    };
  },
  computed: {
    isAuthenticated: function() {
      return this.$store.getters.getAuthToken.length > 0;
    }
  },
  methods: {
    logout: function() {
      this.$store.commit("deleteTokens");
    }
  }
};
</script>

<style lang="scss" scoped>
#logout {
  margin-right: 5%;
}
</style>
