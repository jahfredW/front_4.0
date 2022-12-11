<template  >
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
    import Thanks from '../../components/ThanksUser.vue';
    import Loading from '../../components/Loading.vue';
    
    export default defineComponent({
      name: 'userCreated',
    
      components: {
        Thanks,
        Loading,
      },

      mounted(){
    console.log('ici');
    this.redirection();
      },

      methods: {
        redirection() {
        console.log('la');
        setTimeout( () => {
          router.push({ name : "UserIndex"})
      }, 2000)}
    },

   
      
    });
    </script>

