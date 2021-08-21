import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
// import Index from '../views/Index.vue'
import NewIndex from '../views/NewIndex.vue'
import Home from '../views/home/Home.vue'
import Assess from '../views/feedback/Assess.vue'
import Complaint from '../views/feedback/Complaint.vue'
import User from '../views/customer/User.vue'
import Order from '../views/customer/Order.vue'
import Income from '../views/stats/Income.vue'
import Like from '../views/stats/Like.vue'
import Caloric from '../views/stats/Caloric.vue'
import Dish from '../views/dishes/Dish.vue'

Vue.use(VueRouter) // 注册路由，在注册时vue就自动生成了一个全局组件router-view

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'Index',
    // component: Index
    component: NewIndex,
    redirect: '/index/home',
    children: [
      {
        path: 'assess',
        component: Assess
      },
      {
        path: 'complaint',
        component: Complaint
      },
      {
        path: 'user',
        component: User
      },
      {
        path: 'order',
        component: Order
      },
      {
        path: 'income',
        component: Income
      },
      {
        path: 'like',
        component: Like
      },
      {
        path: 'caloric',
        component: Caloric
      },
      {
        path: 'dish',
        component: Dish
      },
      {
        path: '*',
        component: Home
      }
    ]
  }
  // {
  //   path: '*',
  //   redirect: '/login'
  // }
  // {
  //   path: '/feedback',
  //   // component: Assess
  //   children: [
  //     {
  //       path: 'assess',
  //       component: Assess
  //     },
  //     {
  //       path: 'complaint',
  //       component: Complaint
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  routes
})

export default router
