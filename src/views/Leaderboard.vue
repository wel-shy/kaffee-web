<template lang="pug">
    div#leaderboard(
        v-if="boardData"
    )
        section.section
            div.container
                h1.title {{boardData.leaderboard.name}}
</template>

<script>
import LeaderboardController from "../controllers/LeaderboardController";
export default {
  name: "Leaderboard",
  data: function() {
    return {
      id: ""
    };
  },
  async mounted() {
    this.id = this.$route.params.id;

    if (!this.id) {
      return null;
    }

    let data = this.$store.getters.getLeaderboardData(this.id);
    if (!data) {
      await LeaderboardController.getLeaderboardData(this.id);
    }
  },
  computed: {
    boardData: function() {
      if (!this.id) {
        return null;
      }

      let data = this.$store.getters.getLeaderboardData(this.id);
      return data;
    }
  }
};
</script>
