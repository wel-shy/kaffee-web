<template lang="pug">
    div#leaderboard-selector
      section.section
        div.meta-data-container.container
          LeaderboardMetaData.meta-data(
              v-for="board in leaderboards",
              :board="board"
          )
        div.show-all-container(
          v-if="leaderboardCount > 4"
        )
          Button(
            @clicked="toggleShowAll",
            :msg="msg",
            :color="buttonColor",
            :textColor="textColor"
          )
</template>

<script>
import LeaderboardMetaData from "../components/Leaderboard/LeaderboardMetaData";
import Button from "../components/Button.vue";

export default {
  name: "LeaderboardSelector",
  components: {
    LeaderboardMetaData,
    Button
  },
  data: function() {
    return {
      showAll: false,
      msg: "Show all",
      buttonColor: "#00d1b2",
      textColor: "#FFFFFF"
    };
  },
  computed: {
    /**
     * Get the leaderboards, defaults to 4.
     */
    leaderboards: function() {
      const leaderboards = this.$store.getters.getLeaderboards;
      if (this.showAll) {
        return leaderboards;
      }
      return leaderboards.slice(0, 4);
    },
    /**
     * Get the amount of leaderboards.
     */
    leaderboardCount: function() {
      return this.$store.getters.getLeaderboardCount;
    }
  },
  methods: {
    /**
     * Toggle showing all leaderboards.
     */
    toggleShowAll: function() {
      this.showAll = !this.showAll;
      if (this.showAll) {
        this.msg = "Show less";
      } else {
        this.msg = "Show all";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.meta-data-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);

  margin-bottom: 1.25%;
}

// mobile
@media (min-width: 500px) {
  .meta-data-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

// tablet
@media (min-width: 768px) {
  .meta-data-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

.meta-data {
  display: inline-grid;
}

.show-all-container {
  text-align: center;
}
</style>
