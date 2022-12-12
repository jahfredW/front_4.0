<template>
    <v-container class="container">
        <v-row >
            <v-col cols="12" class="has-text-centered">
                <h1 class="text-h4">Technologies utilisées pour la création de vos projets :</h1>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row v-for="item in this.logoprop"  style="max-width: 100vw">
                <Techno
                  :logoTitle = item>
                </Techno>
        </v-row>
    </v-container>
</template>
    
<script>
    import { defineComponent } from 'vue';
    // Components
    import Techno from '../../components/technos.vue';
    import Loading from '../../components/Loading.vue'
    
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
    margin-bottom: 5vh;
    margin-top: 5vh;
 }

</style>