<template>
  <div>
    <Swiper :options="options">
      <SwiperSlide v-for="(thumImg, index) in skuImageList" :key="thumImg.id">
        <img :src="thumImg.imgUrl" @click="changeChecked(index)" :class="{'active': current==index}" alt="">
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </Swiper>
  </div>
</template>

<script>

import { SwiperSlide } from 'vue-awesome-swiper';
import { mapGetters } from 'vuex'
  export default {
    name: "ImageList",
    data() {
      return {
        options: {
        //左右按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        //轮播图一个同时展示几张图标
        slidesPerView: 4,
      },
      current: 0
      }
    },
    methods: {
      changeChecked(index) {
        this.current = index;
        this.$bus.$emit('changeImg', index);
      }
    },
    computed: {
        ...mapGetters(["skuImageList"])
    },
    components: { SwiperSlide }
}
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      width: 56px;
      height: 56px;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }

      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>