<template>
  <div class="pagination">
    <button :disabled="StartEnd.start==1"  @click="$emit('getCurrent', current - 1)">上一页</button>
    <button v-show="StartEnd.start > 1" @click="$emit('getCurrent', 1)">1</button>
    <button v-show="StartEnd.start > 2">···</button>
    <button v-for="(page, index) in StartEnd.end" v-if="page >= StartEnd.start" :key="index" :class="{'active': page==current}" @click="$emit('getCurrent', page)">{{page}}</button>
    <button v-show="StartEnd.end < totalPage - 1">···</button>
    <button v-show="StartEnd.end < totalPage" @click="$emit('getCurrent', totalPage)">{{totalPage}}</button>
    <button :disabled="StartEnd.end==totalPage" @click="$emit('getCurrent', current + 1)">下一页</button>
    <select v-model="size" @change="$emit('getLimit', size)">
      <option value="3">3/页</option>
      <option value="5">5/页</option>
      <option value="7">7/页</option>
      <option value="9">9/页</option>
    </select>
    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props: ['current', 'limit', 'pageCount', 'total'],
    data() {
      return {
        size: 3
      }
    },
    computed: {
      totalPage() {
        return Math.ceil(this.total / this.limit);
      },
      StartEnd() {
        let start = 0, end = 0;
        let {pageCount, totalPage, current} = this;
        if(pageCount > totalPage) {
          start = 1;
          end = totalPage;
        }else {
          start = current - Math.floor(pageCount / 2);
          end = current + Math.floor(pageCount / 2);
          if(start < 1) {
            start = 1;
            end = pageCount;
          }
          if(end > totalPage) {
            end = totalPage;
            start = totalPage - pageCount + 1;
          }
        }
        return {start, end}
      }
    }
  }
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
  }
</style>
