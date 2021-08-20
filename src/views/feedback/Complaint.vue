<template>
  <div class="complaint">
    <Title>
      <template #title>
        <span>用户投诉管理</span>
      </template>
    </Title>
    <div class="content">
      <div class="search_condition w">
        <Select class="select" text="请选择反馈状态" :itemArray="selectArray" @select="selectValue"></Select>
        <Date class="select"></Date>
        <Button type="primary" class="button"><span class="iconfont icon-loudou"></span>筛选</Button>
        <Search></Search>
      </div>
      <div class="table w">
        <Table :head="columns1" :body="data1" :width1="992"></Table>
      </div>
      <div class="page w">
        <Page></Page>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../../components/Title.vue'
import Select from '../../components/Select.vue'
import Date from '../../components/Date.vue'
import Search from '../../components/Search.vue'
import Table from '../../components/Table.vue'
import Page from '../../components/Page.vue'

export default {
  components: {
    Title,
    Select,
    Date,
    Search,
    Table,
    Page
  },
  data () {
    return {
      selectArray: [
        {
          value: '0',
          label: '未反馈'
        },
        {
          value: '1',
          label: '已反馈'
        }
      ],
      status: '',
      // 反馈表头
      columns1: [
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
          width: 200,
          align: 'center'
        },
        {
          title: '投诉内容',
          key: 'content',
          width: 150,
          align: 'center',
          tooltip: true
        },
        {
          title: '状态',
          key: 'status',
          width: 120,
          align: 'center'
        },
        {
          title: '投诉时间',
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
      // 反馈表数据
      data1: [
        {
          num: 1,
          name: 'xiaocong',
          tel: '12345687910',
          content: '点击查看->',
          status: '已反馈',
          time: '2021/08/19',
          action: '删除'
        },
        {
          num: 1,
          name: 'xiaocong',
          tel: '12345687910',
          content: '点击查看->',
          status: '已反馈',
          time: '2021/08/19',
          action: '删除'
        },
        {
          num: 1,
          name: 'xiaocong',
          tel: '12345687910',
          content: '点击查看->',
          status: '已反馈',
          time: '2021/08/19',
          action: '删除'
        },
        {
          num: 1,
          name: 'xiaocong',
          tel: '12345687910',
          content: '点击查看->',
          status: '已反馈',
          time: '2021/08/19',
          action: '删除'
        },
        {
          num: 1,
          name: 'xiaocong',
          tel: '12345687910',
          content: '点击查看->',
          status: '已反馈',
          time: '2021/08/19',
          action: '删除'
        },
        {
          num: 1,
          name: 'xiaocong',
          tel: '12345687910',
          content: '点击查看->',
          status: '已反馈',
          time: '2021/08/19',
          action: '删除'
        },
        {
          num: 1,
          name: 'xiaocong',
          tel: '12345687910',
          content: '点击查看->',
          status: '已反馈',
          time: '2021/08/19',
          action: '删除'
        },
        {
          num: 1,
          name: 'xiaocong',
          tel: '12345687910',
          content: '点击查看->',
          status: '已反馈',
          time: '2021/08/19',
          action: '删除'
        },
        {
          num: 1,
          name: 'xiaocong',
          tel: '12345687910',
          content: '点击查看->',
          status: '已反馈',
          time: '2021/08/19',
          action: '删除'
        },
        {
          num: 1,
          name: 'xiaocong',
          tel: '12345687910',
          content: '点击查看->',
          status: '已反馈',
          time: '2021/08/19',
          action: '删除'
        }
      ]
    }
  },
  methods: {
    selectValue (e) {
      // 拿到下拉选项的选中值
      this.status = e
      // 发送ajax请求
    }
  }
}
</script>

<style scoped lang='less'>
.complaint {
  .content {
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
}
</style>
