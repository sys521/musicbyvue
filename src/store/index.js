/**
 * Created by Administrator on 2017/8/23 0023.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {
    seachResult: function (state, playload) {
      console.log('搜索完成--改变状态')
      console.log(playload)
      state.seachResult = playload
    },
    playSong: function (state, playload) {
      console.log('推送歌曲为当前播放')
      state.currentMusic = playload
    },
    lastResult: function (state, playload) {
      console.log('推送最新音乐')
      state.newMusic = playload
    },
    pushHot:function(state,playload){
      console.log('推送最热音乐列表')
      state.hotlist =playload;
    }
  },
  actions: {
    seachSong: function (context, playload) {
      console.log('开始搜索---异步')
      return new Promise(function(resolve,rejec){
        axios.get('./static/song.json').then(function(res){
          var result=res.data.slice(0,5)
          context.commit('seachResult',result)
          resolve()
        }).catch(function(error){
          console.log(error)
          reject()
        })
      })


    },
    getLast: function (context) {
      return new Promise(function(resolve,reject){
        axios.get('./static/song.json').then(function(res){
          console.log('axios获取最新音乐列表')
          context.commit('lastResult',res.data)
          resolve()
        }).catch(function(error){
          console.log(error)
          reject()
        })
      })
    },
    gethot:function(context){
      return new Promise(function(resolve,reject){
        axios.get('./static/song.json').then(function(res){
          console.log('axios获取最热音乐列表')
          context.commit('pushHot',res.data.slice(5,10))
          resolve()
        }).catch(function(error){
          console.log(error)
          reject()
        })
      })
    }
  }
})
