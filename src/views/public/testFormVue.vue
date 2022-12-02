<template>
    <v-container class="container w-75 mt-15">
      <ClientTestForm></ClientTestForm>
    </v-container>
  </template>
    
    <script>
    import { defineComponent } from 'vue';
    
    // Components
    import ClientTestForm from '../../components/ClientTestForm.vue';
    
    export default defineComponent({
      name: 'clientTestForm',
    
      components: {
        ClientTestForm,
      },
  
      data: () => ({
        result : {}
      }),
  
     
    });
    </script>
  
  
    