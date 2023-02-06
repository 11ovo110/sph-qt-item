<template>
  <div>
    <type-nav></type-nav>
    <list></list>
    <recommend></recommend>
    <rank></rank>
    <like></like>
    <floor v-for="f in 2"></floor>
    <brand></brand>
  </div>
</template>

<script>
import Recommend from './Recommend/Recommend.vue'
import List from './List/List.vue'
import Rank from './Rank/Rank.vue'
import Like from './Like/Like.vue'
import Floor from './Floor/Floor.vue'
import Brand from './Brand/Brand.vue'
export default {
  components: { List, Recommend, Rank, Like, Floor, Brand },
  name: 'Home'
}
</script>

<style scoped>

</style>