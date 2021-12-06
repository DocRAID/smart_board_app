<template>
  <div>
    <!-- 시간 -->
    <div 
     v-if="$vuetify.breakpoint.name != 'xs' 
     && $vuetify.breakpoint.name != 'sm' 
     && $vuetify.breakpoint.name != 'md'"
     v-on="time=true"
    >
      <div class="clock">
        <div class="display">
        </div>
      </div>
    </div>
    <div v-else>
      <br>
      <br>
    </div>

    <ul id="news_card" style="padding-left: 0px;">
      <li 
          v-for="n in news" :key="n.title" 
          style="margin-bottom: 30px;" 
      >
         <!--  -->
        <template>
        <v-card
          class="mx-auto"
          max-width="400"
          id="cardStyle"
        >

       <!-- 본문 -->
          <v-card-text class="text--primary">
            <h3>{{n.title}}</h3>

            <div>{{n.contents}}</div>
          </v-card-text>
       <!-- 액션 -->
          <v-card-actions>
            <v-btn
              color="blue"
              text
              link
              target="_blank"
              :href="n.link"
              v-if="n.link!='null'"
            >
              더보기
            </v-btn>

          </v-card-actions>
          </v-card>
        </template>
        <!--  -->
      </li>
    </ul>
  </div>
</template>
<script>
 setInterval(function(){
   const clock = document.querySelector(".display");
        // 만약 이걸 안쓰면 리턴으로 돌아감
        if (!clock) return

        let time = new Date();
        let sec = time.getSeconds();
        let min = time.getMinutes();
        let hr = time.getHours();
        let day = 'AM';
        if(hr > 12){
          day = 'PM';
          hr = hr - 12;
        }
        if(hr == 0){
          hr = 12;
        }
        if(sec < 10){
          sec = '0' + sec;
        }
        if(min < 10){
          min = '0' + min;
        }
        if(hr < 10){
          hr = '0' + hr;
        }
        
        clock.textContent =day + " " + hr + ':' + min + ':' + sec ;
      });
      //경로상의 뉴스 정보를 임포트 한다.
      import newsdata from '../assets/news';

export default {
  name:'news_card',
  data() {
    return {
      //임포트한 정보를 리턴하여 표시한다.
      news : newsdata,
    }
}
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@600&display=swap');
ul{
   list-style:none;
   }
body{
  
  place-items: center;
  
}
.news_card{
  padding: 0;
}
.clock{
 
  height: 120px;
  
  line-height: 120px;
  text-align: center;
  padding: 0 30px;
 
}
.clock .display{
  font-size: 60px;
  color: #000;
  letter-spacing: 5px;
  font-family: 'Hind Siliguri', sans-serif;
}
#cardStyle{
  border: 1px solid #000;
}
</style>