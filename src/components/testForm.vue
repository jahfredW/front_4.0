<template>
    <v-form>
        <span v-if="v$.name.$error"> {{ v$.name.$errors[0].$message }} </span>
        <v-text-field
        v-model="name" 
        label = "Nom">
        </v-text-field>
        <v-text-field
        v-model="firstName" 
        label = "Prénom">
        </v-text-field>
        <v-text-field
        v-model="email" 
        label = "Email">
        </v-text-field>
        <v-btn
        class="mr-4"
        @click="login"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </v-form>
</template>


<script>

import useVuelidate from '@vuelidate/core'
import { required,maxLength } from '@vuelidate/validators'
// import {HTTP} from '../http-constant'
import axios from 'axios'

 
export default {

  setup () {
    return { v$: useVuelidate() }
  },

  validations : () => ({
      name :  { 
        required, 
        maxLength: maxLength(6) 
      },
    }),

  data : () => ({
      name :'',
      id: ''
    })
  ,


    methods: {

    login() {
       
        axios.get ("http://fredgruwedev.com:3000/api/tutorials/")
            .then( (res) => {
                console.log(res.data)
            })
            .catch( (err) => {
                console.log(err)
            })
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




<style>

</style>