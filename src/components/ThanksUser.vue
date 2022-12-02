<template>
    <v-container class="mt-5">
      <v-alert
        text
        dense
        color="teal"
        icon="mdi-clock-fast"
        border="left"
      >
        Utilisateur modifié avec succés !
      </v-alert>
    </v-container>
</template>

<script>

import router from "../router/index"


export default {
  
  methods: {
    redirection() {
      setTimeout( () => {
        router.push({ name : "UserIndex"})
      }, 2000)
    }
    },

   mounted() {
    this.redirection();
}

}

</script>