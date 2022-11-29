<template>
    <div>
        User Index works ! 
    </div>
</template>

<script>
export default {
    name: 'UserIndex',
    mounted(){
        console.log(this.$route.params.id);
    }
}
</script>