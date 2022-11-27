<template>
    <v-container class="container">
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
  
  <style>
  
  .container{
    box-sizing: border-box;
    width: 70vw;
    margin: 6vw auto;
    color: white;
    opacity: 1;
  }
  
  </style>
    