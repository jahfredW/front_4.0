<template>
    <div>
        <AdminHeader/>
        <router-view/>
    </div>
</template>

<script>
import Dashboard from './Dashboard.vue'
import AdminHeader from '@/components/AdminHeader.vue'

export default {
    name : 'dashboard',
    components : {
        Dashboard,
        AdminHeader
    }
}

</script>
