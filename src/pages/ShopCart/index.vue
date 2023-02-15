<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="good in cartInfoList" :key="good.id">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" :checked="good.isChecked" @change="changeChecked(good)">
          </li>
          <li class="cart-list-con2">
            <img :src="good.imgUrl">
            <div class="item-msg">{{good.skuName}}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{good.skuPrice}}</span>
          </li>
          <li class="cart-list-con5">
            <a @click="MinusNum(good)" class="mins">-</a>
            <input autocomplete="off" type="text" @input="UpdateNum(good, $event)" :value="good.skuNum" minnum="1" class="itxt">
            <a @click="AddNum(good)" class="plus">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{good.skuNum * good.skuPrice}}</span>
          </li>
          <li class="cart-list-con7">
            <a @click="deleteGood(good)" class="sindelet">删除</a>
            <br>
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" :checked="checkAll" @click="UpdateChecked">
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="deleteAll">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>{{total}}</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{totalPrice}}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="###" target="_blank">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
  export default {
    name: 'ShopCart',
    mounted() {
      this.getGood();
    },
    methods: {
      async UpdateChecked(e) {
        let isChecked = e.target.checked ? 1 : 0;
        let arr = [];
        this.cartInfoList.forEach(good => {
          let {skuId} = good;
          let ps = this.$store.dispatch('changeChecked', {skuId, isChecked})
          arr.push(ps);
        })
        await Promise.all(arr);
        this.getGood();
      },
      async deleteAll(e) {
        let arr = [];
        this.cartInfoList.forEach(good => {
          if (good.isChecked) {
            let { skuId } = good;
            let ps = this.$store.dispatch('deleteGood', skuId)
            arr.push(ps);
          }
        })
        await Promise.all(arr);
        this.getGood();
      },
      async changeChecked(good) {
        let { skuId } = good;
        let isChecked = good.isChecked == 0 ? 1 : 0;
        try {
          await this.$store.dispatch('changeChecked', { skuId, isChecked });
          this.getGood();
        } catch (e) {
          alert(e.message);
        }
      },
      async deleteGood(good) {
        let { skuId } = good;
        try {
          await this.$store.dispatch('deleteGood', skuId);
          this.getGood();
        } catch (e) {
          alert(e.message);
        }
      },
      MinusNum: throttle(async function(good) {
        if (good.skuNum < 2) return;
        let { skuId } = good;
        let skuNum = -1;
        try {
          await this.$store.dispatch('changeNum', { skuId, skuNum });
          this.getGood();
        } catch (e) {
          alert(e.message);
        }
      }, 1500),
      async AddNum(good) {
        let { skuId } = good;
        let skuNum = 1;
        try {
          await this.$store.dispatch('changeNum', { skuId, skuNum });
          this.getGood();
        } catch (e) {
          alert(e.message);
        }
      },
      UpdateNum: debounce(async function(good, e) {
        let { skuId } = good;
        let inputValue = e.target.value * 1;
        let skuNum;
        if (isNaN(inputValue) || inputValue < 1) {
          skuNum = 0;
        } else {
          skuNum = Math.ceil(inputValue - good.skuNum);
        }
        try {
          await this.$store.dispatch('changeNum', { skuId, skuNum });
          this.getGood();
        } catch (e) {
          alert(e.message);
        }
      }, 1500),
      getGood() {
        this.$store.dispatch('getGood');
      }
    },
    computed: {
      ...mapGetters(['cartInfoList']),
      total() {
        return this.cartInfoList.reduce((pre, cur) => pre + cur.isChecked, 0);
      },
      totalPrice() {
        return this.cartInfoList.reduce((pre, cur) => {
          if(cur.isChecked) {
            pre += cur.skuNum * cur.skuPrice;
          }
          return pre;
        }, 0);
      },
      checkAll() {
        return this.cartInfoList.every(item => item.isChecked) && this.cartInfoList.length > 0;
      }
    },
  }
</script>

<style lang="less" scoped>
  .cart {
    width: 1200px;
    margin: 0 auto;

    h4 {
      margin: 9px 0;
      font-size: 14px;
      line-height: 21px;
    }

    .cart-main {
      .cart-th {
        background: #f5f5f5;
        border: 1px solid #ddd;
        padding: 10px;
        overflow: hidden;

        &>div {
          float: left;
        }

        .cart-th1 {
          width: 25%;

          input {
            vertical-align: middle;
          }

          span {
            vertical-align: middle;
          }
        }

        .cart-th2 {
          width: 25%;
        }

        .cart-th3,
        .cart-th4,
        .cart-th5,
        .cart-th6 {
          width: 12.5%;

        }
      }

      .cart-body {
        margin: 15px 0;
        border: 1px solid #ddd;

        .cart-list {
          padding: 10px;
          border-bottom: 1px solid #ddd;
          overflow: hidden;

          &>li {
            float: left;
          }

          .cart-list-con1 {
            width: 15%;
          }

          .cart-list-con2 {
            width: 35%;

            img {
              width: 82px;
              height: 82px;
              float: left;
            }

            .item-msg {
              float: left;
              width: 150px;
              margin: 0 10px;
              line-height: 18px;
            }
          }


          .cart-list-con4 {
            width: 10%;

          }

          .cart-list-con5 {
            width: 17%;

            .mins {
              border: 1px solid #ddd;
              border-right: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }

            input {
              border: 1px solid #ddd;
              width: 40px;
              height: 33px;
              float: left;
              text-align: center;
              font-size: 14px;
            }

            .plus {
              border: 1px solid #ddd;
              border-left: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }
          }

          .cart-list-con6 {
            width: 10%;

            .sum {
              font-size: 16px;
            }
          }

          .cart-list-con7 {
            width: 13%;

            a {
              color: #666;
            }
          }
        }
      }
    }

    .cart-tool {
      overflow: hidden;
      border: 1px solid #ddd;

      .select-all {
        padding: 10px;
        overflow: hidden;
        float: left;

        span {
          vertical-align: middle;
        }

        input {
          vertical-align: middle;
        }
      }

      .option {
        padding: 10px;
        overflow: hidden;
        float: left;

        a {
          float: left;
          padding: 0 10px;
          color: #666;
        }
      }

      .money-box {
        float: right;

        .chosed {
          line-height: 26px;
          float: left;
          padding: 0 10px;
        }

        .sumprice {
          width: 200px;
          line-height: 22px;
          float: left;
          padding: 0 10px;

          .summoney {
            color: #c81623;
            font-size: 16px;
          }
        }

        .sumbtn {
          float: right;

          a {
            display: block;
            position: relative;
            width: 96px;
            height: 52px;
            line-height: 52px;
            color: #fff;
            text-align: center;
            font-size: 18px;
            font-family: "Microsoft YaHei";
            background: #e1251b;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>