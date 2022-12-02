<template class="is-mobile">
  
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app style="background-color: #F2F9FD;">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6" id="menu">
          </v-list-item-title>
          <v-list-item-subtitle>
            Navigation
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list v-if="this.checkLocal()" dense nav>
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

      <v-list v-else-if="this.checkAdmin() === 'user'"  dense nav>
        <v-list-item v-for="item in items_private" :key="item.title" :to="item.to" link>
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
        <v-list-item v-for="item in items_admin" :key="item.title" :to="item.to" link>
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

    <v-app-bar id="app_bar" app image="cover.jpg"  class="is-flex-direction-column">
      <v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-subtitle class="has-text-white">Menu</v-app-bar-subtitle>
    </v-app-bar>

    <v-main id="main" style="background-color: #EBECF0">
      <router-view />
    </v-main>

    <v-footer app id="footer" padless image="cover.jpg">
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

export default {
  name: "caca",

  data: () => ({
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
        title: 'Accueil >',
        icon: 'mdi-home',
        to: '/'
      },
      {
        title: 'Inscription >',
        icon: 'mdi-account-edit',
        to: '/signup'
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
        to: '/projets',
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

    items_admin: [
      {
        title: 'Afficher Membres >',
        icon: 'mdi-ghost-outline',
        to: '/admin/Dashboard/index',
      },

      {
        title: 'Rechercher Membres >',
        icon: 'mdi-alien-outline',
        to: '/stack',
      },
    ]
  }),

  updated(){
    this.drawer = null;
  },

  methods: {

    checkLocal() {
      return localStorage.user === undefined;

    },

    checkAdmin() {
      if(!this.checkLocal()){
        let token = localStorage.getItem('user');
        let decoded = VueJwtDecode(token);
        return this.checkId(decoded.userId);
      } 
    },

    checkId(token) {
      if (token === 1) {
        return "admin";
      }
      return "user";
    },

    deleteToken() {
      try {
        localStorage.removeItem('user');
      }

      catch {
        console.log('error');
      }

    },
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto:wght@300&display=swap');

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



#footer {
  background-image: url("../cover.jpg");
  padding: 1vw;
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

  
  #app-bar{
    height: 8vw;
  }
}


</style>

