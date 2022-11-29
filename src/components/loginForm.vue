<template>
  <v-form 
  id="form"
  v-model="valid"
   ref="form" 
   lazy-validation>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            :counter="10"
            label="Email"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :counter="10"
            label="Password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
      >
          Validate
      </v-btn>
      <v-btn v-if="!this.checkLocal() "
      color="success"
      class="mr-4"
      @click="disconnect"
      >
          Se déconnecter
      </v-btn>

      <v-btn v-if="!this.checkLocal() "
      color="success"
      class="mr-4"
      @click="findClient"
      >
          BDD
      </v-btn>

      <div v-if="!this.checkLocal() "
      :disabled="!valid"
      color="success"
      class="mr-4"
      >
          Connecté
  </div>

  
    </v-container>
  </v-form>
</template>

<script>

export default {
  name : 'LoginForm',
  data() {
    return {
    }
  },

  props : {
    valid : Boolean,
    password : String,
    email : String, 
    emailRules : String,
    passwordRules : String,
  },

methods: {
  checkLocal(){
        return localStorage.user === undefined;
           
      }
}
}

</script>