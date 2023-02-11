<template>
  <div>
    <Pagination :total="99" :limit="3" :current="32" :pageCount="5"></Pagination>
    <!-- <Header></Header>
    <router-view></router-view>
    <Footer></Footer> -->
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>

</style>