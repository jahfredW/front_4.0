<template>
   <div class="text-center">
    <div class="font-weight-bold text-h5 my-3">Liste des utilisateurs : {{ userNumber}}</div>
    <table class="table mx-auto w-75">
        <thead>
            <tr>
                <th class="text-center">id</th>
                <th class="text-center">email</th>
                <th class="text-center">création</th>
            </tr>
            
        </thead>
        <tbody>
            <tr v-for="(user, index) in userArray" :key="user.id">
                <td> {{ user.id }}</td>
                <td class="edit" @click="goEdit(user.id)"> {{ user.email}}</td>
                <td> {{ formatDate[index]}}</td>
            </tr>
        </tbody>
    </table>
   </div>
  </template>

<script>
import { userService } from '@/_services'



export default {
    name: 'UserIndex',

    data() {
        return {
            userArray : []
        }
           
    },

    methods : {

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
        }
        
    },

    mounted(){
        console.log(this.$route.params.id);
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