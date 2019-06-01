<template lang="pug">
    div#title
        div.hero
            div.hero-header.has-text-right(
                v-if="isAuthenticated"
            )
                div.buttons
                    Button#logout(
                        @clicked="logout()",
                        :msg="logoutMsg",
                        :color="logoutColor",
                        :textColor="logoutTextColor"
                    )

                    Button#delete(
                        @clicked="deleteAccount()",
                        :msg="deleteMsg",
                        :color="deleteColor",
                        :textColor="logoutTextColor"
                    )
            div.hero-body
                h1.title Kaffee ☕️

</template>

<script>
import Button from "./Button.vue";
import AuthController from "../controllers/AuthController";

export default {
  name: "Title",
  components: {
    Button
  },
  data: function() {
    return {
      logoutMsg: "Logout",
      deleteMsg: "Delete Account",
      logoutColor: "#3273dc",
      deleteColor: "#ff3860",
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
    },
    deleteAccount: async function() {
      const deleted = await AuthController.deleteAccount();
      this.$store.commit("deleteTokens");
    }
  }
};
</script>

<style lang="scss" scoped>
.buttons {
  float: right;
  margin-right: 5%;

  #delete {
    margin-left: 5px;
  }
}
</style>
