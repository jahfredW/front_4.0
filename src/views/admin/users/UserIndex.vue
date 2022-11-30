<template>
    <div class="text-center">
        <router-view/>
        <div v-for="key in this.userArray">
             {{ key.id + ": " + key.email + "  créé le :  " + key.createdAt.slice(0,10) }}
        </div>
    </div>
        
    
</template>

<script>
import axios from 'axios';
axios.defaults.headers.common["Authorization"] =
  "Bearer, " + localStorage.getItem("user");


export default {
    name: 'UserIndex',

    data() {
        return {
            userArray : []
        }
    },

    methods : {
        submit(){
        let self = this;
      
        axios.post('http://127.0.0.1:3000/api/auth/find')
            .then( (res) => {
                let data = res.data.data;
                console.log(data);
                for(let key of data){
                    self.userArray.push(key);
                    
                }
              
                
                
            })
            .catch( (err) => {
                console.log(err)
            })
        }
        
    },

    mounted(){
        console.log(this.$route.params.id);
        this.submit();

        

    }
}
</script>