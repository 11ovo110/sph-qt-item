<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-show="SearchParams.categoryName" @click="remove">{{SearchParams.categoryName}}<i>×</i></li>
            <li class="with-x" v-show="SearchParams.keyword" @click="removeKeyword">{{SearchParams.keyword}}<i>×</i></li>
            <li class="with-x" v-show="SearchParams.trademark" @click="removeBrand">{{SearchParams.trademark.split(':')[1]}}<i>×</i></li>
            <li class="with-x" v-for="(type, index) in SearchParams.props" :key="index" @click="removeProps(index)">{{type.split(':')[1]}}<i>×</i></li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector @getBrand="getBrand" @getPhoneType="getPhoneType"/>

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li :class="{active: isOne}" @click="changeOrder(1)">
                  <a>综合<span class="iconfont" v-show="isOne" :class="{'icon-jiantou_xiangxia': !isAsc, 'icon-jiantou_xiangshang': isAsc}"></span></a>
                </li>
                <li :class="{active: isTwo}" @click="changeOrder(2)">
                  <a>价格<span class="iconfont" v-show="isTwo" :class="{'icon-jiantou_xiangxia': !isAsc, 'icon-jiantou_xiangshang': isAsc}"></span></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="good in dataList.goodsList" :key="good.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <a><img :src="good.defaultImg" style="width:215px;height:215px"/></a>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{good.price}}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a :title="good.title">{{good.title}}</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>{{good.id**3}}</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="fr page">
            <Pagination 
            :total="total"
            :current="SearchParams.pageNo"
            :limit="SearchParams.pageSize"
            :pageCount="5"
            @getCurrent="getCurrent"
            @getLimit="getLimit"
            ></Pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
  import SearchSelector from './SearchSelector/SearchSelector'
  export default {
    name: 'Search',
    data() {
      return {
        SearchParams: {
        "category1Id": "", //一级分类的ID
        "category2Id": "",//二级分类的ID
        "category3Id": "",//三级分类的ID
        "categoryName": "",//一级分类的名字
        "keyword": "",//关键字
        "props": [],//平台属性需要携带搜索的条件
        "trademark": "",//品牌需要携带搜索条件
        "order": "1:desc",//排序需要携带的搜索条件   1:综合 2:价格  asc:升序  desc:降序    默认初始值:1:desc
        "pageNo": 1,//分页器当前页码
        "pageSize": 3,//一页展示几条数据
}
      }
    },
    methods: {
      getCurrent(current) {
        this.SearchParams.pageNo = current;
        this.getGoods();
      },
      getLimit(limit) {
        this.SearchParams.pageNo = 1;
        this.SearchParams.pageSize = limit;
        this.getGoods();
      },
      // 封装发请求携带参数
      getGoods() {
        let {categoryName, category1Id, category2Id, category3Id} = this.$route.query;
        this.SearchParams.categoryName = categoryName;
        this.SearchParams.category1Id = category1Id;
        this.SearchParams.category2Id = category2Id;
        this.SearchParams.category3Id = category3Id;
        this.SearchParams.keyword = this.$route.params.keyword;
        this.$store.dispatch('getDateList', this.SearchParams);
      },
      // 获得品牌名称
      getBrand({tmId, tmName}) {
        console.log(tmId);
        this.SearchParams.trademark = `${tmId}:${tmName}`;
        this.getGoods();
      },
      // 获得手机型号
      getPhoneType({attrId, attrName}, attrValue) {
        let str = `${attrId}:${attrValue}:${attrName}`;
        if(!this.SearchParams.props.includes(str)) {
          this.SearchParams.props.push(str);
          this.getGoods();
        }
      },
      // query参数取消面包屑回调
      remove() {
        this.SearchParams.categoryName = '';
        this.$router.push({
          name: 'search',
          params: this.$route.params
        })
      },
      // params参数取消面包屑回调
      removeKeyword() {
        this.SearchParams.keyword = '';
        this.$bus.$emit('keyword', '');
        this.$router.push({
          name: 'search',
          query: this.$route.query
        })
      },
      // 取消品牌面包屑回调
      removeBrand() {
        this.SearchParams.trademark = '';
        this.getGoods();
      },
      // 取消平台属性的面包屑的回调
      removeProps(index) {
        this.SearchParams.props.splice(index, 1);
        this.getGoods();
      },
      changeOrder(active) {
        let OriginActive = this.SearchParams.order.split(':')[0];
        let OriginSort = this.SearchParams.order.split(':')[1];
        let str = '';
        if(OriginActive == active) {
          str = `${active}:${OriginSort == 'desc' ? 'asc' : 'desc'}`
        } else {
          str = `${active}:desc`;
        }
        this.SearchParams.order = str;
        this.getGoods();
      }
    },
    mounted() {
      this.getGoods();
    },
    watch: {
      $route() {
      this.getGoods();
      }
    },
    computed: {
      ...mapState({
        dataList: state => state.search.dataList,
        total: state => state.search.dataList.total
      }),
      isOne() {
        return this.SearchParams.order.includes(1)
      },
      isTwo() {
        return this.SearchParams.order.includes(2)
      },
      isAsc() {
        return this.SearchParams.order.includes('asc')
      }
    },
    components: {
      SearchSelector
    }
  }
</script>

