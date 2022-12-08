<template>
    <div class="container">
        <div class="text-center">
            <div class="font-weight-bold text-h5 my-3">Gérer un utilisateur : </div>
        </div>

    <table class="table w-100">
        <thead>
            <tr>
                <th  class="text-center">id</th>
                <th  class="hidden-xs hidden-sm text-center">nom</th>
                <th  class="hidden-xs hidden-sm text-center">prenom</th>
                <th  class="text-center">pseudo</th>
                <th  class="text-center">email</th>
                <th  class="hidden-sm hidden-xs text-center ">admin</th>
                <th  class="hidden-xs hidden-sm text-center">création</th>
            </tr>
            
        </thead>
        <tbody>
            <tr>
                <td> {{ user.id }}</td>
                <td class="hidden-xs hidden-sm"> {{ user.name }}</td>
                <td class="hidden-xs hidden-sm" > {{ user.surname }}</td>
                <td > {{ user.pseudo }}</td>
                <td  > {{ user.email }}</td>
                <td class="hidden-xs hidden-sm"> {{user.isAdmin}}</td>
                <td class="hidden-xs hidden-sm"> {{ user.createdAt}}</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
import router from '@/router'
import  { userService } from '@/_services'
import { cloneVNode } from 'vue'


export default {
    name: 'UserCustom',
    // propriété de param accessible dans le scope, récupération de l'id
    // ici la props n'est pas dérivée du composant, mais récupérée via le routeur ( props : true )
    props: ['id'],
    data() {
        return {
            user : {
                name: "",
                surname: "",
                isAdmin : false,
                pseudo : "",
                email : "",
                createdAt: ""
            },
            admin : "",

        }
    },

    mounted(){
        // récupère les datas de l'utilisateur via son ID ( requete get en api )
        userService.getUserAdmin(this.id)
        .then( res => {
            console.log(res.data)
            this.user = res.data.data
            this.user.id = this.id
        })
        .catch(err => console.log(err))
        
    },

    methods: {
        // Envoie les modificationsde l'utilisateur à l'api  
    //     delete(){
    //         userService.deleteUser(this.id)
    //         .then( res => {
    //             console.log(res);
    //             router.push({ name : 'UserUpdated'})
    //         })
    //         .catch( err => {
    //             console.log('erreur !')
    //             console.log(err)
    //         })
    //     }
    // },

    // computed : {
    //     getAdmin(){
    //         if (this.user.isAdmin){
    //         this.admin = "Je suis un administrateur"
    //     } else {
    //         this.admin ="Je ne suis pas un administrateur"
    //     }
    //     return this.admin
    //     }
        
    },


}

</script>