<template lang="pug">
    div#button
        button.button(
            @click="$emit('clicked')",
            type="button",
            :style="{'background-color': color, 'color': textColor}"
        ) {{msg}}
</template>

<script>
export default {
  name: "Button",
  props: ["msg", "color", "textColor"]
};
</script>

<style lang="scss" scoped></style>
