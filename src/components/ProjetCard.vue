<template>
    <v-card 
      class="mx-auto has-text-centered"
      max-width="344"
    >
    <v-carousel style="height: 30vw;">
    <v-carousel-item 
      :src=this.cardBuilder(this.projectTitle)[0]
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
    
  </v-carousel>
      <v-card-title>
        {{ this.projectTitle }}
      
      </v-card-title>
  
      <v-card-subtitle>
        {{ this.cardBuilder(this.projectTitle)[1]}}
      </v-card-subtitle>
  
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
  
          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
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


  }),

  props: {
    projectTitle : String
  },
  
  methods: {
    

    cardBuilder(item) {
      console.log(item)
      let description = "";
      let image = "";
        if ( item === 'video_converter') {
          description = "cacapipi";
          image = video_converter
        } else if ( item === 'Bold_Air') {
          description = "bold air app";
          image = bold_air
        } else {
          description = 'parc_finder';
          image = parc_finder
        }
        return [image, description]
      
    }
    }
  }




</script>
