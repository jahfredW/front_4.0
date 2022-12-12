<template>
    <v-container class="text-center container mt-4 ">
        <h1 class="text-h3 mt-10 mb-15 font-italic">Un développeur passionné,  à <span>votre service</span></h1>
        <v-divider></v-divider>
        <v-row class="my-15">
            <v-col  class="my-auto" cols="12" xs="12" sm="12" md="4" lg="4">
                <v-img 
                src="pc.jpg"></v-img>
            </v-col>
            <v-col class="my-auto" cols="12"  xs="12" sm="12" md="8" lg="8">
                <h1 class="text-h4 mb-10 ">Web et Web Mobile</h1>
                <p >Vos sites et applications Web fonctionnels à la fois sur pc et sur mobile, 
                    sans coûts supplémentaires !</p>
                <br>
                <p>Reponsive est aujourd'hui le maitre mot pour tout développeur qui se respecte, permettant 
                    une ergonomie optimisée, que ce soit sur mobile, tablettes ou pc de bureau !
                </p>

            </v-col>
        </v-row>
        <v-divider></v-divider>
        <h1 class="text-h4 mt-5 mb-5">Code, surf, liberté</h1>
        <Carousel></Carousel>
        <v-divider></v-divider>
        <v-row class="my-10">
            <v-col class="my-auto" cols="12"  xs="12" sm="12" md="8" lg="7">
                <h1 class="text-h4 mb-10">Des applications sécurisées ... </h1>
                <p>L'utilisation des dernières technologies web, permettant une réelle sécurisation de voytre site, 
                    de vos donnéess ainsi que celles de vos utilisateurs! 
                    Crytage de mots de passe, jsonwebtoken, urlGuadians vous permettront d'être sereins quel quel
                    soit le mode d'utilisation de vos ressources web.
                </p>
            </v-col>
            <v-col class="my-auto" cols="12" xs="12" sm="12" md="4" lg="5">
                <v-img 
                src="moi.jpg"></v-img>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
            <v-col class="my-auto" cols="12">
                <h1 class="text-h4 mb-10">... Et sur mesure
                </h1>
                <p>Du site web statique à l'application full stack E-commerce, je m'adapte à votre projet 
                    en garantissant une evolutivité de votre site en fonction de vos futurs besoins. 
                    Ceci est rendu possible par l'utilisation des dernières technologies web et par la maitrise
                    de frameworks variés codé dans différents langages de programmation.
                </p>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
            <v-col cols="4" class="mx-auto">
                <v-img 
                src="surf.jpg"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>
    
<script>
import { defineComponent } from 'vue';

// Components
import Carousel from '@/components/public/Carousel.vue';


export default defineComponent({
    name: "Presentation",
    component: {
        Carousel
    },
    data() {
        return {
            result: {}
        };
    },
    components: { Carousel }
});
</script>