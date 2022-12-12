<template>
    <v-row>
        <v-col cols="12">
            <div class="container">
                <v-carousel show-arrows="hover" hide-delimiters cycle height="xs-400">
                    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"
                        reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
                </v-carousel>
            </div>
        </v-col>
    </v-row>
</template>
  
<script>

export default {
    name: 'Carousel',

    // data : renvoie un litterale d'objet // 
    data() {
        return {
            items: [
                {
                    src: 'mer.png',
                },
                {
                    src: 'ecrans.png',
                },
                {
                    src: 'van.png',
                },
            ],
        }

    }
}
</script>
  
  