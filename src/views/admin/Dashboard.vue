<template>
    <div>
        <router-view/>
    </div>
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