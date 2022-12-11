<template>
    <div class="container mt-15">
        <div class="text-center">
            <div class="font-weight-bold text-h5 my-3">Modifier l'utilisateur : </div>
        </div>
        <v-form v-model="valid" ref="form">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                        v-model="user.pseudo"
                        :rules="pseudoRules"
                        label="Pseudo"
                        required > 
                    </v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        v-model="user.email"
                        :rules="emailRules"
                        label="email"
                        required > 
                    </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" class="text-center">
                        <v-btn
                            @click.prevent="this.edit()"
                            :disabled="!valid"
                            type="submit"
                            color="success">
                            Modifier
                        </v-btn>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <v-btn
                            @click.prevent="this.delete()"
                            :disabled="!valid"
                            type="submit"
                            color="success">
                            Supprimation
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
import router from '@/router'
import  { userService } from '@/_services'
import { decodeToken } from '../../_helpers/auth_guard'


export default {
    name: 'UeditByUser',
    // propriété de param accessible dans le scope, récupération de l'id
    // ici la props n'est pas dérivée du composant, mais récupérée via le routeur ( props : true )
    data() {
        return {
            valid: false,
            user : {
                id: 0 ,
                isAdmin: "",
                pseudo : "",
                email : "",
            },
            admin : "",
            // définition des règles de validation

            pseudoRules : [
                v => !!v || "Le champs ne peut pas être vide ",
                // regex d'exclusion de caractères sprécifiques. 
                v => !/[-!$%^&*()_+|~=`\\#{}\[\]:";'<>?,.\/]/.test(v) || "les caractères spéciaux sont interdits",
                // v => v.lenght <= 10 || "La saisie ne peut excéder 10 caractères"
            ],
            emailRules: [
            /* v => !!signifie prendre v, et le contraindre à un type booléen en appliquant NOT deux fois. 
            Ainsi, la fonction de filtre supprime essentiellement toutes les valeurs fausses (0, null, undefined) de this._data. */
                v => !!v || " l'email est requis",
                v => /.+@.+/.test(v) || "l'email doit être valide !"
            ],

        }
    },

    methods: {
        // Envoie les modificationsde l'utilisateur à l'api  
        edit(){
            
            userService.updateUser(this.user)
            .then( res => {
                console.log('yo')
                console.log(res);
                router.push('/thanks')
            })
            .catch( err => {
                console.log('erreur !')
                console.log(err)
            })
        },

        delete(){
            userService.deleteUser(this.user.id)
            .then( res => {
                localStorage.removeItem('token');
                console.log(res);
                router.push('/thanks')
            })
            .catch( err => {
                console.log('erreur !')
                console.log(err)
            })
        }
    },



    mounted(){
        let infoUser = decodeToken();
        // récupère les datas de l'utilisateur via son ID ( requete get en api )
        if(infoUser.id > 0){
            userService.getUser(infoUser.id)
        .then( res => {
            console.log(res.data.data)
            this.user.id = res.data.data.id
            this.user.isAdmin = res.data.data.isAdmin
            this.user.pseudo = res.data.data.pseudo
            this.user.email = res.data.data.email
        })
        .catch(err => console.log(err))
        }
        
    }
}

</script>