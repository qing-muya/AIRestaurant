<template>
  <div class="title">
    <div class="text">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<style scoped lang='less'>
.title {
  display: flex;
  align-items: center;
  width: 100%;
  height: 54px;
  background-color: #f2f2f2;
  .text {
    margin-left: 100px;
    padding-left: 10px;
    font-size: 18px;
    font-family: '微软雅黑';
    color: #999;
    border-left: 5px solid #1abc9c;
  }
}
</style>
