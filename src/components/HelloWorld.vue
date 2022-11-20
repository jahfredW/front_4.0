<template>
  <v-container id="main">
    <v-row class="text-center mt-16">
      <!-- <v-col cols="12">
        <v-img id="photo"
          :src="logo"
          class="my-3"
          contain
          style="height: 8vw; "
        />
      </v-col> -->

      <v-col class="my-4">
        <h1 class="display-2 font-weight-bold my-3 is-size-2 ">
          Bienvenue sur fredgruwedev.com 
        </h1>



        <p class="subheading font-weight-regular my-5">
          Developpeur Web full Stack,
          <br>
          A votre écoute pour la réalisation de vos projets
          web et web mobile.

        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-6">
          Qui suis-je?
        </h2>

        <v-row justify="center mb-5">
          <a v-for="(next, i) in whatsNext" :key="i" :href="next.href" class="subheading mx-3" target="_blank">
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-6">
          Important Links
        </h2>

        <v-row justify="center">
          <div v-for="(link, i) in importantLinks" :key="i"  link class="subheading mx-3"
            target="_blank">
            <div>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from '../assets/photo_id.png'

export default {
  name: 'HelloWorld',
  
  // data : renvoie un litterale d'objet // 
  data: () => ({
    
    importantLinks: [
      {
        icon: 'mdi-facebook',
        text: 'Facebook',
        href: 'https://community.vuetifyjs.com',
      },
      {
        icon: 'mdi-twitter',
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
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
    logo,
    whatsNext: [
      {
        text: 'Mon parcours',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Questions fréquentes',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
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
