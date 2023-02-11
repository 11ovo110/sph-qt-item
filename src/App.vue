<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch('TypeNav');
  },
};
</script>

<style scoped>
</style>