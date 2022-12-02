<template>
    <v-container class="mt-5">
      <v-alert
        text
        dense
        color="teal"
        icon="mdi-clock-fast"
        border="left"
      >
        Merci ! Vous serez redirigés vers l'accueil d'ici un cours instant !
      </v-alert>
    </v-container>
  </template>

<script>

import router from "../router/index"


export default {
  
  methods: {
    redirection() {
      setTimeout( () => {
        router.push('/')
      }, 3000)
    }
    },

   mounted() {
    this.redirection();
}

}

</script>