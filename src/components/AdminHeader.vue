<template>
    <div class="admin-head text-center">
        <v-btn>Afficher utilisateurs</v-btn>
        <v-btn>Rechercher utilisateurs</v-btn>
        <v-btn>Supprimer utilisateurs</v-btn>
    </div>
</template>

<script>

export default {
    name: 'AdminHeader'
}
</script>

<style>
.admin-head{
    height: 5vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid black;
}
</style>