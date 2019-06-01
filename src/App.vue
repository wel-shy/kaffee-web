<template>
  <div id="app">
    <Title></Title>
    <AuthContainer></AuthContainer>
    <AddContainer></AddContainer>
    <CountContainer></CountContainer>
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import AddContainer from "./containers/AddContainer.vue";
import CountContainer from "./containers/CountContainer.vue";
import AuthContainer from "./containers/AuthContainer.vue";

export default {
  name: "app",
  components: {
    Title,
    AddContainer,
    CountContainer,
    AuthContainer
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
