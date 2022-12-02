<template >
  <v-container class="w-75 mt-15">
    <v-form @submit.prevent="validate" id="form" v-model="valid" ref="form" lazy-validation>
      <v-banner class="mb-5">
        Formulaire d'inscription :
      </v-banner>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="nom" :rules="basicRules" :counter="20" label="Nom" required>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="prenom" :rules="basicRules" :counter="20" label="Prenom" required>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="pseudo" :rules="pseudoRules" :counter="10" label="Pseudo" required>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="email" :rules="nomRules" :counter="20" label="Email" required>
          </v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field v-model="password" :rules="passwordRules" :counter="10" label="Password" required>
          </v-text-field>
        </v-col>
      </v-row>
      <v-col clos="12">
        <v-btn :disabled="!valid" color="success" class="mr-4" @keyup.enter="validate"
          @click.prevent="validate">Validate
        </v-btn>
      </v-col>
    </v-form>
  </v-container>
</template>


<script>


import { accountService } from '../../_services/account.service';

export default {
  name : 'signupVue',

  data: () => ({
  valid: true,
  nom : "",
  prenom : "",
  pseudo : "",
  password: '',
  email: '',
  basicRules : [
    v => !!v || "Ce champs ne peut aps être vide!",
    v => !/[-!$%^&*()_+|~=`\\#{}\[\]:";'<>?,.\/]/.test(v) || "les caractères spéciaux sont interdits"
  ],
  pseudoRules : [
    v => !!v || 'Password is required',
    v => !/[-!$%^&*()_+|~=`\\#{}\[\]:";'<>?,.\/]/.test(v) || "les caractères spéciaux sont interdits",
    v => v.length <= 10 || 'Name must be less than 10 characters',
  ],
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
          name: this.nom,
          surname: this.prenom,
          pseudo: this.pseudo,
          email : this.email,
          password : this.password, 
        }
        accountService.signup(formData)
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

