<template>
  <div id="app">
    <PhoneBook />
  </div>
</template>

<script>
import PhoneBook from "./modules/phone-book";

export default {
  name: "App",
  components: {
    PhoneBook,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
