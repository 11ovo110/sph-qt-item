<template>
 <!-- 商品分类导航 -->
 <div class="type-nav">
  <div class="container">
     <div @mouseleave="leaveNav">
        <h2 class="all" @mouseenter="enterNav">全部商品分类</h2>
        <transition name="sort">
            <div class="sort" v-show="flag">
                <div class="all-sort-list2" @click="goSearch">
                    <div class="item" v-for="(t1, index) in typeArr" :key="t1.categoryId">
                        <h3 :class="{'active': current==index}" @mouseenter="current=index">
                            <a :data-categoryName="t1.categoryName" :data-category1Id="t1.categoryId">{{t1.categoryName}}</a>
                        </h3>
                        <div class="item-list clearfix">
                            <div class="subitem">
                                <dl class="fore" v-for="t2 in t1.categoryChild" :key="t2.categoryId">
                                    <dt>
                                      <a :data-categoryName="t2.categoryName" :data-category2Id="t2.categoryId">{{t2.categoryName}}</a>
                                    </dt>
                                    <dd>
                                        <em v-for="t3 in t2.categoryChild" :key="t3.categoryId">
                                          <a :data-categoryName="t3.categoryName" :data-category3Id="t3.categoryId">{{t3.categoryName}}</a>
                                        </em>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
     </div>
      <nav class="nav">
          <a href="###">服装城</a>
          <a href="###">美妆馆</a>
          <a href="###">尚品汇超市</a>
          <a href="###">全球购</a>
          <a href="###">闪购</a>
          <a href="###">团购</a>
          <a href="###">有趣</a>
          <a href="###">秒杀</a>
      </nav>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TypeNav',
  data() {
    return {
        current: -1,
        flag: true
    }
  },
  mounted() {
    if(this.$route.path != '/home') 
    this.flag = false;
  },
  methods: {
    enterNav() {
        if(this.$route.path != '/home')
        this.flag = true;
    },
    leaveNav() {
        this.current = -1;
        if(this.$route.path != '/home')
        this.flag = false;
    },
    goSearch(e) {
        let {categoryname, category1id, category2id, category3id} = e.target.dataset;
        if(categoryname) {
            let obj = {
                name: 'search',
                params: this.$route.params,
                query: {}
            }
            if(category1id) {
                obj.query.category1Id = category1id;
            }else if(category2id) {
                obj.query.category2Id = category2id;
            }else {
                obj.query.category3Id = category3id;
            }
            obj.query.categoryName = categoryname;
            this.$router.push(obj);
        }
    }
  },
  computed: {
    ...mapState({
        typeArr: state => state.home.typeArr
    })
  },
}
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      position: relative;

      .all {
          width: 210px;
          height: 45px;
          background-color: #e1251b;
          line-height: 45px;
          text-align: center;
          color: #fff;
          font-size: 14px;
          font-weight: bold;
      }

      .nav {
          a {
              height: 45px;
              margin: 0 22px;
              line-height: 45px;
              font-size: 16px;
              color: #333;
          }
      }

      .sort {
          position: absolute;
          left: 0;
          top: 45px;
          width: 210px;
          height: 461px;
          position: absolute;
          background: #fafafa;
          z-index: 999;

          .all-sort-list2 {
              .item {
                  h3 {
                      line-height: 30px;
                      font-size: 14px;
                      font-weight: 400;
                      overflow: hidden;
                      padding: 0 20px;
                      margin: 0;

                      a {
                          color: #333;
                      }
                  }

                  .item-list {
                      display: none;
                      position: absolute;
                      width: 734px;
                      min-height: 460px;
                      background: #f7f7f7;
                      left: 210px;
                      border: 1px solid #ddd;
                      top: 0;
                      z-index: 9999 !important;

                      .subitem {
                          float: left;
                          width: 650px;
                          padding: 0 4px 0 8px;

                          dl {
                              border-top: 1px solid #eee;
                              padding: 6px 0;
                              overflow: hidden;
                              zoom: 1;

                              &.fore {
                                  border-top: 0;
                              }

                              dt {
                                  float: left;
                                  width: 54px;
                                  line-height: 22px;
                                  text-align: right;
                                  padding: 3px 6px 0 0;
                                  font-weight: 700;
                              }

                              dd {
                                  float: left;
                                  width: 415px;
                                  padding: 3px 0 0;
                                  overflow: hidden;

                                  em {
                                      float: left;
                                      height: 14px;
                                      line-height: 14px;
                                      padding: 0 8px;
                                      margin-top: 5px;
                                      border-left: 1px solid #ccc;
                                  }
                              }
                          }
                      }
                  }

                  &:hover {
                      .item-list {
                          display: block;
                      }
                  }
              }
          }
          .active {
            background-color: skyblue;
          }
      }
      .sort-enter {
        height: 0;
      }
      .sort-enter-active {
        transition: all .3s;
      }
      .sort-enter-to {
        height: 461px;
      }
  }
}
</style>