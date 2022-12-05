/* importation des modules nécessaires */
import Axios from './caller.service.js'


let getUserAdmin = (id) => {
    return Axios.get('api/admin/find/' + id)
}


let getUser = (id) => {
    return Axios.get('api/auth/find/'+ id)
}

let updateUser = (user) => {
    return Axios.put('api/auth/find/'+ user.id, user)
}


let getAllUsers = () => {
    return Axios.get('api/auth/findall')
}

// sert d'index pour l'export des fonctions 
export const userService = {
    getAllUsers,
    getUser,
    updateUser,
    getUserAdmin
}