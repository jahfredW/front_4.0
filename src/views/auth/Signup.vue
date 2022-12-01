<template>
    <v-form 
    @submit.prevent="validate"
          id="form"
          v-model="valid"
          ref="form" 
          lazy-validation>
      <v-container class="text-center">
          <v-banner class="mb-5">
            Entrez votre email et votre mot de passe :
          </v-banner >
          <v-row >
              <v-col
                  cols="12"
              >
                  <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  :counter="10"
                  label="Email"
                  required
                  >
                  </v-text-field>
              </v-col>

              <v-col
              cols="12"
            
              >
                  <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  :counter="10"
                  label="Password"
                  required
                  >
              </v-text-field>
              </v-col>
              </v-row>
                  <v-col clos="12">
                      <v-btn
                      :disabled="!valid"
                      color="success"
                      class="mr-4"
                      @keyup.enter="validate"
                      @click.prevent="validate"
                      >Validate
                      </v-btn>
                  </v-col>
      </v-container>
  </v-form>
</template>

<script>


import axios from "axios";

axios.defaults.headers.common["Authorization"] =
"Bearer, " + localStorage.getItem("user");

export default {
  name : 'signupVue',

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
        .post('http://127.0.0.1:3000/api/auth/signup', formData)
        .then( response => {
          console.log(response);
          console.log('ici');
          let token = response.data.token;
          localStorage.setItem('user', token);
          this.$router.push('/thanks');
          
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
  }
}
</script>