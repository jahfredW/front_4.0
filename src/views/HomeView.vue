<template>
  <v-row>
    <v-col cols="12">
      <HelloWorld />
    </v-col>
  </v-row>
  <div>
    
  </div>
  
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
  },
});
</script>
