<template>
  <v-container class="container has-text-centered">
    <v-row class="custom is-justify-content-space-evenly">
    <v-col class="custom-col"
    v-for="item in this.testprop"
   >
      <ProjetCard
        :projectTitle = item>
      </ProjetCard>
    </v-col>
  </v-row>
  </v-container>
</template>
  
<script>
  import { defineComponent } from 'vue';
  
  // Components
  import ProjetCard from '../../components/ProjetCard.vue';
  import axios from 'axios';
  
  export default defineComponent({
    name: 'ProjetCardView',
  
    components: {

    ProjetCard,
},
   data : () => ({
    testprop: ['Video_Converter', 'boldair', 'parcFinder']
})
  });
</script>

<style>

.custom{
  box-sizing: border-box;
  margin-top: 12vh;
}


.container {
  box-sizing: border-box;
  
}

@media screen and (max-width: 820px){

  .custom{
    margin-top : 20vw;
    display: flex;
    flex-direction: column;
    align-content: space-around;
  }

  .custom-col{
    margin-bottom: 5vw;
  }
}



</style>