<template>
  <div>
    <type-nav></type-nav>
    <list></list>
    <recommend></recommend>
    <rank></rank>
    <like></like>
    <floor v-for="(floor, index) in floorArr" :key="index" :f="floor"></floor>
    <brand></brand>
  </div>
</template>

<script>
import TypeNav from '@/components/TypeNav/TypeNav.vue'
import List from './List/List.vue'
import Recommend from './Recommend/Recommend.vue'
import Rank from './Rank/Rank.vue'
import Like from './Like/Like.vue'
import Floor from './Floor/Floor.vue'
import Brand from './Brand/Brand.vue'
import { mapState } from 'vuex'
export default {
  components: { List, TypeNav, Recommend, Rank, Like, Floor, Brand },
  name: 'Home',
  mounted() {
    this.$store.dispatch('getFloor');
  },
  computed: {
    ...mapState({
      floorArr: state => state.home.floorArr
    })
  },
}
</script>

<style scoped>

</style>