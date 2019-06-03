<template lang="pug">
    div#button
        button.button.is-inverted(
            @click="$emit('clicked')",
            type="button",
            :style="{'background-color': color, 'color': textColor}"
        ) 
          strong {{msg}}
</template>

<script>
export default {
  name: "Button",
  props: ["msg", "color", "textColor"]
};
</script>

<style lang="scss" scoped></style>
