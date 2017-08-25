<template>
    <div id="hot">
        <div class="hot-ct">
          <div class="hot-img"></div>
          <div class="hot-time">更新日期:</div>
        </div>
        <PlayList v-bind:newlist="hotlist"></PlayList>
    </div>
</template>

<script>
    import PlayList from './PlayList.vue'
    export default {
      components:{PlayList},
      data:function(){
        return {
          hotlist:{}
        }
      },
      created:function(){
        var that=this
        this.$store.dispatch('gethot').then(function(){
          that.hotlist=that.$store.state.hotlist
        })
      }
    }
</script>

<style lang="scss">
  .hot-ct{
    background:url(http://s3.music.126.net/m/s/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee) no-repeat;
    background-size:cover;
    height:24vh;
    padding-top:4vh;
    .hot-img{
      background:url(//s3.music.126.net/m/s/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880) no-repeat;
      background-size:44.2vw 25.8vw;
      background-position:-6.4vw -8vw;
      width:37.8vw;
      height:17.8vw;
      margin-bottom:5vw;
      margin-left:4vw;
    }
    .hot-time{
      margin-left:5vw;
      font-size:0.8rem;
      margin-bottom:5vw;
      color:white;
    }

  }

</style>
