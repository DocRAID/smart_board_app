<template>

  <v-app>
    <v-app-bar app color="primary" dark >
    <v-app-bar-nav-icon 
    @click="drawer = !drawer" v-if=" $vuetify.breakpoint.name != 'xs' && $vuetify.breakpoint.name != 'sm' && $vuetify.breakpoint.name != 'md' "/>
    
    </v-app-bar>
    <div id="nav">
      
    </div>
    <!-- 옆에 뜨는거 -->
    <v-navigation-drawer app v-if="drawer==true">
      <v-list-item>


        <v-list-item-content>
          <v-list-item-title class="text-h6">
            전칠웹
          </v-list-item-title>
          <v-list-item-subtitle>
            ver.1.0.1
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <!-- 라우터뷰 -->
      <router-view/>
      <!-- 푸터에 가려져서 그냥 이렇게 해놓음 -->
      <div class="space"/>
      
    </v-main>

  <v-footer padless app>
       
    <v-col
      class="text-center"
      cols="12"
    >
      <!-- 모바일용 선택 -->
    <v-menu transition="slide-y-reverse-transition" v-if=" $vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm' || $vuetify.breakpoint.name == 'md' ">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          class="ma-2"
          v-bind="attrs"
          v-on="on"
        >
          Menu
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="mobileItems in mobileItems"
          :key="mobileItems.title"
          link
          :to="mobileItems .to"

        >
          <v-list-item-title>{{mobileItems.title}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

       <strong>GBSW</strong> - {{ new Date().getFullYear() }} 
      <!-- <v-tabs
          v-model="model"
          centered
          slider-color="primary"
        >
          <v-tab
            v-for="i in 3"
            :key="i"
            :href="`#tab-${i}`"
          >
            Item {{ i }}
          </v-tab>
        </v-tabs> -->
    </v-col>
  </v-footer>

  </v-app>
</template>
<script>
export default {
  
    data () {
      return {
        drawer: true,
        items: [
          { title: null},
          { title: null},
          { title: null},
          { title: null},
          { title: null}, 
          // 자스 몰라서 그냥 이렇게 함 
          { title: 'News', icon: 'mdi-view-dashboard', to:'/' },
          { title: 'Meal', icon: 'mdi-silverware-fork-knife', to:'/meal' },
          { title: 'About', icon: 'mdi-image', to:'/about' },
          { title: 'Teach', icon: 'mdi-human-male-board', to:'/teach' },
          { title: 'Team-Work', icon: 'mdi-application-brackets-outline', to:'/Team-work' },
          // { title: '이름', icon: 'mdi-arrow-left 아이콘', to:'경로'},
        ],
        mobileItems: [
          { title: 'News', to:'/' },
          { title: 'Meal', to:'/meal' },
          { title: 'About', to:'/about' },
          
          
        ],
        right: null,
      }
    },
  }
</script>
<style lang="scss">
.space{
  margin-bottom: 100px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
main.v-main{
  padding: 0px !important;
}
</style>
