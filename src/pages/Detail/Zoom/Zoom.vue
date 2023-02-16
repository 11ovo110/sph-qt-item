<template>
  <div class="spec-preview">
    <img :src="imgObj.imgUrl"/>
    <div class="event" @mousemove="moveHandler"></div>
    <div class="big">
      <img :src="imgObj.imgUrl" ref="imgRef"/>
    </div>
    <div class="mask" ref="maskRef"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    name: "Zoom",
    mounted() {
      this.$bus.$on('imgNum', (index) => {
        this.index = index;
      })
    },
    data() {
      return {
        index: 0
      }
    },
    methods: {
      moveHandler(e) {
        let mask = this.$refs.maskRef;
        let img = this.$refs.imgRef;
        let left = e.offsetX - mask.offsetWidth / 2;
        let top = e.offsetY - mask.offsetHeight / 2;
        if(left < 0) left = 0;
        if(left > mask.offsetWidth) left = mask.offsetWidth;
        if(top < 0) top = 0;
        if(top > mask.offsetHeight) top = mask.offsetHeight;
        mask.style.left = left + 'px';
        mask.style.top = top + 'px';
        img.style.left = -2 * left + 'px';
        img.style.top = -2 * top + 'px';
      }
    },
    computed: {
      ...mapGetters(['skuImageList']),
      imgObj() {
        return this.skuImageList[this.index] || {}
      }
    },
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>