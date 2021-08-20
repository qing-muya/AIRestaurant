<style scoped lang='less'>
@import '../assets/css/iconfont.css';
.layout{
  position: relative;
  overflow: hidden;
  background: #f5f7f9;
  .header {
    height: 54px;
    line-height: 54px;
    padding: 0 20px;
    background-color: #464c5b;
    .menu {
      height: 54px;
      background-color: #464c5b;
      .layout-logo{
        /* width: 100px; */
        height: 30px;
        /* background: #5b6270; */
        color: #fff;
        font-size: 20px;
        font-family: '微软雅黑';
        border-radius: 3px;
        float: left;
        /* position: relative;
        top: 15px;
        left: 20px; */
      }
      .layout-nav{
        float: right;
        width: 250px;
        height: 54px;
        background-color: #464c5b;
        .ivu-menu-item {
          color: #cccccc;
          font-size: 16px;
        }
        .ivu-menu-item:hover {
          color: #fff;
        }
      }
    }
  }
  .siderbar {
    width: 230px!important;
    .submenu {
      font-size: 18px;
      color: #999999;
      background-color: #f4f4f4;
      // .ivu-menu-submenu-title {
      //   padding: 16px 24px!important;
      // }
      .iconfont {
        margin-right: 5px;
      }
      .menuitem {
        font-size: 16px;
        padding-left: 52px!important;
        background-color: #fcfcfc;
        border-right: 1px solid #dcdee2;
      }
      .ivu-menu-item-active {
        background-color: #fcfcfc!important;
      }
    }
  }
}

</style>
<template>
  <div class="layout">
    <Layout>
      <Header class="header">
                <Menu mode="horizontal" theme="dark" active-name="1" class="menu">
                    <div class="layout-logo">智慧自助餐饮系统</div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <span class="iconfont icon-yonghu2"></span>
                            账户设置
                        </MenuItem>
                        <MenuItem name="2">
                            <span class="iconfont icon-guanji"></span>
                            退出登录
                        </MenuItem>
                    </div>
                </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff',
        width: '230px',minWidth: '230px', maxWidth: '230px', flex: '0 0 230px'}" class="siderbar">
          <Menu width="230px">
            <Submenu name="1" class="submenu">
              <template slot="title">
                <span class="iconfont icon-home1"></span>
                首页
              </template>
            </Submenu>
            <Submenu name="2" class="submenu">
              <template slot="title">
                <span class="iconfont icon-thin-_newspaper_"></span>
                反馈管理
              </template>
              <MenuItem name="2-1" class="menuitem" to="/index/assess">用户评分管理</MenuItem>
              <MenuItem name="2-2" class="menuitem" to="/index/complaint">用户投诉管理</MenuItem>
            </Submenu>
            <Submenu name="3" class="submenu">
              <template slot="title">
                <span class="iconfont icon-yonghu1"></span>
                用户管理
              </template>
              <MenuItem name="3-1" class="menuitem" to="/index/user">用户信息</MenuItem>
              <MenuItem name="3-2" class="menuitem" to="/index/order">订单信息</MenuItem>
            </Submenu>
            <Submenu name="4" class="submenu">
              <template slot="title">
                <span class="iconfont icon-tongji"></span>
                数据统计
              </template>
              <MenuItem name="4-1" class="menuitem" to="/index/income">收支统计</MenuItem>
              <MenuItem name="4-2" class="menuitem" to="/index/like">菜品喜爱统计</MenuItem>
              <MenuItem name="4-3" class="menuitem" to="/index/caloric">菜品热量统计</MenuItem>
            </Submenu>
            <Submenu name="5" class="submenu">
              <template slot="title">
                <span class="iconfont icon-tianping"></span>
                菜品管理
              </template>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{backgroundColor: '#f9f9f9'}">
            <Content>
                <!-- <router-view></router-view> -->
                <template>
                  <Scroll :on-reach-bottom="handleReachBottom" :height="vh">
                      <router-view></router-view>
                  </Scroll>
              </template>
            </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      vh: null
    }
  },
  mounted () {
    this.vh = document.documentElement.clientHeight - 54
  }
}
</script>
