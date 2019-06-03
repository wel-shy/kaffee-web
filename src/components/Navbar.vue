<template lang="pug">
    nav#navbar.navbar(
        role="navigation",
        aria-label="main navigation"
    )
        div.navbar-brand
            a.navbar-item(
                href="/"
            ) 
                strong ☕️&nbsp;&nbsp;&nbsp;Kaffee

            a.navbar-burger.burger(
                v-if="isAuthenticated",
                role="button",
                aria-label="menu",
                :aria-expanded="isExpanded",
                data-target="navbar-content",
                :class="{'is-active': isExpanded}",
                @click="toggleNav"
            )
                span(
                    aria-hidden="true"
                )
                span(
                    aria-hidden="true"
                )
                span(
                    aria-hidden="true"
                )
    
        div#navbar-content.navbar-menu(
            :class="{'is-active': isExpanded}"
        )
            div.navbar-end(
                    v-if="isAuthenticated"
                )
                div.navbar-item
                    a#logout(
                        @click="logout()",
                        :style="{color: logoutTextColor}"
                    ) 
                        strong Logout
                div.navbar-item
                    a#delete(
                        @click="deleteAccount()",
                        :style="{color: deleteTextColor}"
                    ) 
                        strong Delete Account
</template>

<script>
import Button from "../components/Button.vue";
import AuthController from "../controllers/AuthController";

export default {
  name: "navbar",
  components: {
    Button
  },
  data: function() {
    return {
      logoutTextColor: "hsl(0, 0%, 29%)",
      deleteTextColor: "hsl(348, 100%, 61%)",
      isExpanded: false
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
      if (deleted) {
        this.$store.commit("deleteTokens");
      }
    },
    toggleNav: function() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>

<style lang="scss" scoped></style>
