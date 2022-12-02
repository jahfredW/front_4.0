import VueJwtDecode from 'jwt-decode';
import router from '@/router';
// module qui permet de vérifier les infos du token, 
// afin de sécuriser les routes. 

// vérifie si le token est toujours valide ( date )
export function decode(to){
            let token = localStorage.getItem('token');
            console.log(token);
            try{
                let decoded = VueJwtDecode(token)
                console.log(decoded);
                return checkDate(decoded.exp);
            } catch {
                router.push('/');
            }
          }

function checkDate(token){
if (Date.now() >= token * 1000) {
    localStorage.removeItem('token');
    alert('Vous devez vous reconnecter')
    router.push('/login');
    } else {
    return true;
    }
} 


// vérifie si le token appartient à l'administrateur.
export function decodeAdmin(to){
    let token = localStorage.getItem('token');
    console.log(token);
    try{
        let decoded = VueJwtDecode(token)
        console.log(decoded.isAdmin)
        return checkId(decoded.isAdmin);
    } catch {
        router.push('/');
    }
}

 
function checkId(token){
    if (token == true) {
        return token;
        } 
    router.push('/');
}  

export function simpleDecode(){
    let token = localStorage.getItem('token');
        console.log(token);
        try{
            let decoded = VueJwtDecode(token)
            console.log(decoded.exp);
            return checkDate(decoded.exp);
        } catch {
           console.log("Token non défini")
        }
}


export function isAdmin(){
    let token = localStorage.getItem('token');
    console.log(token);
    try{
        let decoded = VueJwtDecode(token)
        console.log(decoded.isAdmin)
        return decoded.isAdmin;
    } catch {
        router.push('/');
    }
}