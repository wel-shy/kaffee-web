<template lang="pug">
    div#count-container
        section.section
            p You've had {{count}} cups of damn fine coffee.
</template>

<script>
export default {
    name: "CountContainer",
    data: function() {
        return {
            count: 0
        };
    },
}
</script>

<style lang="scss" scoped>

</style>

