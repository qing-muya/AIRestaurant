<template>
  <div>
    <Title>
      <template #title>
        <span>首页</span>
      </template>
    </Title>
    <div class="content">
      <!-- 餐厅信息 -->
      <DetailCard id="restaurant" padding="10px 45px 20px">
        <template #title>
          餐厅详情
        </template>
        <template #content>
          <div class="r_msg">
            <div class="img">
              <img src="../../assets/logo.png">
            </div>
            <div class="msg">
              <div class="name">餐厅名称</div>
              <div class="time">
                <span class="iconfont icon-shizhong"></span>
                10:00-22:30
              </div>
              <div class="add">
                <span class="iconfont icon-ditu-dibiao"></span>
                餐厅地址
              </div>
            </div>
            <div class="detail">餐厅详情</div>
          </div>
        </template>
      </DetailCard>
      <!-- 销售情况 -->
      <DetailCard id="sale" padding="20px 80px">
        <template #title>
          销售情况
        </template>
        <template #content>
          <div class="detail">
            <div class="income">
              <div class="today">
                <div class="text">今日销售额 (元)</div>
                <div class="time">截止5分钟前</div>
              </div>
              <div class="num">1000</div>
            </div>
            <div class="total">
              <div class="today">
                <div class="text">今日订单总数</div>
                <div class="time">截止5分钟前</div>
              </div>
              <div class="num">100</div>
            </div>
          </div>
        </template>
      </DetailCard>
      <!-- 热门搜索 销售额占比 -->
      <div id="hotData">
        <DetailCard id="hot" width="565px">
          <template #title>
            热门搜索
          </template>
          <template #content>
            <div class="stats">
              <div class="total">
                <div class="text">
                  搜索用户数
                </div>
                <div class="pic">
                  <img src="../../assets/热门搜索.png" alt="">
                </div>
              </div>
              <div class="each">
                <div class="text">
                  人均搜索次数
                </div>
                <div class="pic">
                  <img src="../../assets/热门搜索.png" alt="">
                </div>
              </div>
            </div>
            <div class="table">
              <Table :width1="'525px'" :head="tableHead" :body="tableData"></Table>
            </div>
          </template>
        </DetailCard>
        <DetailCard id="classify" width="565px">
          <template #title>
            销售额类别占比
          </template>
          <template #content>
            <div class="stats">
            </div>
            <div class="table"></div>
          </template>
        </DetailCard>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../../components/Title.vue'
import DetailCard from '../../components/DetailCard.vue'
import Table from '../../components/Table.vue'

export default {
  components: {
    Title,
    DetailCard,
    Table
  },
  data () {
    return {
      // 热门搜索的表
      tableHead: [
        {
          title: '编号',
          key: 'index',
          width: 100,
          align: 'center'
        },
        {
          title: '搜索关键词',
          key: 'word',
          width: 150,
          align: 'center'
        },
        {
          title: '用户数',
          key: 'num',
          width: 130,
          align: 'center'
        },
        {
          title: '周涨幅',
          key: 'increase',
          width: 142,
          align: 'center'
        }
      ],
      tableData: [
        {
          index: '1',
          word: '菜品',
          num: '2,234',
          increase: '128%'
        },
        {
          index: '2',
          word: '菜品',
          num: '2,234',
          increase: '128%'
        },
        {
          index: '3',
          word: '菜品',
          num: '2,234',
          increase: '128%'
        },
        {
          index: '4',
          word: '菜品',
          num: '2,234',
          increase: '128%'
        },
        {
          index: '5',
          word: '菜品',
          num: '2,234',
          increase: '128%'
        }
      ]
    }
  }
}
</script>

<style scoped lang='less'>
.content {
  width: 1160px;
  margin: 0 auto;
  padding-top: 10px;
  #sale, #hotData {
    margin-top: 40px;
  }
  #restaurant {
    .r_msg {
      position: relative;
      display: flex;
      align-items: center;
      .img {
        overflow: hidden;
        width: 100px;
        height: 100px;
        margin-right: 20px;
        border-radius: 50px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .msg {
        color: #666;
        font: 16px "Arial Normal";
        .name {
          font-size: 20px;
          margin-bottom: 10px;
        }
        .time {
          margin-bottom: 5px;
        }
        .time, .add {
          span {
            color: #d6d6d9;
            margin-right: 3px;
          }
        }
      }
      .detail {
        position: absolute;
        right: 0;
        width: 96px;
        height: 38px;
        line-height: 38px;
        background-color: #F2F2F2;
        border-radius: 10px;
        text-align: center;
        font-size: 16px;
      }
    }
  }
  #sale {
    margin-top: 20px;
    .detail {
      display: flex;
      justify-content: space-between;
      .income, .total {
        display: flex;
        align-items: center;
        width: 370px;
        height: 185px;
        padding: 0 20px;
        border: 1px solid #ccc;
        border-radius: 3px;
        .today {
          width: 50%;
          color: #666;
          font: 22px "Arial Normal";
          .text {
            margin-bottom: 50px;
          }
          .time {
            padding-left: 10px;
            font-size: 12px;
          }
        }
        .num {
          width: 50%;
          color: #FF0000;
          font-size: 50px;
          text-align: right;
        }
      }
    }
  }
  #hotData {
    display: flex;
    justify-content: space-between;
    #hot {
      .stats {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .total, .each {
          .text {
            margin-bottom: 5px;
            color: #8a8989;
            font: 16px "Microsoft YaHei";
          }
        }
      }
    }
  }
}
</style>
