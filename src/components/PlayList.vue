<template>
    <div id="playlist">
      <ul class="new-music-list">
        <li v-on:click="readyPlay(value)" v-for="(value,key) in newlist">
          <div class="number">{{key+1}}</div>
          <h4>{{value.name}}</h4>
          <p><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-SQ"></use>
          </svg><span>{{value.author}}</span></p>
          <i class="playbtn"><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-play-copy"></use>
          </svg></i>
        </li>
      </ul>
    </div>
</template>

<script>

    export default {
      props:['newlist'],
      methods:{
        readyPlay:function(value){
          this.$store.commit('playSong',value)
          this.$router.push({path:'/playsong'})
        }
      }
    }
</script>

<style lang="scss">
  .new-music-list>li{
    position:relative;
    padding:0.4rem 0.4rem 0.4rem 1.2rem;
    border-bottom:1px solid #ccc;
    >h4{
       font-weight:400;
       font-size:1rem;
        margin-left:1.2rem;

     }
     .number{
       position: absolute;
       left:0.2rem;
       top:50%;
       transform:translate(0,-50%);
       font-size:1.6rem
     }
    >p{
       margin-top:0.4rem;
       display:flex;
       align-items:center;
      margin-left:1.2rem;
      color:#888;
    >svg{
       width:1rem;
       fill:#d33a31;
       height:1rem;
       margin-right:1rem;
     }
      >span{
         font-size:1rem;
       }
      }
      >.playbtn{
         position:absolute;
         top:50%;
         transform: translate(0,-50%);
         right:1rem;
      >svg{
         width:1.6rem;
         fill:#ccc;
       }
      }

  }
</style>
