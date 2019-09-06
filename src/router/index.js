import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './../pages/Home.vue'
import Aritice from './../pages/Aritice.vue'
import types from './../pages/types.vue'
import Classification from './../pages/Classification'
import Journal from './../pages/journal'

export default new Router({
  routes: [
    {
      path:'/home',
      name:'首页',
      component:Home
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/aritice/:id',
      name:'详情',
      component:Aritice,
      meta:{
        UNkeepAlive:true
      }
    },
    {
      path:'/types',
      name:'分类',
      component:types
    },
    {
      path:'/journal',
      name:'日志',
      component:Journal
    },
    {
      path:'/Classification/:tagId',
      name:'Classification',
      component:Classification,
      meta:{
        UNkeepAlive:true
      }
    },
  ]
})
