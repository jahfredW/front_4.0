<template>
 
        <v-col md="6" cols="12" class=" my-auto" >
            <div id="logo" >
            <a  
                :href= logoBuilder(this.logoTitle)[1]>
                <v-img 
                    :src= logoBuilder(this.logoTitle)[0]
                    :title=this.logoTitle
                ></v-img>
            </a>
            </div>
        </v-col>
        <v-col md="6" cols="12" class="text-center px-auto">
            <div class="mx-auto my-6 text-center">
            <p>
                {{ logoBuilder(this.logoTitle)[2]}}
            </p>
            </div>
        </v-col>
        <v-divider></v-divider>

</template>

<script>

import logoVue from '../assets/logoVueRounded.png'
import logoNode from '../assets/nodejs.svg'
import logoDjango from '../assets/django.svg'
import logoBootstrap from '../assets/bootstrap.svg'
import logoBulma from '../assets/bulma.svg'
import logoSymfony from '../assets/symfony.svg'
import logoFigma from '../assets/figma.svg'
import logoFastApi from '../assets/fastapi.svg'
import logoMysql from '../assets/mysql.svg'

export default {

    data: () => ({

    logoVue,
    logoNode,
    logoDjango,
    logoBootstrap,
    logoBulma,
    logoSymfony,
    logoFigma,
    logoFastApi,
    logoMysql,

    
  }),

  props: {
    logoTitle : String
  },

  methods: {
    logoBuilder(title) {
        let logo = ""
        let link = ""
        let description = ""
        switch(title){
            case 'vueJs':
                logo = logoVue;
                link = "https://vuejs.org/";
                description = "Vue.js (aussi appelé plus simplement Vue), est un framework JavaScript open-source utilisé" 
                description += "pour construire des interfaces utilisateur et des applications web monopages. Vue a été créé par "
                description += "Evan You et est maintenu par lui et le reste des membres actifs de l'équipe principale travaillant sur le projet et son écosystème."
                break;
            case 'nodeJs':
                logo = logoNode;
                link = "https://nodejs.org/en/";
                description = "Node.js est une plateforme logicielle libre en JavaScript, orientée vers les applications réseau évènementielles hautement concurrentes qui doivent pouvoir monter en charge. Concrètement, Node.js est un environnement bas niveau permettant l'exécution de JavaScript côté serveur. "
                break;
            case 'symfony':
                logo = logoSymfony;
                link = "https://symfony.com/";
                description = "Symfony est un ensemble de composants PHP ainsi qu'un framework MVC libre écrit en PHP. " 
                description += "Il fournit des fonctionnalités modulables et adaptables qui permettent de faciliter et d’accélérer le développement d'un site web."
                break;
            case 'django':
                logo = logoDjango;
                link = "https://www.djangoproject.com/";
                description = "Django est un framework Web Python de haut niveau qui encourage un développement rapide et une conception propre et pragmatique. Construit par des développeurs expérimentés, "
                description += "il prend en charge une grande partie des tracas du développement Web, vous pouvez donc vous concentrer sur l'écriture de votre application sans avoir à réinventer la roue. C'est gratuit et open source."
                break;
            case 'fastapi':
                logo = logoFastApi;
                link = "https://fastapi.tiangolo.com/";
                description = "FastAPI est un framework web haute performance, open source, permettant de créer des APIs avec Python à partir de la version 3.6. Lancé en 2018,"
                description += "il fut créé par Sebastián Ramírez qui n’était pas satisfait par les frameworks existants comme Flask et DRF. Son premier point fort est un haut "
                description += "niveau de performances, comparables avec NodeJS et Go grâce à Starlette et pydantic. Ce framework est également très rapide à coder, offrant une accélération du développement. "
                break;   
            case 'bootstrap':
                logo = logoBootstrap;
                link = "https://getbootstrap.com/";
                description = "Boîte à outils frontale puissante, extensible et riche en fonctionnalités. Créez et personnalisez avec Sass, utilisez un système de grille et des composants prédéfinis et donnez vie à vos projets avec de puissants plug-ins JavaScript."
                break;
            case 'bulma':
                logo = logoBulma;
                link = "https://bulma.io/";
                description = "Bulma est un framework open source gratuit qui fournit des composants frontaux prêts à l'emploi que vous pouvez facilement combiner pour créer des interfaces Web réactives."
                break;
            case 'figma':
                logo = logoFigma;
                link = "https://www.figma.com/";
                description = "Figma est un éditeur de graphiques vectoriels et un outil de prototypage. Il est principalement basé sur le web, avec des fonctionnalités hors ligne supplémentaires activées par des applications de bureau pour macOS et Windows "
                break;
            case 'mysql':
                logo = logoMysql;
                link = "https://www.mysql.com/fr/";
                description = "MySQL est un système de gestion de bases de données relationnelles (SGBDR). Il est distribué sous une double licence GPL et propriétaire. Il fait partie des logiciels de gestion de base de données les plus utilisés au monde"
                break;
            default:
                console.log('error');
        }
        return [logo, link, description]
    }
  }



}

</script>

<style>

#logo{
    width: 8vw;
    margin: auto;
}

@media screen and (max-width: 820px){

    #logo{
    width: 20vw ;
    margin: auto;
}

}

</style>