/* importation des modules nécessaires */
import Axios from './caller.service.js'


let getUser = (id) => {
    return Axios.post('api/auth/find'+ id)
}


let getAllUsers = () => {
    return Axios.post('api/auth/findAll')
}

export const userService = {
    getAllUsers,
    getUser
}