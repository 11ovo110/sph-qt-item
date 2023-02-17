<template>
  <div>
    <img :src="url" alt="" style="width:200px;height:200px">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.flag"></Footer>
  </div>
</template>

<script>
import QRCode from 'qrcode';

export default {
  name: 'App',
  data() {
    return {
      url: ''
    }
  },
  mounted() {
    this.$store.dispatch('getTypeNav');
    QRCode.toDataURL('我的').then(res => {
      this.url = res;
    })
  },
}
</script>

<style scoped>

</style>