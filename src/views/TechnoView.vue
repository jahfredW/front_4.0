<template>
    <v-container>
        <v-row class="has-text-white">
            <v-col cols="12" class="has-text-centered">
                <h1 class="is-size-3">Technologies utilisées pour la création de vos projets</h1>
            </v-col>
        </v-row>
        <v-row class="is-justify-content-space-between" style="max-width: 100vw">
            <v-col cols="4" 
    v-for="item in this.logoprop"
   >
      <Techno
        :logoTitle = item>
      </Techno>
     
    </v-col>
  </v-row>
    </v-container>
</template>
    
<script>
    import { defineComponent } from 'vue';
    // Components
    import Techno from '../components/technos.vue';
    import Loading from '../components/Loading.vue'
    
    export default defineComponent({
      name: 'techno',
    
      components: {
        Techno
      },

      data : () => ({
        logoprop: ['vueJs', 'nodeJs', 'django', 'fastapi', 'symfony', 'bulma', 'bootstrap',
    'figma', 'mysql']
      })
    });
</script>

<style>
 h1 {
    margin-bottom: 12vh;
    margin-top: 5vh;
 }

</style>