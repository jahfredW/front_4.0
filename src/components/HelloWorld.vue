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

      <v-col class="my-4" cols="12">
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
      <v-col cols="12" >
        <div  >
          <v-img class="mx-auto mt-16"
            src="kameha.png"
            max-height="150"
            max-width="250" >
        </v-img>
        </div>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from '../assets/fredgruwe.png'


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
