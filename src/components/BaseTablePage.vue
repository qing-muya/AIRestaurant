<template>
  <div class="container">
    <div class="search_condition w">
      <Select class="select" v-show="chooseComponent.haveSelect" :text="chooseComponent.selectText" :itemArray="chooseComponent.selectArr" @select="handleSelectValue"></Select>
      <Date class="select" v-show="chooseComponent.haveDate"></Date>
      <Button type="primary" class="button" v-show="chooseComponent.haveDate || chooseComponent.haveSelect"><span class="iconfont icon-loudou"></span>筛选</Button>
      <Search v-show="chooseComponent.haveSearch"></Search>
    </div>
    <div class="table w">
      <Table :head="chooseComponent.tableHead" :body="chooseComponent.tableData" :width1="chooseComponent.tableWidth"></Table>
    </div>
    <div class="page w">
      <Page></Page>
    </div>
  </div>
</template>

<script>
import Select from './Select.vue'
import Date from './Date.vue'
import Search from './Search.vue'
import Table from './Table.vue'
import Page from './Page.vue'
export default {
  props: {
    chooseComponent: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {
        // 是否有下拉选项框
        haveSelect: true,
        // 下拉选项框默认提示文字,
        selectText: '',
        // 下拉选项框选项值数组
        selectArr: [],
        // 是否有日期选择器
        haveDate: true,
        // 是否有搜索框
        haveSearch: true,
        // 表格头部
        tableHead: {},
        // 表格数据
        tableData: {},
        // 表格宽度
        tableWidth: 0,
        // 是否有分页器
        havePage: true
      }
    }
  },
  components: {
    Select,
    Date,
    Search,
    Table,
    Page
  },
  data () {
    return {
      // 下拉选项框选择后对应的返回值
      selectValue: ''
    }
  },
  methods: {
    handleSelectValue (e) {
      // 拿到下拉选项的选中值
      this.status = e
      // 发送ajax请求
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  position: relative;
  width: 1200px;
  margin: 10px auto ;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #e4e4e4;
  .w {
    width: 1000px;
    margin: 0 auto;
  }
  .search_condition {
    position: relative;
    top: 30px;
    display: flex;
    margin-bottom: 40px;
    .select {
      margin-right: 20px;
    }
    .button {
      margin-right: 120px;
      .icon-loudou {
      font-size: 14px;
    }
    }
  }
  .table {
    position: relative;
    top: 10px;
    margin-bottom: 20px;
  }
  .page {
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: 10px;
    // top: 10px;
  }
}
</style>
