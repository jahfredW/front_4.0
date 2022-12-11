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
  import router from '@/router';
  
  // Components
  import Thanks from '../../components/Thanks.vue';
  import Loading from '../../components/Loading.vue'
  
  export default defineComponent({
    name: 'thanks',
  
    components: {
      Thanks,
      Loading
    },

    methods: {
    redirection() {
      console.log("redirect ok")
      setTimeout( () => {
        router.push({ name : "UserIndex"})
      }, 1000)
    }
    },

   mounted() {
    this.redirection();
}
  });
  </script>
  