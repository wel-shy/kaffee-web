<template lang="pug">
    div#button
        button.button.is-primary(
            @click="$emit('button-clicked')",
            type="button",
        ) {{msg}}
</template>

<script>
export default {
    name: "Button",
    props: ["msg", "color"]
}
</script>

<style lang="scss" scoped>

</style>
