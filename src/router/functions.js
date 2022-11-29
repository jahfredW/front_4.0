import VueJwtDecode from 'jwt-decode';
import router from '@/router';


export function decode(to){
            let token = localStorage.getItem('user');
            console.log(token);
            try{
                let decoded = VueJwtDecode(token)
                console.log(decoded.exp);
                return checkDate(decoded.exp);
            } catch {
                router.push('/');
            }
          }
function checkDate(token){
            if (Date.now() >= token * 1000) {
                router/psuh('/');
              } else {
                return true;
              }
        }  



