<template>
    <Table :border="isBorder" :stripe="isStripe" :columns="head" :data="body" :disabled-hover="disabledHover" class="table" :width='width1'>
      <template slot-scope="{ index }" slot="action">
        <span class="edit"  @click="show(index)">{{ editText }}</span>
        <span class="del" @click="remove(index)">{{ delText }}</span>
      </template>
      <template slot-scope="{ row }" slot="status_c">
        {{row.status === 0 ? '未反馈' : '已反馈'}}
      </template>
      <template slot-scope="{ row }" slot="status_o">
        {{row.status === 0 ? '未完成' : '已完成'}}
      </template>
    </Table>
</template>
<script>
export default {
  props: {
    // 设置中左边的文字
    editText: {
      type: String
    },
    // 设置中右边的文字
    delText: {
      type: String
    },
    isStripe: {
      type: Boolean,
      default: false
    },
    isBorder: {
      type: Boolean,
      default: false
    },
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
  },
  methods: {
    show (index) {
      console.log(index)
    },
    remove (index) {
      this.body.splice(index, 1)
    }
  }
}
</script>

<style scoped lang='less'>
.ivu-table-border {
  border: none!important;;
}
.edit {
  color: #0033CC;
  margin-right: 13px;
  cursor: pointer;
}
.del {
  color: #FF0066;
  cursor: pointer;
}
</style>