<style lang="less" scoped>
  .main {
    margin: 10px 0;

    .py-container {
      width: 1200px;
      margin: 0 auto;

      .bread {
        margin-bottom: 5px;
        overflow: hidden;

        .sui-breadcrumb {
          padding: 3px 15px;
          margin: 0;
          font-weight: 400;
          border-radius: 3px;
          float: left;

          li {
            display: inline-block;
            line-height: 18px;

            a {
              color: #666;
              text-decoration: none;

              &:hover {
                color: #4cb9fc;
              }
            }
          }
        }

        .sui-tag {
          margin-top: -5px;
          list-style: none;
          font-size: 0;
          line-height: 0;
          padding: 5px 0 0;
          margin-bottom: 18px;
          float: left;

          .with-x {
            font-size: 12px;
            margin: 0 5px 5px 0;
            display: inline-block;
            overflow: hidden;
            color: #000;
            background: #f7f7f7;
            padding: 0 7px;
            height: 20px;
            line-height: 20px;
            border: 1px solid #dedede;
            white-space: nowrap;
            transition: color 400ms;
            cursor: pointer;

            i {
              margin-left: 10px;
              cursor: pointer;
              font: 400 14px tahoma;
              display: inline-block;
              height: 100%;
              vertical-align: middle;
            }

            &:hover {
              color: #28a3ef;
            }
          }
        }
      }

      .details {
        margin-bottom: 5px;

        .sui-navbar {
          overflow: visible;
          margin-bottom: 0;

          .filter {
            min-height: 40px;
            padding-right: 20px;
            background: #fbfbfb;
            border: 1px solid #e2e2e2;
            padding-left: 0;
            border-radius: 0;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

            .sui-nav {
              position: relative;
              left: 0;
              display: block;
              float: left;
              margin: 0 10px 0 0;

              li {
                float: left;
                line-height: 18px;

                a {
                  display: block;
                  cursor: pointer;
                  padding: 11px 15px;
                  color: #777;
                  text-decoration: none;
                }

                &.active {
                  a {
                    background: #e1251b;
                    color: #fff;
                  }
                }
              }
            }
          }
        }

        .goods-list {
          margin: 20px 0;

          ul {
            display: flex;
            flex-wrap: wrap;

            li {
              height: 100%;
              width: 20%;
              margin-top: 10px;
              line-height: 28px;

              .list-wrap {
                .p-img {
                  padding-left: 15px;
                  width: 215px;
                  height: 255px;

                  a {
                    color: #666;

                    img {
                      max-width: 100%;
                      height: auto;
                      vertical-align: middle;
                    }
                  }
                }

                .price {
                  padding-left: 15px;
                  font-size: 18px;
                  color: #c81623;

                  strong {
                    font-weight: 700;

                    i {
                      margin-left: -5px;
                    }
                  }
                }

                .attr {
                  padding-left: 15px;
                  width: 85%;
                  overflow: hidden;
                  margin-bottom: 8px;
                  min-height: 38px;
                  cursor: pointer;
                  line-height: 1.8;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;

                  a {
                    color: #333;
                    text-decoration: none;
                  }
                }

                .commit {
                  padding-left: 15px;
                  height: 22px;
                  font-size: 13px;
                  color: #a7a7a7;

                  span {
                    font-weight: 700;
                    color: #646fb0;
                  }
                }

                .operate {
                  padding: 12px 15px;

                  .sui-btn {
                    display: inline-block;
                    padding: 2px 14px;
                    box-sizing: border-box;
                    margin-bottom: 0;
                    font-size: 12px;
                    line-height: 18px;
                    text-align: center;
                    vertical-align: middle;
                    cursor: pointer;
                    border-radius: 0;
                    background-color: transparent;
                    margin-right: 15px;
                  }

                  .btn-bordered {
                    min-width: 85px;
                    background-color: transparent;
                    border: 1px solid #8c8c8c;
                    color: #8c8c8c;

                    &:hover {
                      border: 1px solid #666;
                      color: #fff !important;
                      background-color: #666;
                      text-decoration: none;
                    }
                  }

                  .btn-danger {
                    border: 1px solid #e1251b;
                    color: #e1251b;

                    &:hover {
                      border: 1px solid #e1251b;
                      background-color: #e1251b;
                      color: white !important;
                      text-decoration: none;
                    }
                  }
                }
              }
            }
          }
        }

        .page {
          width: 733px;
          height: 66px;
          overflow: hidden;
          float: right;

          .sui-pagination {
            margin: 18px 0;

            ul {
              margin-left: 0;
              margin-bottom: 0;
              vertical-align: middle;
              width: 490px;
              float: left;

              li {
                line-height: 18px;
                display: inline-block;

                a {
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  border: 1px solid #e0e9ee;
                  margin-left: -1px;
                  font-size: 14px;
                  padding: 9px 18px;
                  color: #333;
                }

                &.active {
                  a {
                    background-color: #fff;
                    color: #e1251b;
                    border-color: #fff;
                    cursor: default;
                  }
                }

                &.prev {
                  a {
                    background-color: #fafafa;
                  }
                }

                &.disabled {
                  a {
                    color: #999;
                    cursor: default;
                  }
                }

                &.dotted {
                  span {
                    margin-left: -1px;
                    position: relative;
                    float: left;
                    line-height: 18px;
                    text-decoration: none;
                    background-color: #fff;
                    font-size: 14px;
                    border: 0;
                    padding: 9px 18px;
                    color: #333;
                  }
                }

                &.next {
                  a {
                    background-color: #fafafa;
                  }
                }
              }
            }

            div {
              color: #333;
              font-size: 14px;
              float: right;
              width: 241px;
            }
          }
        }
      }
    }
  }
</style>