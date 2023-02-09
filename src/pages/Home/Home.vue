<template>
  <div>
    <TypeNav></TypeNav>
    <list></list>
    <recommend></recommend>
    <rank></rank>
    <like></like>
    <floor v-for="(floor, index) in floorArr" :f="floor" :key="index"></floor>
    <brand></brand>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Brand from './Brand/Brand.vue'
import Floor from './Floor/Floor.vue'
import Like from './Like/Like.vue'
import List from './List/List.vue'
import Rank from './Rank/Rank.vue'
import Recommend from './Recommend/Recommend.vue'
export default {
  components: { List, Recommend, Rank, Like, Floor, Brand },
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