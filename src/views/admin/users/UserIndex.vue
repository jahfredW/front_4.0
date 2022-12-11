<template>
   <v-container class="text-center container">
    <div class="font-weight-bold text-h5 my-3">Rechercher un utilisateur :</div>
    <v-form ref="ref" v-model="valid">
        <v-row>
            <v-col cols="12">
                <v-text-field
                label="email"
                :rules="emailRules"
                v-model="email">
            </v-text-field>
            </v-col>
        </v-row>
        <v-btn
            class="mb-5"
            @click.prevent="this.search()"
            :disabled="!valid"
            type="submit"
            color="success">
            Chercher
        </v-btn>
    </v-form>
    

    <div class="font-weight-bold text-h5 my-3">Liste des utilisateurs :</div>
    <table class="table w-100">
        <thead>
            <tr>
                <th  class="text-center">id</th>
                <th  class="hidden-xs hidden-sm text-center">nom</th>
                <th  class="hidden-xs hidden-sm text-center">prenom</th>
                <th  class="text-center">pseudo</th>
                <th  class="text-center">email</th>
                <th  class="hidden-xs hidden-sm text-center">admin</th>
                <th  class="hidden-xs hidden-sm text-center">création</th>
            </tr>
            
        </thead>
        <tbody>
            <tr v-for="(user, index) in userArray" :key="user.id">
                <td> {{ user.id }}</td>
                <td class="hidden-xs hidden-sm"> {{ user.name }}</td>
                <td class="hidden-xs hidden-sm" > {{ user.surname }}</td>
                <td > {{ user.pseudo }}</td>
                <td class="edit" title="modifier" @click="goEdit(user.id)"> {{ user.email }}</td>
                <td class="hidden-xs hidden-sm"> {{user.isAdmin}}</td>
                <td class="hidden-xs hidden-sm"> {{ formatDate[index]}}</td>
            </tr>
        </tbody>
    </table>
</v-container>
  </template>

<script>
import { userService } from '@/_services'
import Axios from '../../../_services/caller.service';



export default {
    name: 'UserIndex',

    data() {
        return {
            valid : false,
            email : "",
            userArray : [],
            emailRules : [
                v => !!v || "Le champs ne peut être vide",
                v => !/[-!$%^&*()_+|~=`\\#{}\[\]:";'<>?,\/]/.test(v) || "les caractères spéciaux sont interdits",
            ]
        }
           
    },

    methods : {

        search(){
            var formdata = new FormData();
            formdata = {
                email : this.email
            }
            
        userService.getUserAdminEmail(formdata)
        .then( res => {
            if(res){
                console.log('ici !')
                this.$router.push({ name : 'uEdit', params : { id : res.data.data.id }});
            }
        })
        .catch( err => {
            // un 401 renvoyé par l'api envoue le message ici 
            alert('Erreur, aucun nom en bdd ! ') 
        })
        },

        goEdit(id){
            if(id){
                this.$router.push({ name : 'uEdit', params:{ id: id}});
            }
        },

        formatDate(item){
        return item.split('T')[0].split('-').reverse().join('/');
       },

        submit(){
        // finction fléchée : this = last node ! 
        let self = this;

        // retourne la liste des membres inscris
        userService.getAllUsers()
            .then( (res) => {
                console.log(res.data.data)
                self.userArray = res.data.data; 
                
            })
            .catch( (err) => {
                console.log('ici');
                console.log(err)
            })
        },
        // retourne taille de l'écran, 
        // inutile face à hidden-xs, sm, md, lg, xl
        windowSize(){
            return window.innerWidth > 500;
        }
        
    },

    mounted(){
     
        console.log(window.innerWidth > 500);
        this.submit();
    },

    computed: {
       formatDate(){
        return this.userArray.map(u => u.createdAt.split('T')[0].split('-').reverse().join('/'))
    },
       
},
}
</script>

<style>

.edit{
    cursor: pointer;
}

.edit:hover{
    font-weight: bold;
}
</style>