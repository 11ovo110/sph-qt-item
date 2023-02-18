<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.flag"></Footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      url: ''
    }
  },
  mounted() {
    this.$store.dispatch('getTypeNav');
  },
}
</script>

<style scoped>

</style>