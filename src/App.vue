<template>
  <div>
    <!-- <Pagination 
    :total="total" :current="current" :limit="limit" :pageCount="pageCount"
    @getCurrent="getCurrent"
    @getLimit="getLimit"
    ></Pagination> -->
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      total: 99,
      current: 5,
      limit: 3,
      pageCount: 5
    }
  },
  methods: {
    getCurrent(current) {
      this.current = current;
    },
    getLimit(limit) {
      this.current = 1;
      this.limit = limit;
    }
  }
}
</script>

<style scoped>

</style>