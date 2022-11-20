<template>
    <v-card 
      class="mx-auto has-text-centered mb-10"
      style="  background-color: #ededf4;"
      
    >
    <v-carousel :show-arrows="false" style="height: 45vh;"  >
    <v-carousel-item v-if="this.projectTitle === 'boldair'"
        v-for="(item,i) in boldair"
      :key="i"
      :src= item.src
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
    
  </v-carousel>
      <v-card-title >
        {{ this.projectTitle }}
      
      </v-card-title>
  
      <v-card-actions>
        <v-btn
          color="orange lighten-2"
          text
        >
          En savoir plus
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show"> 
          <v-divider></v-divider>
  
          <v-card-text v-if="this.projectTitle === 'boldair'">
            Application de données sur la pollution, qui permet à l'utilisateur 
            de signaler une incommodation et de la confronter avec les relevés en cours.
            <br>
            Codé en Python, FastApi et VueJS.
            
          </v-card-text>
          <v-card-text v-else-if="this.projectTitle === 'audioConverter'">
            Convertisseur Vidéo -> Audio.
            <br>
            Codé en Python via l'utilisation du Pattern Design Factory.
            <br>
            Interface graphique en Tkinter.
          </v-card-text>
          <v-card-text v-else-if="this.projectTitle === 'parcFinder'">
            Application web qui permet de rechercher et de noter les parcs municipaux pour enfants.
            <br>
            Codé en Full Django
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </template>

<script>

import neo from '../assets/neo.svg'
import parc_finder from '../assets/parc_finder.png'
import logo_scrappy from '../assets/logo_scrappy.png'
import bold_air from '../assets/aqp.png'
import video_converter from '../assets/video_converter.png'
import boldair1 from '../assets/boldair1.png'
import boldair2 from '../assets/boldair3.png'
import boldairCover from '../assets/boldaircover.png'
import boldairCode from '../assets/boldairCode.png'

export default {
  data: () => ({
    show: false,
    neo,
    parc_finder,
    logo_scrappy,
    bold_air,  
    video_converter,
    
    setup : {
      image : "",
      description : "",
    },

    project_name : ['audio', 'boldair'],


    boldair : [
      {
        src: boldairCover
      },
      {
        src: boldair1      
      },
      {
        src: boldair2
      },
      {
        src: boldairCode
      }
    ]

    


  }),

  props: {
    projectTitle : String
  },
  
  methods: {
    
    cardBuilder(item) {
      console.log(item)
      let deck = [];
      switch (item){
        case "boldair":
          deck = this.boldair;
          break;
        default:
          console.log("error");
      }
      return deck
        
    }
    },
  
    mounted() {
      this.cardBuilder(this.projectTitle)
    }
  }




</script>
