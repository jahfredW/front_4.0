<template>
  <v-container id="main">
    <v-row class="text-center mt-10">
      <!-- <v-col cols="12">
        <v-img id="photo"
          :src="logo"
          class="my-3"
          contain
          style="height: 8vw; "
        />
      </v-col> -->

      <v-col class="my-4">
        <h1 class="display-2 font-weight-bold mt-3 mb-17 is-size-2 ">
          Bienvenue sur fredgruwedev.com 
        </h1>



        <p class="subheading font-weight-regular mt-10 mb-10">
          Developpeur Web full Stack,
          <br>
          A votre écoute pour la réalisation de vos projets
          web et web mobile,
        </p>
        <p>Pour que vos idées prennent vie.</p>
      </v-col>

      <!-- <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-6">
          Qui suis-je?
        </h2>

        <v-row justify="center mb-5">
          <a v-for="(next, i) in whatsNext" :key="i" :href="next.href" class="subheading mx-3" target="_blank">
            {{ next.text }}
          </a>
        </v-row>
      </v-col> -->
      
    
    </v-row>
  </v-container>
</template>

<script>
import logo from '../assets/logo.png'


export default {
  name: 'HelloWorld',
  
  // data : renvoie un litterale d'objet // 
  data: () => ({
    logo,
    
    
    logo,
    whatsNext: [
      {
        text: 'Mon parcours',
        href: '/presentation',
      },
      
    ],
  }),
}
</script>

<style>

#main{
  color: white;
  text-shadow: 1px pink;
 
}
@media screen and (max-width: 450px){
  

  #photo {
    width: 100px;
    font-size: 5px;
    margin-top: 5px;
  }

}

</style>
