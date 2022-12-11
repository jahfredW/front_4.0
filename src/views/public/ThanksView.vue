<template>
  <div style=" margin-top: 10vh;" >
  <v-container>
    <Thanks></Thanks>
  </v-container>
   <v-container>
    <Loading></Loading>
   </v-container>
   </div>
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
      console.log("c'est bien ici")
      setTimeout( () => {
        router.push('user/account')
      }, 1000)
    }
    },

   mounted() {
    this.redirection();
}
  });
  </script>
  