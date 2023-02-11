<template>
  <div class="pagination">
    <button>上一页</button>
    <button>1</button>
    <button>···</button>

    <button>3</button>
    <button>4</button>
    <button class="active">5</button>
    <button>6</button>
    <button>7</button>

    <button>···</button>
    <button>9</button>
    <button>下一页</button>

    <select class="select">
      <option>3/页</option>
      <option>5/页</option>
      <option>7/页</option>
      <option>9/页</option>
    </select>

    <button style="margin-left: 30px">共 60 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
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
