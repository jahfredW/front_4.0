<template>
    <v_container>
        <LoginForm />
    </v_container>  
</template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import LoginForm from '../components/loginForm.vue';
  
  export default defineComponent({
    name: 'loginView',
  
    components: {
      LoginForm,
    },
  });
  </script>
  