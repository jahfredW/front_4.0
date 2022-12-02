import axios from "axios"
import { accountService } from "./account.service";
import router from '@/router'

/* ce module défini la configuration initiale de axios, 
et paramètre le header */



const Axios = axios.create({
    baseURL: 'http://localhost:3000'
})

// Axios.defaults.headers.common["Authorization"] =
//   "Bearer, " + localStorage.getItem("token");

// Interceptor des réponses de l'api

Axios.interceptors.response.use(response => {
    return response
}, error => {
    console.log(error.response.status);
    if(error.response.status == 401){
        accountService.logout();
        router.push('/login');
        alert('Désolé, vous n etes pas autorisé ! ')
        
    }
})



// axios interceptor, si connecté alors le token est 
// ajouté dans l'entête.
// Interceptor pour injection token
Axios.interceptors.request.use(request => {
    if(accountService.isLogged()){
        request.headers.Authorization = 'Bearer, '+ accountService.getToken();
    }
    console.log(request)
    return request;
})

export default Axios