<template lang="pug">
    footer#footer.footer
        div.content.has-text-centered
            p
                |
                strong Kaffee&nbsp;
                | by&nbsp;
                a(
                    href="https://dwelsh.uk"
                ) Daniel Welsh
            p
                |
                a(
                    href="https://github.com/wel-shy/kaffee-api"
                ) Website
                | &nbsp;and&nbsp;
                a(
                    href="https://github.com/wel-shy/kaffee-web"
                ) API
                | &nbsp;licenced under&nbsp;
                a(
                    href="https://github.com/wel-shy/kaffee-web/blob/master/LICENSE"
                ) MIT
                |.
        Notification

</template>

<script>
import Notification from "../components/Notification";

export default {
  name: "Footer",
  components: {
    Notification
  }
};
</script>

<style lang="scss" scoped>
#footer {
  position: absolute;
  height: 1.5%;
  bottom: 0;
  width: 100%;
}
</style>
