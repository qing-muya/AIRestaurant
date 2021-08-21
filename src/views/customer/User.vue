<template>
  <div class="user">
    <Title>
      <template #title>
        <span>用户信息</span>
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
        selectText: '请选择性别',
        selectArr: [
          {
            value: 0,
            label: '男'
          },
          {
            value: 1,
            label: '女'
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
            title: '用户名',
            key: 'name',
            width: 150,
            align: 'center'
          },
          {
            title: '用户电话',
            key: 'tel',
            width: 160,
            align: 'center'
          },
          {
            title: '性别',
            key: 'sex',
            width: 80,
            align: 'center',
            tooltip: true
          },
          {
            title: '密码',
            key: 'passwd',
            width: 150,
            align: 'center'
          },
          {
            title: '注册时间',
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
            name: 'xiaocong',
            tel: '12345687910',
            sex: '女',
            passwd: 'casc12132',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            name: 'xiaocong',
            tel: '12345687910',
            sex: '女',
            passwd: 'casc12132',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            name: 'xiaocong',
            tel: '12345687910',
            sex: '女',
            passwd: 'casc12132',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            name: 'xiaocong',
            tel: '12345687910',
            sex: '女',
            passwd: 'casc12132',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            name: 'xiaocong',
            tel: '12345687910',
            sex: '女',
            passwd: 'casc12132',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            name: 'xiaocong',
            tel: '12345687910',
            sex: '女',
            passwd: 'casc12132',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            name: 'xiaocong',
            tel: '12345687910',
            sex: '女',
            passwd: 'casc12132',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            name: 'xiaocong',
            tel: '12345687910',
            sex: '女',
            passwd: 'casc12132',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            name: 'xiaocong',
            tel: '12345687910',
            sex: '女',
            passwd: 'casc12132',
            time: '2019-06-15 22:48:47',
            action: '删除'
          },
          {
            num: 1,
            name: 'xiaocong',
            tel: '12345687910',
            sex: '女',
            passwd: 'casc12132',
            time: '2019-06-15 22:48:47',
            action: '删除'
          }
        ],
        tableWidth: '966',
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
