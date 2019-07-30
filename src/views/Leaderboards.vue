<template lang="pug">
    div#leaderboards
        LeaderboardSelector
</template>

<script>
import LeaderboardController from "../controllers/LeaderboardController";
import LeaderboardSelector from "../containers/LeaderboardSelector.vue";

export default {
  name: "Leaderboards",
  components: {
    LeaderboardSelector
  },
  async mounted() {
    await LeaderboardController.getLeaderboards();
  }
};
</script>

<style lang="scss" scoped></style>
