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
    le formulaire ci-dessous !
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
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="surname"
      :counter="10"
      :rules="surnameRules"
      label="Surname"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="question"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="agree"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>
  <div id="button">
    <v-btn 
      :disabled="!valid"
      color="success"
      class="mb-4"
      @click="validate"
    >
      Soumettre
    </v-btn>

    <v-btn
      color="error"
      
      @click="reset"
    >
      Effacer
    </v-btn>

    <!-- <v-btn
      color="warning"
      @click="resetValidation"
    >
      Validation
    </v-btn> -->

  </div>
    
  </v-form>
</template>

<script>

import axios from 'axios'
import router from '../router/index'


  export default {
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
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
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
          axios.post("http://127.0.0.1:3000/api/members", 
          
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
  color: white;
}

@media screen and (max-width: 450px){
  #button{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}

</style>