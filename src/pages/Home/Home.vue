<template>
  <div>
    <type-nav></type-nav>
    <list></list>
    <recommend></recommend>
    <rank></rank>
    <like></like>
    <floor></floor>
    <floor></floor>
    <brand></brand>
  </div>
</template>

<script>
import Brand from './Brand/Brand.vue';
import Floor from './Floor/Floor.vue';
import Like from "./Like/Like.vue";
import List from "./List/List.vue";
import Rank from "./Rank/Rank.vue";
import Recommend from "./Recommend/Recommend.vue";
export default {
  components: { List, Recommend, Rank, Like, Floor, Brand },
  name: "Home",
};
</script>

<style scoped>
</style>