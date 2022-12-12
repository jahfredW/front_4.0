<template >
  <v-container class="container mt-15">
    <v-row class="mb-10">
      <v-col cols="12"  xs="12" sm="12" md="8" lg="8"  class="my-auto text-center">
        <h2 class="text-h3">Inscrivez vous afin de profiter de fonctionnalités réservées ! </h2>
      </v-col>
      <v-col cols="12"  xs="12" sm="12" md="4" lg="4">
        <v-img height=250 src="kameha.png">
        </v-img>
      </v-col>
    </v-row>
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
      </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field class="w-100 text-left field" :type="this.type2" v-model="verification" :rules="verifRules" :counter="10" label="Confirmez" required>
              <v-icon class="icon" @click.prevent="toggleShow2">
                mdi-eye-check
              </v-icon>
          </v-text-field>
        </v-col>
      </v-row>
      <v-checkbox
            v-model="agree"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Je suis d'accord avec la poltique de traitement des données"
            required
        ></v-checkbox>
      <v-col cols="12">
        <v-btn :disabled="!valid" color="success" class="mr-4" @keyup.enter="submit" @click.prevent="submit">Validate
        </v-btn>
      </v-col>
    </v-form>
    <div class="mt-10">
    <p v-if=this.agree>
      * Les informations recueillies sur ce formulaire sont enregistrées dans un fichier informatisé par fredGruweDev.com pour sauvegarde. La base légale du traitement est [base légale du traitement].

Les données collectées seront communiquées aux seuls destinataires suivants : [destinataires des données].

Les données sont conservées pendant la durée de conservation des données prévue par le responsable du traitement ou critères permettant de la déterminer.

Vous pouvez accéder aux données vous concernant, les rectifier, demander leur effacement ou exercer votre droit à la limitation du traitement de vos données.
Vous pouvez retirer à tout moment votre consentement au traitement de vos données ; Vous pouvez également vous opposer au traitement de vos données ; Vous pouvez également exercer votre droit à la portabilité de vos données

Consultez le site cnil.fr pour plus d’informations sur vos droits.

Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez contacter (le cas échéant, notre délégué à la protection des données ou le service chargé de l’exercice de ces droits).

Si vous estimez, après nous avoir contactés, que vos droits « Informatique et Libertés » ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.
    </p>
  </div>
  </v-container>
</template>


<script>


import { accountService } from '../../_services/account.service';

export default {
  name: 'signupVue',

  data() {
    return {
      valid: true,
      agree: false,
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
        v => (v && v.length) <= 20 || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length) <= 24 || 'Name must be less than 10 characters',
      ],
      verifRules: [
        v => !!v || 'PAssword is required',
        v => v == this.password || ' Le mot de passe de correspond pas !',
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
