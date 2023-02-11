<template>
  <div>
    <Pagination
      :total="SearchParams.total"
      :limit="SearchParams.limit"
      :current="SearchParams.current"
      :pageCount="SearchParams.pageCount"
      @getCurrent="getCurrent"
      @getLimit="getLimit"
    ></Pagination>
    <!-- <Header></Header>
    <router-view></router-view>
    <Footer></Footer> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      SearchParams: {
        total: 99,
        limit: 3,
        current: 32,
        pageCount: 5,
      },
    };
  },
  methods: {
    getCurrent(current) {
      this.SearchParams.current = current;
    },
    getLimit(limit) {
      this.SearchParams.current = 1;
      this.SearchParams.limit = limit;
    }
  },
};
</script>

<style scoped>
</style>