<template>
    <Table border stripe :columns="head" :data="body" :disabled-hover="disabledHover" class="table" :width='width1'></Table>
</template>
<script>
export default {
  props: {
    head: {
      type: Array,
      default: null
    },
    body: {
      type: Array,
      default: null
    },
    width1: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      disabledHover: true
    }
  }
}
</script>

<style scoped lang='less'>
.ivu-table-border {
  border: none!important;;
}
</style>
