<template lang="pug">
    div#register-form
        div.field.is-horizontal
            div.field-label.is-normal
                label.label Email
            div.field-body
                div.field
                    p.control.has-icons-left.has-icons-right
                        input.input(
                            type="email",
                            placeholder="Email",
                            v-model="email"
                        )
                        span.icon.is-small.is-left
                            i.fas.fa-envelope
        
        div.field.is-horizontal
            div.field-label.is-normal
                label.label Password
            div.field-body
                div.field
                    p.control.has-icons-left.has-icons-right
                        input.input(
                            type="password",
                            placeholder="Password",
                            v-model="password"
                        )
                        span.icon.is-small.is-left
                            i.fas.fa-lock
        
        div.field.is-horizontal
            div.field-label.is-normal
                label.label Confirm Password
            div.field-body
                div.field
                    p.control.has-icons-left.has-icons-right
                        input.input(
                            type="password",
                            placeholder="Confirm Password",
                            v-model="confirmPassword"
                        )
                        span.icon.is-small.is-left
                            i.fas.fa-lock
        
        div.field.is-horizontal
            div.field-label.is-normal
            div.field-body
                div.field
                    p.control
                        button.button.is-info(
                            @click="register",
                            :disabled="submitDisabled"
                        ) Register

        div.field.is-horizontal
            div.field-label.is-normal
            div.field-body
                div.field
                    div.control
                        p Have an account?
                        p 
                            a(
                                @click="$emit('switch-form')"
                            ) Login
            
</template>

<script>
import AuthController from "../controllers/AuthController";
import NotificationController from "../controllers/NotificationController";
export default {
  name: "RegisterForm",
  data: function() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    register: function() {
      const verified = AuthController.validateEmail(this.email);
      if (!verified) {
        NotificationController.setError("Email not valid");
        return;
      }
      if (this.password !== this.confirmPassword) {
        return;
      }

      this.$emit("submitted", {
        email: this.email,
        password: this.password
      });
    }
  },
  computed: {
    submitDisabled: function() {
      return (
        this.email.length == 0 ||
        this.password.length == 0 ||
        this.confirmPassword.length == 0
      );
    }
  }
};
</script>

<style lang="scss" scoped></style>
