<template lang="pug">
    div#leaderboard(
        v-if="boardData"
    )
        section.section
            div.container
                h1.title {{boardData.leaderboard.name}}
                div.member-container
                    div.card.member-card(
                        v-for="member in boardData.members"
                    )
                        h4.is-size-5 {{ member.displayName }}
                        p 
                            span.icon
                                i.fas.fa-coffee
                                | &nbsp;{{ member.coffees.length }}
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

<style lang="scss" scoped>
.member-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);

  margin-bottom: 1.25%;
}

// mobile
@media (min-width: 500px) {
  .member-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

// tablet
@media (min-width: 768px) {
  .member-container {
    grid-template-columns: repeat(5, 1fr);
  }
}

.member-card {
  display: inline-grid;

  padding: 5%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.25);

  transition-duration: 0.4s;

  &:hover {
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.5);
  }

  .is-size-5 {
    flex-grow: 1;
  }

  .icon {
    margin-left: 2.5%;
  }
}
</style>
