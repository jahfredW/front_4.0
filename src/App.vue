<template class="is-mobile">
  
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app style="background-color: #F2F9FD;">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6" id="menu">
          </v-list-item-title>
          <v-list-item-subtitle>
            WELCOME !
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list v-if="(this.checkLocal() && this.checkAdmin() === undefined)" dense nav>
        <v-list-item v-for="item in items_public" :key="item.title" :to="item.to" link>
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
            <v-col class=" mt-2 text-right ">
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
        <v-divider></v-divider>
        <div link class="subheading mx-3"
            target="_blank">
            <v-row class="is-flex-direction-row 
            is-justify-content-space-between
            ">
            <div class="pl-4 pt-1">
              <v-list-item-icon>
                <v-icon large color="blue darken-2">
                  mdi-login
              </v-icon>
              </v-list-item-icon>
            </div>
            <div class="pr-3">
              <v-btn to="/login" link>
                Connection
              </v-btn>
            </div>
            </v-row>
        </div>
        <v-divider></v-divider>
      </v-list>

      <v-list v-else-if="(!this.checkLocal() && this.checkAdmin() === 'user')"  dense nav>
        <v-list-item v-for="item in userTabConstruct" :key="item.title" :to="item.to" link>
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
            <v-col class=" mt-2 text-right ">
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
        <v-divider></v-divider>
        <div link class="subheading mx-3"
            target="_blank">
            <v-row class="is-flex-direction-row 
            is-justify-content-space-between
            ">
            <div class="pl-4">
              <v-list-item-icon>
                <v-icon large color="blue darken-2">
                  mdi-logout
              </v-icon>
              </v-list-item-icon>
            </div>
            <div class="pr-3">
              <a @click="this.deleteToken()" href="/">
                Déconnection
              </a>
            </div>
            </v-row>
        </div>
        <v-divider></v-divider>
      </v-list>
      

      <v-list v-else  dense nav>
        <v-list-item v-for="item in adminTabConstruct" :key="item.title" :to="item.to"  link>
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
            <v-col class=" mt-2 text-right ">
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
        <v-divider></v-divider>
        <div link class="subheading mx-3"
            target="_blank">
            <v-row class="is-flex-direction-row 
            is-justify-content-space-between
            ">
            <div class="pl-4">
              <v-list-item-icon>
                <v-icon large color="blue darken-2">
                  mdi-logout
              </v-icon>
              </v-list-item-icon>
            </div>
            <div class="pr-3">
              <a @click="this.deleteToken()" href="/">
                Déconnection
              </a>
            </div>
            </v-row>
        </div>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer> 
    <!-- gestion de l'affichage des fléches  -->
    <v-app-bar @mouseenter="activeIcon = !activeIcon" @mouseleave="activeIcon = !activeIcon" id="app_bar"  class="is-flex-direction-column">
      <v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-nav-icon  color="white" @click="back" style="position :absolute; left:34vw;"  >
          <v-icon v-if="activeIcon || sizing()" small >mdi-arrow-left-bold-outline</v-icon>
        </v-app-bar-nav-icon>
        <v-app-bar-nav-icon  color="white" @click="after" style="position :absolute; left:60vw;"  >
          <v-icon v-if="activeIcon || sizing()" small >mdi-arrow-right-bold-outline</v-icon>
        </v-app-bar-nav-icon>
      <!-- <v-app-bar-subtitle class="has-text-white">Menu</v-app-bar-subtitle> -->
    </v-app-bar>

    <v-main id="main" style="background-color: #EBECF0">
      
      <router-view :key="$route.fullPath"></router-view>
    </v-main>

    <v-footer app id="footer" padless >
      <v-row justify="center">
          <div id="links" v-for="(link, i) in importantLinks" :key="i"  link class="subheading mx-3"
            target="_blank">
            <div class="pr-1">
              <v-icon style="color : #65F9FE;">
                {{ link.icon }}
              </v-icon>
            </div>
            <div>
              <a :href="link.href">
                {{ link.text }}
              </a>
            </div>
          </div>
        </v-row>
     
    </v-footer>
  </v-app>
  
</template>



<script>
import VueJwtDecode from 'jwt-decode';
import  { simpleDecode }  from '@/_helpers/auth_guard.js';
import router from '@/router';

