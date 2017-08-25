import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PlaySong from '../components/PlaySong'
import Main from '../components/Main'
import Recommend from '../components/Recommend'
import Hot from '../components/Hot'
import Find from '../components/Find'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Main,
      children:[
        {path:'recommend',component:Recommend},
        {path:'hot',component:Hot},
        {path:'find',component:Find}
      ]
    },
    {
     path:'/PlaySong',
     component:PlaySong
    }
  ]
})
