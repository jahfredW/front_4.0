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

import LoginForm from '@/components/loginForm.vue'
import axios from "axios";
 
axios.defaults.headers.common["Authorization"] =
  "Bearer, " + localStorage.getItem("user");

export default {
    name : 'loginVue',
    components : {
    LoginForm
  },
  data: () => ({
    valid: true,
    password: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
  }),


  methods: {

       validate() {
        this.$refs.form.validate()
        this.submit()
       },

      submit() {
        if (this.$refs.form.validate()){
            var formData = new FormData();
            console.log(this.checkLocal());          
            formData = {
            email : this.email,
            password : this.password, 
          }
          axios
          .post('http://127.0.0.1:3000/api/auth/login', formData)
          .then( response => {
            console.log(response);
            console.log('ici');
            let token = response.data.token;

            localStorage.setItem('user', token);
            location.reload();
            
     
          })
          .catch(error => {
            alert("Vous devez vous inscrire d'abord !");
            console.log(error);
          
          })
        }

      },

      checkLocal(){
        return localStorage.user === undefined;
           
      },
      

      disconnect(){
        localStorage.clear();
        location.reload();
      },

      findClient() {
        
            var formData = new FormData();
            console.log(this.checkLocal());    
            formData = {
                email : this.email
            }
            
          axios
          .post('http://127.0.0.1:3000/api/auth/find', formData)
          .then( response => {
            let data = response.data['data'];
            for ( var prop in data) {
                console.log(data[prop])
            }
     
          })
          .catch(error => {
            alert("Vous devez vous reconnecter d'abord !");
            console.log(error);
            localStorage.clear();
            location.reload();
          
          })
        }

      },



    
    
    

}
</script>