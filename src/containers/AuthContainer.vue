<template lang="pug">
    div#auth-container
        section.section.container
            LoginForm(
                v-if="showLogin",
                @submitted="login",
                @switch-form="switchForm"
            )
            RegisterForm(
                v-else,
                @submitted="register",
                @switch-form="switchForm"
            )
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";
import AuthController from "../controllers/AuthController";
import CoffeeController from "../controllers/CoffeeController";

export default {
  name: "AuthContainer",
  components: {
    LoginForm,
    RegisterForm
  },
  data: function() {
    return {
      showLogin: true
    };
  },
  methods: {
    login: async function(eventData) {
      const token = await AuthController.login(
        eventData.email,
        eventData.password
      );
      if (token) {
        await CoffeeController.getCoffeeCount();
      }
    },
    register: async function(eventData) {
      await AuthController.register(eventData.email, eventData.password);
    },
    switchForm: function() {
      this.showLogin = !this.showLogin;
    }
  }
};
</script>

<style lang="scss" scoped></style>
