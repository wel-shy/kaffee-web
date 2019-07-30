<template lang="pug">
    div#leaderboard-meta-data
      div.card
        h4.is-size-5(
          @click="selectBoard"
        ) {{ board.name }}
        p 
          span.icon
            i.far.fa-user
            | &nbsp;{{ getMemberCount(board) }}
</template>

<script>
export default {
  name: "LeaderboardMetaData",
  props: ["board"],
  methods: {
    getMemberCount: function(board) {
      let members = board.members || [];
      let administrators = board.administrators || [];

      return new Set(members.concat(administrators)).size;
    },
    /**
     * Set the active leaderboard in the store.
     */
    selectBoard: function() {
      this.$router.push({ path: `/leaderboards/${this.board.id}` });
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  padding: 2.5%;
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
}

.icon {
  margin-left: 2.5%;
}
</style>
