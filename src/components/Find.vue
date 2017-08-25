<template>
    <div id="find">
        <div class="seach-ct">
          <div class="seach">
              <svg class="seach-btn" aria-hidden="true">
                <use xlink:href="#icon-seach"></use>
              </svg>
            <input class="seach-content" placeholder="搜索歌手、专辑、歌曲" v-on:input="getValue($event)" v-bind:value="seachValue" v-on:keydown="seaching" >
              <svg class="seach-cancel" aria-hidden="true" v-bind:class="{cancel:!seachValue}" @click="cancelSeach()">
                <use xlink:href="#icon-cancelcircle"></use>
              </svg>
          </div>
          <div class="result" v-if="seachValue">
            <p>{{showSeach}}</p>
            <ul>
              <li v-for="value in seachResult" @click="playSong(value)"><span>{{value.name}}</span><span>{{value.author}}</span></li>
            </ul>
          </div>
          <div class="hot-seach" v-if="!seachValue">
            <h4>热门搜索</h4>
            <ul>
              <li>告白气球</li>
              <li>Justin Drew Bieber</li>
              <li>see you again</li>
              <li>周杰伦</li>
              <li>陈奕迅</li>
              <li>The show</li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
      data:function(){
        return {
          seachValue:'',
          clock:'',
          seachResult:{},
        }
      },
      computed:{
        showSeach:function() {
          return '搜索：' + this.seachValue
        },
      },
      methods:{
        cancelSeach:function(){
          this.seachValue=''
          this.seachResult={}
        },
        getValue:function(value){
          this.seachValue=value.target.value
        },
        seaching:function(){
          var that=this
          if(this.clock){           //加状态锁，取消掉1秒钟前所有的延时函数，直到最后一次才触发。
            clearTimeout(this.clock)
          }
          this.clock=setTimeout(function(){
            console.log('准备搜索')
            var value=that.seachValue
            that.$store.dispatch('seachSong',value).then(function(){
              that.seachResult=that.$store.state.seachResult
            })
          },1000)
        },
        playSong:function(value){
          if(value){
            console.log(value)
            this.$store.commit('playSong',value)
            this.$router.push({path:'/playsong'})
          }
        }
      }


    }
</script>

<style lang="scss">
  .seach-ct{
    .seach{
      padding:4vh 4vw ;
      display:flex;
      align-items: center;
      border-bottom:1px solid #ccc;

      svg{
        width:10vw;
        height:10vw;
        fill:#fff;
        background:#ebecec;
        padding:2vw;
        &.seach-btn{
          border-radius:50% 0 0 50%;
        }
        &.seach-cancel{
           border-radius:0 50% 50% 0;
         }
        &.cancel{
            fill:#ebecec;
         }
      }

      .seach-content{
        flex:1;
        background:#ebecec;
        outline-style: none;
        display:inline-block;
        height:10vw;
        border:none;
        font-size:1rem;
        line-height:1rem;
      }

    }
    .result{
      font-size:1rem;
      >p{
          padding-top:0.5rem;
          padding-bottom:0.5rem;
          padding-left:1rem;
          border-bottom: 0.2px solid #ccc;
       }
      >ul>li{
          padding-top:0.5rem;
          padding-bottom:0.5rem;
          padding-left:1rem;
          padding-right:1rem;
          border-bottom: 0.2px solid #ccc;
          font-size:0.9rem;
          display:flex;
          justify-content: space-between;
        }
    }
    .hot-seach{
      margin:1vh;
      font-size:1rem;
      >h4{
        margin-bottom:1vh;
        font-weight: 100;
        margin-left:1rem;
       }
      >ul>li{
          display:inline-block;
          margin:0.25rem 1rem;
          padding: 0.4rem;
          border:1px solid #ccc;
          border-radius: 8px;
       }
    }
  }
</style>
