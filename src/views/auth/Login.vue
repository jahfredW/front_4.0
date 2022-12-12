<template>
  <v-container class="w-75 mt-15">
    <v-row class="mb-10">
      <v-col cols="12"  xs="12" sm="12" md="8" lg="8"  class="my-auto text-center">
        <h2 class="text-h3">Connection ! </h2>
      </v-col>
      <v-col cols="12"  xs="12" sm="12" md="4" lg="4">
        <v-img height=250 src="reine.png">
        </v-img>
      </v-col>
    </v-row>
    <v-form 
      @submit.prevent="validate"
            id="form"
            v-model="valid"
            ref="form" 
            lazy-validation>
            
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
                    <v-col cols="12" class="text-center mt-5">
                        <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @keyup.enter="validate"
                        @click.prevent="validate"
                        >Validate
                        </v-btn>
                    </v-col>
    </v-form>
  </v-container>
      
</template>

<script>

// le fait de mettre in index = pas besoin de préciser, il 
// ira directement dans idnex.js 

import { accountService } from '@/_services'
import  { isAdmin } from '@/_helpers/auth_guard.js'



export default {
    name : 'loginVue',

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
      v => v.length <= 24 || 'Name must be less than 10 characters',
    ],
  }),

  methods: {

       validate() {
        this.$refs.form.validate()
        this.submit()
       },

      submit() {
        if (this.$refs.form.validate()){
            let formData = new FormData();
            console.log(this.checkLocal());          
            formData = {
            email : this.email,
            password : this.password, 
            }
          accountService.login(formData)
          .then( response => {
            console.log(response);
            let token = response.data.access_token;
            accountService.saveToken(token);
            if(isAdmin()){
              this.$router.push('/admin/dashbord');
            } else {
              this.$router.push('/user/projets')
            }
            
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