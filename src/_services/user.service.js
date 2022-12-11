/* importation des modules nécessaires */
import Axios from './caller.service.js'


let getUserAdminId = (id) => {
    return Axios.get('api/admin/find/' + id)
}

let getUserAdminEmail = (formdata) => {
    return Axios.post('api/admin/findbyemail' , formdata)
}

let getUserByEmail = (id) => {
    return Axios.post('api/admin/findbyuser')
}


let getUser = (id) => {
    return Axios.get('api/auth/find/'+ id)
}

let updateUser = (user) => {
    console.log('ici' + user.id);
    return Axios.put('api/auth/find/'+ user.id, user)
}

let deleteUser = (id) => {
    return Axios.delete('api/admin/deleteuser/' + id)
}


let getAllUsers = () => {
    return Axios.get('api/auth/findall')
}

// sert d'index pour l'export des fonctions 
export const userService = {
    getAllUsers,
    getUser,
    updateUser,
    getUserAdminId,
    deleteUser,
    getUserByEmail,
    getUserAdminEmail
}