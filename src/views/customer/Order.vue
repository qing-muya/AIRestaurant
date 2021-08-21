<template>
  <div class="user">
    <Title>
      <template #title>
        <span>订单信息</span>
      </template>
    </Title>
    <BaseTable :chooseComponent="tableObj"></BaseTable>
  </div>
</template>

<script>
import Title from '../../components/Title.vue'
import BaseTable from '../../components/BaseTablePage.vue'

export default {
  components: {
    Title,
    BaseTable
  },
  data () {
    return {
      // 初始化数据表信息的对象
      tableObj: {
        selectText: '请选择状态',
        selectArr: [
          {
            value: 0,
            label: '未取餐'
          },
          {
            value: 1,
            label: '已取餐'
          }
        ],
        tableHead: [
          {
            type: 'selection',
            width: 54,
            align: 'center'
          },
          {
            title: '编号',
            key: 'num',
            width: 70,
            align: 'center'
          },
          {
            title: '用户信息',
            key: 'u_msg',
            width: 150,
            align: 'center'
          },
          {
            title: '订单总价',
            key: 'total',
            width: 120,
            align: 'center'
          },
          {
            title: '订单状态',
            key: 'status',
            width: 100,
            align: 'center',
            tooltip: true
          },
          {
            title: '菜品信息',
            key: 'd_msg',
            width: 150,
            align: 'center'
          },
          {
            title: '下单时间',
            key: 'time',
            width: 200,
            align: 'center'
          },
          {
            title: '设置',
            key: 'action',
            width: 100,
            align: 'center'
          }
        ],
        tableData: [
          {
            num: 1,
            u_msg: '点击查看->',
            total: '￥100',
            status: '未完成',
            d_msg: '点击查看->',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            u_msg: '点击查看->',
            total: '￥100',
            status: '未完成',
            d_msg: '点击查看->',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            u_msg: '点击查看->',
            total: '￥100',
            status: '未完成',
            d_msg: '点击查看->',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            u_msg: '点击查看->',
            total: '￥100',
            status: '未完成',
            d_msg: '点击查看->',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            u_msg: '点击查看->',
            total: '￥100',
            status: '未完成',
            d_msg: '点击查看->',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            u_msg: '点击查看->',
            total: '￥100',
            status: '未完成',
            d_msg: '点击查看->',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            u_msg: '点击查看->',
            total: '￥100',
            status: '未完成',
            d_msg: '点击查看->',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            u_msg: '点击查看->',
            total: '￥100',
            status: '未完成',
            d_msg: '点击查看->',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            u_msg: '点击查看->',
            total: '￥100',
            status: '未完成',
            d_msg: '点击查看->',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            u_msg: '点击查看->',
            total: '￥100',
            status: '未完成',
            d_msg: '点击查看->',
            time: '2019-06-15 22:48:47',
            action: '删除'
          }
        ],
        tableWidth: '946',
        haveSelect: true,
        haveSearch: true,
        havePage: true,
        haveDate: true
      }
    }
  },
  methods: {

  }
}
</script>
