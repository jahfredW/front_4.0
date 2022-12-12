<template>
  <v-banner 
    class="mb-5"
    single-line
    @click:icon="alert"
  >
    <v-icon
      slot="icon"
      color="warning"
    >
    mdi-information-variant
    </v-icon>
    Envoyez moi vos coordonnées en remplissant 
    le formulaire ci-dessous ! Je vous répondrai dans les meilleurs délais :)
  </v-banner>
  <v-form
    id="form"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nom"
      required
    ></v-text-field>

    <v-text-field
      v-model="surname"
      :counter="10"
      :rules="surnameRules"
      label="Prénom"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
    transition="slide-x-transition"
      v-model="question"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Votre demande :"
      required
    ></v-select>

    <v-checkbox
      v-model="agree"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Je suis d'accord avec la politique de traitement de données *"
      required
    ></v-checkbox>
  <div id="button">
    <v-btn 
      :disabled="!valid"
      color="success"
      class="mb-4"
      @click.prevent="validate"
    >
      Soumettre
    </v-btn>

    <v-btn
      color="error"
      
      @click.prevent="reset"
    >
      Effacer
    </v-btn>


  </div>
    
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
</template>

<script>
import { useUrlprodStore } from '../stores/url'

import axios from 'axios'
import router from '../router/index'


  export default {

      setup: () => {
        const store = useUrlprodStore()
        const urlMain = store.urlMain
        const ipMain = store.ipMain
        const portMAin = store.portMain

        return {urlMain, ipMain, portMAin}
      },


    data: () => ({
      valid: true,
      name: '',
      surname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      question: null,
      items: [
        'Recrutement',
        'Devis',
        'Renseignement',
        'Autre demande',
      ],
      agree: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
        this.submit()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },

      submit(){
        let self = this;
      
        if (this.$refs.form.validate()){

         
          var formData = new FormData();
          formData = {
            name : this.name,
            surname : this.surname,
            email : this.email,
            question : this.question,
            agree : this.agree
          }
          axios.post('https://fredgruwedev.com/api/members', 
          
            formData
          )
            .then( (res) => {
                console.log(res.data)
                router.push('/thanks')
                

            })
            .catch( (err) => {
                console.log(err)
            })
        }
        
      }
    },
  }
</script>

<style>
#button{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 3vw;
  }

#form{
  color: black;
}

@media screen and (max-width: 450px){
  #button{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}

</style>