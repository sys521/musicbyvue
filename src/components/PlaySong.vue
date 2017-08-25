<template>
    <div id="playsong" v-bind:style="{backgroundImage:'url('+currentMusic.filter+')'}">
      <div class="pointer">
        <img src="https://s3.music.126.net/m/s/img/needle.png?702cf6d95f29e2e594f53a3caab50e12" v-bind:class="{leave:!isplay}">
      </div>
      <div class="dsic">
        <div class="dsic-ct" >
          <svg class="icon" aria-hidden="true" v-if="isplay" v-on:click="isplay=!isplay">
            <use xlink:href="#icon-play-copy"></use>
          </svg>
          <svg class="icon" aria-hidden="true" v-if="!isplay" v-on:click="isplay=!isplay">
            <use xlink:href="#icon-pause"></use>
          </svg>
          <img  class="dsic-circle" src="https://s3.music.126.net/m/s/img/disc.png?d3bdd1080a72129346aa0b4b4964b75f" v-bind:class="{pasue:!isplay}">
          <img  class="dsic-light" src="https://s3.music.126.net/m/s/img/disc_light.png?2bb24f3fd11569809b817b4988f12bc7" >
          <img class="dsic-photo" :src="currentMusic.cover" v-bind:class="{pasue:!isplay}">
        </div>
      </div>
      <div class="lrc">
        <h4>{{currentMusic.name}}</h4>
        <div class="words">
          <ul>
            <p v-for="value in lrc" v-bind:dataTime="Object.keys(value)">{{Object.values(value).join()}}</p>
          </ul>
        </div>
      </div>
      <footer>
        <a @click="$router.push({path:'/'})">打开</a>
        <a class="main" @click="$router.push({path:'/'})">下载</a>
      </footer>
      <audio  v-bind:src="currentMusic.url"></audio>
    </div>
</template>

<script>
    export default {
      data:function() {
        return {
          isplay: false,
          currentMusic:{},
        }
      },
      created:function(){
        if(this.$store.state.currentMusic){
          this.currentMusic=this.$store.state.currentMusic
        }
      },
      mounted:function(){
        var audio=document.querySelector('audio')
        this.isplay=true;
      },
      methods:{
          setlrc:function(currentTime){              // js 根据 行高 来控制ul 向上偏移。
            var minutes=parseInt(currentTime/60)
            var seconds=currentTime-minutes*60
            var mit=this.addPad(minutes)
            var sed=this.addPad(seconds)
            var newtime=mit+':'+sed


           var  $p=document.querySelectorAll('.words p')
           var  $words=document.querySelector('.words')
           var  $ul=document.querySelector('.words>ul')
            var height=$p[0].offsetHeight

            for(let i=0;i<$p.length;i++){
              if($p[i+1]) {
                if (newtime >= $p[i].attributes.datatime.value && newtime < $p[i + 1].attributes.datatime.value) {
                  var translateY='translateY('+(-height)*(i-1)+'px)'
                  $p[i].style.color='#d43b32'
                  $p[i-1]?$p[i-1].style.color='white':1;
                  $p[i+1].style.color='white';
                  $ul.style.transform=translateY

                }
              }
            }
          },
          addPad:function(time){
            if(time<10){
             return time='0'+time
            }else{
              return time
            }
          }
      },
      watch: {
          isplay:function(){
            var audio=document.querySelector('audio')
            var that=this

            if(this.isplay ){
              audio.play()
              var abc=setInterval(function(){

                if(that.$router.currentRoute.fullPath =='/playsong'){     // 除了 setInterval 找不到别的方法
                  that.setlrc(audio.currentTime)
                }else{
                  clearInterval(abc)
                }
              },1000)
            }else if(!this.isplay){
              audio.pause()
            }
          },
      },
      computed:{
        lrc:function(){
          let lyric=this.currentMusic.lyric
          let arr=lyric.split('\n')
          let newarr=[]
          let regex = /^\[(.+)\](.*)/
          for(let i=0;i<arr.length;i++){
            if(arr[i]){
              let newobj={}
              let time=arr[i].match(regex)[1]
              let words=arr[i].match(regex)[2]
              if(words){
                newobj[time]=words
                newarr.push(newobj)
              }
            }
          }
          return newarr
        },
      }
    }

</script>

<style lang="scss">
  #playsong{
    width:100vw;
    height:100vh;
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center center;
    overflow:hidden;
    .pointer>img{
        width:24vw;
        position:relative;
        left:45%;
        z-index:1;

    }
    .pointer .leave{
      transform-origin: left top;
      transform:rotate(-21deg)
    }
    .dsic{
      margin:0 auto;
      .dsic-ct{
        margin-top:-9vh;
        height:40vh;
        display:flex;
        align-items:center;
        justify-content:center;
        >img {
          width:78vw;
          position:absolute;
         }
         .icon{
           width:12vw;
           fill:white;
           z-index:1;
         }
         .dsic-circle{
           animation:circle 20s infinite linear;
          &.pasue{
             animation-play-state:paused;
           }
         }
         .dsic-photo{
           width:44vw;
           border-radius:50%;
           animation:circle 20s infinite linear;
           &.pasue{
              animation-play-state:paused;
            }
         }
      }
    }
    .lrc{
      text-align:center;
      padding-top:10vh;
      font-size:14px;
      color:white;
      line-height:2;
    }
    .lrc>h4{
      font-size:18px;
      font-weight:400;
    }
    .lrc>.words{
      height:84px;
      overflow:hidden;
      >ul>p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
       }

    }
    footer {
      width:100vw;
      position: absolute;
      background:transparent;
      bottom: 4vh;
      font-size: 16px;
      display:flex;
      justify-content: space-around;
      color:#d43b32;
      >a{
        border:1px solid #d43b32;
        border-radius:8px;
        padding:10px 60px;
       }
       .main{
         background:#d43b32;
         color:white;
       }
    }
    @keyframes circle {
      0%{
        transform:rotate(0deg)
      }
      100%{
        transform:rotate(360deg)
      }
    }
  }

</style>
