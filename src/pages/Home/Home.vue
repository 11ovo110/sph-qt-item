<template>
  <div>
    <type-nav></type-nav>
    <list></list>
    <recommend></recommend>
    <rank></rank>
    <like></like>
    <floor v-for="v in 2"></floor>
    <brand></brand>
  </div>
</template>

<script>
import Brand from '../home/brand/Brand.vue'
import Floor from '../home/floor/Floor.vue'
import Like from '../home/like/Like.vue'
import List from '../home/list/List.vue'
import Rank from '../home/rank/Rank.vue'
import Recommend from '../home/recommend/Recommend.vue'
export default {
  components: { List, Recommend, Rank, Like, Floor, Brand },
  name: 'Home'
}
</script>

<style scoped>

</style>