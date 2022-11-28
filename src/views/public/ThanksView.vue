<template>
  <v-container>
    <Thanks></Thanks>
  </v-container>
   <v-container>
    <Loading></Loading>
   </v-container>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import Thanks from '../../components/Thanks.vue';
  import Loading from '../../components/Loading.vue'
  
  export default defineComponent({
    name: 'thanks',
  
    components: {
      Thanks,
      Loading
    },
  });
  </script>
  