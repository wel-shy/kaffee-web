<template lang="pug">
    div#auth-container
        section.section.container
            LoginForm(
                v-if="showLogin",
                @submitted="login(e)",
                @switch-form="switchForm"
            )
            RegisterForm(
                v-else,
                @submitted="register(e)",
                @switch-form="switchForm"
            )
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";

export default {
    name: "AuthContainer",
    components: {
        LoginForm,
        RegisterForm
    },
    data: function () {
        return {
            showLogin: true
        };
    },
    methods: {
        login: function(eventData) {
            console.log(eventData);
        },
        register: function(eventData) {
            console.log(eventData);
        },
        switchForm: function () {
            this.showLogin = !this.showLogin;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

