<template>
    <v-container>
        <div class="font-weight-bold text-center text-h5 my-3">Dans ce mode, vous pouver Gérer
            les utilisateurs
        </div>
        <router-view/>
    </v-container>
</template>
<script>

import AdminHeader from '@/components/AdminHeader.vue'

export default {
    name: 'Dashboard',
    components : {
       AdminHeader
    }

}

</script>