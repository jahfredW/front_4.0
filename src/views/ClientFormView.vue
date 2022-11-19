<template>
  <v-container class="container">
    <ClientForm></ClientForm>
  </v-container>
</template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import ClientForm from '../components/ClientForm.vue';
  
  export default defineComponent({
    name: 'ClientFormView',
  
    components: {
      ClientForm,
    },

    data: () => ({
      result : {}
    }),

   
  });
  </script>

<style>

.container{
  box-sizing: border-box;
  width: 70vw;
  margin: 6vw auto;
}

</style>
  