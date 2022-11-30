import VueJwtDecode from 'jwt-decode';
import router from '@/router';


export function decode(to){
            let token = localStorage.getItem('user');
            console.log(token);
            try{
                let decoded = VueJwtDecode(token)
                console.log(decoded);
                return checkDate(decoded.exp);
            } catch {
                router.push('/');
            }
          }

export function decodeAdmin(to){
    let token = localStorage.getItem('user');
    console.log(token);
    try{
        let decoded = VueJwtDecode(token)
        return checkId(decoded.userId);
    } catch {
        router.push('/');
    }
}

function checkDate(token){
            if (Date.now() >= token * 1000) {
                localStorage.removeItem('user');
                alert('Vous devez vous reconnecter')
                router.push('/');
              } else {
                return true;
              }
        }  

function checkId(token){
    if (token === 1) {
        return true;
        } 
    router.push('/');
}  

export function simpleDecode(){
    let token = localStorage.getItem('user');
        console.log(token);
        try{
            let decoded = VueJwtDecode(token)
            console.log(decoded.exp);
            return checkDate(decoded.exp);
        } catch {
           console.log("Token non défini")
        }
}
