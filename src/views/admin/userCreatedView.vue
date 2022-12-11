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
    import Thanks from '@/components/ThanksUser.vue';
    import Loading from '@/components/Loading.vue'
    import router from '@/router';
    
    export default defineComponent({
      name: 'thanks',
    
      components: {
        Thanks,
        Loading
      },

      mounted(){
    console.log('ici');
    this.redirection();
      },

      methods: {
        redirection() {
        console.log('redirection!');
        setTimeout( () => {
        router.push({ name : "UserIndex"})
      }, 1000)}
    },
    });
    </script>
    