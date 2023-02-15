<template>
  <div>
    <TypeNav></TypeNav>
    <list></list>
    <recommend></recommend>
    <rank></rank>
    <like></like>
    <floor v-for="floor in floorArr" :key="floor.id" :floor="floor"></floor>
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
  components: { Recommend, List, Rank, Like, Floor, Brand },
  name: 'Home',
  mounted() {
    this.$store.dispatch('getFloor');
    this.$store.dispatch('getUserInfo')
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