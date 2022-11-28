<template>
    <div>
        <router-view/>
    </div>
</template>

<script>
import Dashboard from './Dashboard.vue'

export default {
    name : 'dashboard',
    components : {
        Dashboard
    }
}

</script>
