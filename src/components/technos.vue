<template>
    <div id="logo">
        <a  
    :href= logoBuilder(this.logoTitle)[1]>
        <v-img 
            :src= logoBuilder(this.logoTitle)[0]
            :title=this.logoTitle
        ></v-img>
    </a>
    </div>
    
    
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
    logoMysql

    
  }),

  props: {
    logoTitle : String
  },

  methods: {
    logoBuilder(title) {
        let logo = ""
        let link = ""
        switch(title){
            case 'vueJs':
                logo = logoVue;
                link = "https://vuejs.org/";
                break;
            case 'nodeJs':
                logo = logoNode;
                link = "https://nodejs.org/en/";
                break;
            case 'symfony':
                logo = logoSymfony;
                link = "https://symfony.com/";
                break;
            case 'django':
                logo = logoDjango;
                link = "https://www.djangoproject.com/";
                break;
            case 'fastapi':
                logo = logoFastApi;
                link = "https://fastapi.tiangolo.com/";
                break;   
            case 'bootstrap':
                logo = logoBootstrap;
                link = "https://getbootstrap.com/";
                break;
            case 'bulma':
                logo = logoBulma;
                link = "https://bulma.io/";
                break;
            case 'figma':
                logo = logoFigma;
                link = "https://www.figma.com/";
                break;
            case 'mysql':
                logo = logoMysql;
                link = "https://www.mysql.com/fr/";
                break;
            default:
                console.log('error');
        }
        return [logo, link]
    }
  }



}

</script>

<style>

#logo{
    width: 10vw ;
    margin-left: 7vw;
}

@media screen and (max-width: 820px){

    #logo{
    width: 15vw ;
    margin-left: 7vw;
}

}

</style>