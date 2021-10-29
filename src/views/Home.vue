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

    <ul id="news_card">
      <li v-for="n in news" :key="n.title" >
        <!--  -->
        <template>
        <v-card
          class="mx-auto"
          max-width="400"
        >

      <!-- 본문 -->
          <v-card-text class="text--primary">
            <div>{{n.title}}</div>

            <div>{{n.contents}}</div>
          </v-card-text>
      <!-- 액션 -->
          <v-card-actions>
            <v-btn
              color="orange"
              text
              
              link
              :to="n.link"
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
export default {
  name:'news_card',
  data() {
    return {
      news: [
        {title: 'title test', contents: 'contents test',link:''},

      ]
    }
}
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@600&display=swap');

body{
  
  place-items: center;
  
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
</style>