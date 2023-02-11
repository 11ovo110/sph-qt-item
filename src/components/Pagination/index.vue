<template>
  <div class="pagination">
    <h1>start: {{StartEnd.start}} -- end: {{StartEnd.end}}</h1>
    <button>上一页</button>
    <button v-show="StartEnd.start>1">1</button>
    <button v-show="StartEnd.start>2">···</button>
    <button :class="{active: current==page}" v-for="(page, index) in StartEnd.end" :key="index" v-if="page >= StartEnd.start">{{page}}</button>

    <button v-show="StartEnd.end<totalPage-1">···</button>
    <button v-show="StartEnd.end<totalPage">{{totalPage}}</button>
    <button>下一页</button>

    <select class="select">
      <option>3/页</option>
      <option>5/页</option>
      <option>7/页</option>
      <option>9/页</option>
    </select>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["total", "limit", "current", "pageCount"],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.limit);
    },
    StartEnd() {
      let { pageCount, totalPage, current } = this;
      let start = 0,
        end = 0;
      if (pageCount > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        start = current - Math.floor(pageCount / 2);
        end = current + Math.floor(pageCount / 2);
        if(start < 1) {
          console.log(11);
          start = 1;
          end = pageCount;
        } 
        if(end > totalPage) {
          console.log(222);
          end = totalPage;
          start = totalPage - pageCount + 1;
        }
      }
      return {start, end};
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
  .select {
    width: 100px;
    height: 26px;
    text-align: center;
    margin-left: 20px;
    border: 1px solid #ccc;
  }
}
</style>
