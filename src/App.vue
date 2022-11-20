<template class="is-mobile">
  
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6" id="menu">
          </v-list-item-title>
          <v-list-item-subtitle>
            Navigation
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-row class="is-flex-direction-row 
            is-justify-content-space-around
            ">
            <v-col class="has-text-left ml-2">
              <v-list-item-icon>
                <v-icon large color="blue darken-2">
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>
            </v-col>
            <v-col class="has-text-left mt-2 mr-5">
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar id="app_bar" app image="header.jpg"  class="is-flex-direction-column">
      <v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <v-app-bar-title :title="titleSetter()" id="title" class="is-size-3 has-text-centered has-text-white ml-16 mb-15">
      </v-app-bar-title> -->
      <v-app-bar-subtitle class="has-text-white">Menu</v-app-bar-subtitle>

    </v-app-bar>

    <v-main>
      <v-parallax id="para"
    dark
    src="../compo3.png"
  >
      <router-view />
      </v-parallax>
    </v-main>

    <v-footer app id="footer" padless image="cover.jpg">
      <v-row justify="center" no-gutters class="is-mobile">
        <v-col class="primary lighten-2 py-2 text-center has-text-white" cols="12">
          {{ new Date().getFullYear() }} — <strong class="has-text-white">Fg Dev</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
  
</template>



<script>

  export default {
    name: "App",

    data: () => ({ 
      drawer: null,
      
      items: [
        {
          title: 'Accueil >',
          icon : 'mdi-home',
          to:'/'
        },
        {
          title: 'En développement >',
          icon: 'mdi-ghost-outline',
          to:'/projets/perso',
        },

          {
          title: 'Projet Pro >',
          icon: 'mdi-alien-outline',
          to: '/searchInstant',
        },

        {
          title: 'Mon stack >',
          icon: 'mdi-sheep',
          to: '/stack',
        },

        {
          title: 'Contactez-moi ! >',
          icon: 'mdi-phone',
          to: '/contact',
        },

      ],


      
    }),

    methods: {

      titleSetter() {
        window.addEventListener('resize', function() {
          if (window.innerWidth >= 800){
          this.document.querySelector("#title").innerHTML = 'Frédéric Gruwe';
        } else {
          this.document.querySelector("#title").innerHTML = 'Fred G';
        }
        });
      }}}

</script>

<style>

.is-mobile{
  color: white;
}

#para {
  min-height: 100vh;
}



#footer {
  background-image: url("../cover.jpg");
}

@media screen and (max-width: 450px){
 


  #bouton-footer {
    width: 100px;
    font-size: 5px;
    margin-top: 5px;
  }

  
  #app-bar{
    height: 8vw;
  }
}
</style>

