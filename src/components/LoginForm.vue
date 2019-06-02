<template lang="pug">
    div#login-form
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
            div.field-body
                div.field
                    p.control
                        button.button.is-info(
                            @click="login",
                            :disabled="submitDisabled"
                        ) Login
        
        div.field.is-horizontal
            div.field-label.is-normal
            div.field-body
                div.field
                    div.control
                        p Don't have an account?
                        p 
                            a(
                                @click="$emit('switch-form')"
                            ) Register
</template>

<script>
export default {
  name: "LoginForm",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      this.$emit("submitted", {
        email: this.email,
        password: this.password
      });
    }
  },
  computed: {
    submitDisabled: function() {
      return this.email.length == 0 || this.password.length == 0;
    }
  }
};
</script>

<style lang="scss" scoped></style>
