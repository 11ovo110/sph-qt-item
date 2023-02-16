<template>
  <div>
    <Swiper :options="options" ref="swiper">
      <SwiperSlide v-for="(skuImg, index) in skuImageList" :key="skuImg.id">
          <img :src="skuImg.imgUrl" alt="" @click="changeImg(index)" :class="{'active': current==index}">
      </SwiperSlide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
  </Swiper>
  </div>
</template>

<script>

  import Swiper from 'swiper'
import { mapGetters } from 'vuex'
  export default {
    name: "ImageList",
    methods: {
      changeImg(index) {
        this.current = index;
        this.$bus.$emit('imgNum', index);
      }
    },
    data() {
      return {
        options: {
        //控制轮播图方向
        direction: "horizontal",
        slidesPerView : 5,
        //导航按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      current: 0
      }
    },
    computed: {
      ...mapGetters(['skuImageList'])
    },
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

        &:hover {
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