export default {
  name: "mainApp",

  data: () => ({
    activeIcon : false,
    drawer: null,
    importantLinks: [
      {
        icon: 'mdi-facebook',
        text: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=100088179605430',
      },
      {
        icon: 'mdi-linkedin',
        text: 'Linked-in',
        href: 'https://www.linkedin.com/in/fredericgruwe/',
      },
      {
        icon: 'mdi-github',
        text: 'Github',
        href: 'https://github.com/jahfredW',
      },
    ],

    items_public: [
    {
        title: 'Inscription >',
        icon: 'mdi-account-edit',
        to: '/signup'
      },
      {
        title: 'Accueil >',
        icon: 'mdi-home',
        to: '/'
      },
      
      {
        title: 'Qui suis-je? >',
        icon: 'mdi-alien-outline',
        to: '/presentation',
      },
      {
        title: 'Mon stack >',
        icon: 'mdi-alien-outline',
        to: '/stack',
      },

      {
        title: 'Contactez-moi ! >',
        icon: 'mdi-phone',
        to: '/contact',
      },
    ],

    items_private: [
      {
        title: 'En développement >',
        icon: 'mdi-ghost-outline',
        to: '/user/projets',
      },
      {
        title: 'Gérer Mon compte >',
        icon: 'mdi-ghost-outline',
        to: '/user/account',
      },

      
    ],

    items_admin: [
      {
        title: 'Gérer Membres >',
        icon: 'mdi-ghost-outline',
        to: '/admin/Dashboard/index',
      },

      {
        title: 'Ajouter un Membre >',
        icon: 'mdi-alien-outline',
        to: '/admin/Dashboard/add',
      },
    ],
    userTab : [],
    adminTab : []

  }),

  updated(){
    this.drawer = null;
    console.log("check : " + !this.checkLocal());
  },

  mounted(){
    this.drawer = null;
    console.log("check : " + !this.checkLocal())
    console.log("admin : " + this.checkAdmin())
    console.log(simpleDecode());
  },

  computed : {
    userTabConstruct(){ 
        this.userTab = [].concat(this.items_public, this.items_private);
        this.userTab = this.userTab.splice(1, this.userTab.length -1);
        return this.userTab;
    },

    adminTabConstruct(){
      this.adminTab = [].concat(this.items_public, this.items_private, this.items_admin);
      return this.adminTab.splice(1, this.adminTab.length -1);
    }
  },


  methods: {

    sizing(){
      let size = true;
      if(window.innerWidth > 820){
        size = !size
      } 
      return size;
    },

    back(){
      router.go(-1);
    },

    after(){
      router.go(+1);
    },

    adminTab(){
        let adminTab = [].concat(this.items_public, this.items_private, this.items_admin);
        return adminTab;
    },

    userTab(){ 
        let userTab = [].concat(this.items_public, this.items_private);
        return userTab;
    },
    // vérifie si le token existe
    checkLocal() {
      return localStorage.token === undefined;

    },

    checkAdmin() {
      // vérifie si c'est l'admin qui est connecté
      if(!this.checkLocal()){
        let token = localStorage.getItem('token');
        let decoded = VueJwtDecode(token);
        return this.checkId(decoded.isAdmin);
      } 
    },

    checkId(token) {
      // défini l'utilisateur connecté ( admin ou user lambda)
      if (token === true) {
        return "admin";
      }
      return "user";
    },

    deleteToken() {
      // efface le token du localStorage
      try {
        localStorage.removeItem('token');
      }

      catch {
        console.log('error');
      }

    },
  }
}

</script>

<style>


@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
  url(./fonts/Roboto-Light.ttf) format("truetype");
}

@font-face{
  font-family: "Poppins";
  src: local("Poppins"),
  url(./fonts/poppins/Poppins-Light.ttf) format("truetype");
}




#main{
  font-family: 'Poppins', sans-serif;
}

#links{
  display: flex;
  padding-top: 0.5vw;
  padding-bottom: 0.5vw;
}

.is-mobile{
  color: white;
}

#para {
  min-height: 100vh;
}

#app_bar{
  background-image: url("/header.jpg");
}



#footer {
  padding: 1vw;
  background-image: url("/header.jpg");
}

@media screen and (max-width: 450px){
 
  #footer {
  padding: 3vw;
}

  #bouton-footer {
    width: 100px;
    font-size: 5px;
    margin-top: 5px;
  }

  
  #app_bar{
    position: relative;
  }

  #i{
    position: absolute;
    color: white;
    right : 1vw;
  }
}


</style>

