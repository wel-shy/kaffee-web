<template lang="pug">
    div#leaderboard-header
        h3.is-size-3 {{ leaderboard.leaderboard.name }}
</template>

<script>
export default {
  name: "LeaderboardHeader",
  props: ["leaderboard"]
};
</script>

<style lang="scss" scoped></style>
