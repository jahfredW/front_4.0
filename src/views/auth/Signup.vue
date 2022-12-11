<template >
  <v-container class="container mt-15">
    <v-form @submit="submit" id="form" v-model="valid" ref="form" lazy-validation>
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
          <v-text-field v-model="email" :rules="emailRules" :counter="20" label="Email" required>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
        <v-text-field class="w-100 text-left field"  :type="this.type1" v-model="password" :rules="passwordRules"
          :counter="10" label="Password" required>
            <v-icon class="icon" @click.prevent="toggleShow1">
              mdi-eye-check
            </v-icon>
        </v-text-field>
        <!-- <v-text-field class="w-100 text-left field" v-else type="password" v-model="password" :rules="passwordRules"
          :counter="10" label="Password" required>
            <v-icon class="icon" @click.prevent="toggleShow">
              mdi-eye-check
            </v-icon>
        </v-text-field> -->
      </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field class="w-100 text-left field" :type="this.type2" v-model="verification" :rules="verifRules" :counter="10" label="Confirmez" required>
              <v-icon class="icon" @click.prevent="toggleShow2">
                mdi-eye-check
              </v-icon>
          </v-text-field>
          <!-- <v-text-field class="w-100 text-left field" v-else type="password" v-model="verification" :rules="verifRules" :counter="10" label="Confirmez" required>
              <v-icon class="icon" @click.prevent="toggleShowVerif">
                mdi-eye-check
              </v-icon>
          </v-text-field> -->
        </v-col>
      </v-row>
      <v-col cols="12">
        <v-btn :disabled="!valid" color="success" class="mr-4" @keyup.enter="submit" @click.prevent="submit">Validate
        </v-btn>
      </v-col>
    </v-form>
  </v-container>
</template>


<script>


import { accountService } from '../../_services/account.service';

export default {
  name: 'signupVue',

  data() {
    return {
      valid: true,
      type1 : "password",
      type2 : "password",
      nom: "",
      prenom: "",
      pseudo: "",
      password: '',
      email: '',
      verification: '',
      showPassword: false,
      verifPassword: false,
      passwordListe : [],
      basicRules: [
        v => !!v || "Ce champs ne peut aps être vide!",
        v => !/[-!$%^&*()_+|~=`\\#{}\[\]:";'<>?,.\/]/.test(v) || "les caractères spéciaux sont interdits"
      ],
      pseudoRules: [
        v => !!v || 'Password is required',
        v => !/[-!$%^&*()_+|~=`\\#{}\[\]:";'<>?,.\/]/.test(v) || "les caractères spéciaux sont interdits",
        v => (v && v.length) <= 10 || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length) <= 10 || 'Name must be less than 10 characters',
      ],
      verifRules: [
        v => !!v || 'PAssword is required',
        v => v == this.password || ' Le mot de passe de correspond pas !',
        v => v && this.passwordListe.includes(v)
      ]
    }
  },


  methods: {


    submit() {

      if (this.$refs.form.validate()) {
        var formData = new FormData();
        formData = {
          name: this.nom,
          surname: this.prenom,
          pseudo: this.pseudo,
          email: this.email,
          password: this.password,
        }


        accountService.signup(formData)
          .then(response => {
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

    toggleShow1() {
      if(this.type1 == "password"){
        this.type1 = "text";
      } else {
        this.type1 = "password";
      }
    },

    toggleShow2(){
      if(this.type2 == "password"){
        this.type2 = "text";
      } else {
        this.type2 = "password";
      }
    },
      

    checkLocal() {
      return localStorage.user === undefined;

    },

    getVerification() {
      return this.verification;
    },
  },
}

  // computed: {
  //   buttonLabel() {
  //     return (this.showPassword) ? "Hide" : "Show";
  //   }
  // }

</script>


<style>
.w {
  width: 10vw;
}

.field{
  position: relative;
}

.icon{
 position: absolute;
 right: 2vw;
 top: 30%;
}

</style>
