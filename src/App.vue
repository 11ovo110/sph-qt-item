<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.flag"></Footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

</style>