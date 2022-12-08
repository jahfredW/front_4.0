<template>
    <div class="container">
        <div class="text-center">
            <div class="font-weight-bold text-h5 my-3">Ajouter un utilisateur : </div>
        </div>
        <v-form v-model="valid" @submit.prevent="submit" ref="form" lazy-validation>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                        v-model="user.name"
                        :rules="basicRules"
                        label="Nom"
                        required > 
                    </v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        v-model="user.surname"
                        :rules="basicRules"
                        label = "prénom"
                        required>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        v-model="user.pseudo"
                        :rules="basicRules"
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
                    <v-col cols="12">
                        <v-text-field
                        v-model="user.password"
                        label="password"
                        required > 
                    </v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-checkbox
                        v-model="user.isAdmin"
                        label="Administrateur"
                        required > 
                    </v-checkbox>
    
                    </v-col>
                </v-row>
                <v-btn
                :disabled="!valid"
                type="submit"
                color="success">
                Modifier
                </v-btn>
            </v-container>
        </v-form>
    </div>
</template>

<script>

import { accountService } from '../../../_services/account.service';
export default {
    name: 'UserAdd',    

    data : () => ({
       
            valid: true,

            user : {
                name : "",
                surname : "",
                email : "",
                pseudo : "",
                password : "",
                isAdmin : "",
            },

            basicRules : [
                v => !!v || "Le champ ne peut être vide",
                v => !/[-!$%^&*()_+|~=`\\#{}\[\]:";'<>?,.\/]/.test(v) || "les caractères spéciaux sont interdits",
                v => (v && v.length < 10 )|| "Le champs de doit pas dépasser 10 caractères",
            ],

            emailRules : [
                v => !!v || "Le champ ne peut être vide",
                v => /.+@.+/.test(v) || "l'email doit être valide !"
            ]

    }),

    methods : {
        submit() {
            if(this.$refs.form.validate()){
                var formData = new FormData();
                formData = {
                    name : this.user.name,
                    surname : this.user.surname,
                    pseudo : this.user.pseudo,
                    email : this.user.email,
                    password : this.user.password,
                    isAdmin : this.user.isAdmin
                }
                accountService.addUser(formData)
                .then( response => {
                    router.push({ name : 'UserUpdated'})
                    console.log(response);
                })
                .catch( error => {
                    console.log(error);
                })
            }
        }
    }
    }


</script>