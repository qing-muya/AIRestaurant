<template>
  <div class="assess">
    <Title>
      <template #title>
        <span>用户评分管理</span>
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
        tableHead: [
          {
            title: '编号',
            key: 'num',
            width: 70,
            align: 'center'
          },
          {
            title: '订单编号',
            key: 'orderId',
            width: 180,
            align: 'center'
          },
          {
            title: '菜品编号',
            key: 'menuId',
            width: 160,
            align: 'center'
          },
          {
            title: '评价内容',
            key: 'opnion',
            width: 150,
            align: 'center',
            tooltip: true
          },
          {
            title: '打分',
            key: 'score',
            width: 120,
            align: 'center'
          },
          {
            title: '评价时间',
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
            orderId: '4235147232165228',
            menuId: '1001621891',
            opnion: '点击查看->',
            score: '5.0',
            time: '2019-06-15 22:48:47',
            action: '结束'
          },
          {
            num: 1,
            orderId: '4235147232165228',
            menuId: '1001621891',
            opnion: '点击查看->',
            score: '5.0',
            time: '2019-06-15 22:48:47',
            action: '结束'
          },
          {
            num: 1,
            orderId: '4235147232165228',
            menuId: '1001621891',
            opnion: '点击查看->',
            score: '5.0',
            time: '2019-06-15 22:48:47',
            action: '结束'
          },
          {
            num: 1,
            orderId: '4235147232165228',
            menuId: '1001621891',
            opnion: '点击查看->',
            score: '5.0',
            time: '2019-06-15 22:48:47',
            action: '结束'
          },
          {
            num: 1,
            orderId: '4235147232165228',
            menuId: '1001621891',
            opnion: '点击查看->',
            score: '5.0',
            time: '2019-06-15 22:48:47',
            action: '结束'
          },
          {
            num: 1,
            orderId: '4235147232165228',
            menuId: '1001621891',
            opnion: '点击查看->',
            score: '5.0',
            time: '2019-06-15 22:48:47',
            action: '结束'
          },
          {
            num: 1,
            orderId: '4235147232165228',
            menuId: '1001621891',
            opnion: '点击查看->',
            score: '5.0',
            time: '2019-06-15 22:48:47',
            action: '结束'
          },
          {
            num: 1,
            orderId: '4235147232165228',
            menuId: '1001621891',
            opnion: '点击查看->',
            score: '5.0',
            time: '2019-06-15 22:48:47',
            action: '结束'
          },
          {
            num: 1,
            orderId: '4235147232165228',
            menuId: '1001621891',
            opnion: '点击查看->',
            score: '5.0',
            time: '2019-06-15 22:48:47',
            action: '结束'
          },
          {
            num: 1,
            orderId: '4235147232165228',
            menuId: '1001621891',
            opnion: '点击查看->',
            score: '5.0',
            time: '2019-06-15 22:48:47',
            action: '结束'
          }
        ],
        tableWidth: '982',
        haveSelct: true,
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
