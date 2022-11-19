<template>
  <form>
    <span v-if="v$.name.$error"> {{ v$.name.$errors[0].$message }} </span>
    <v-text-field
    v-model="name"
        :counter="20"
        placeholder="Votre nom : "
        label="Nom"
        required
    ></v-text-field>
    <span v-if="v$.name.$error"> {{ v$.surName.$errors[0].$message }} </span>
    <v-text-field
    v-model="surName"
        :counter="20"
        placeholder="Votre prénom : "
        label="Prénom"
        required
    ></v-text-field>
    <span v-if="v$.email.$error">  {{ v$.email.$errors[0].$message }} </span>
    <v-text-field
      v-model="email"
      label="E-mail :"
      placeholder="Votre email : "
      required
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      label="Demande :"
      required
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      label="J'accepte de communiquer mes données personnelles"
      required
    ></v-checkbox>
    <v-btn
      class="mr-4"
      @click="submitForm"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</template>



<script>

import useVuelidate from '@vuelidate/core'
import { required, email, maxLength, helpers } from '@vuelidate/validators'
import {HTTP} from '../http-constant'

 
export default {

  setup () {
    return { v$: useVuelidate() }
  },

  validations : () => ({
      name :  { 
        required, 
        maxLength: maxLength(20) 
      },
      surName :  { 
        required, 
        maxLength: maxLength(20) 
      },
      email: {required, email},
      select : { required},
      items : { required },
      checkbox: {
        required,
        checked(val) {
          return val
        }
      }
    }),

  data : () => ({
      name :'',
      surName :'',
      email: '',
      items: [
        'Demande de renseignements', 
        'Demande de devis',
        'Autre demande',
      ],
      select: null,
      checkbox: false
    })
  ,


  methods: {
    submitForm(){
      HTTP
        .post('/members')
        .then(response => (this.info = response.data.bpi))
        .catch(error => console.log(error))
    },



    clear(){
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
        this.$v.$dirty = true
      },
  },



  
}

</script>




