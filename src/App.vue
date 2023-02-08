<template>
 <Swiper class="swiper" :options="options" ref="swiperRef">
  <SwiperSlide v-for="s in 10">模块1</SwiperSlide>
  <!-- 如果需要分页器 -->
  <div class="swiper-pagination" slot="pagination"></div>

  <!-- 如果需要导航按钮 -->
  <div class="swiper-button-prev" slot="button-prev"></div>
  <div class="swiper-button-next" slot="button-next"></div>
 </Swiper>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      options: {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // effect: 'fade',
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
    }
    }
  },
  mounted(){
    let div = this.$refs.swiperRef.$el;
    div.onmouseenter = () => this.$refs.swiperRef.$swiper.autoplay.stop();
    div.onmouseleave = () => this.$refs.swiperRef.$swiper.autoplay.start();
  },
}
</script>

<style scoped>
  .swiper {
    width: 600px;
    height: 300px;
    border: 1px solid aqua;
  }
</style>