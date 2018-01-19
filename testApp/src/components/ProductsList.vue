<template>
    <v-layout row wrap>
        <v-flex xs12 md4 sm6 v-for="product in productList" :key="product.objectId">
            <v-card>
                <v-card-media
                        class="white--text"
                        height="200px"
                        :src="product.poster"
                >
                </v-card-media>
                <v-card-title class="pb-0">
                    <div>
                        <div class="headline">{{product.post_title}}</div>

                    </div>
                </v-card-title>
                <v-card-text class="py-0">
                    <p class="grey--text text-xs-right">Розміри в наявності: {{product.sizes}}</p>
                </v-card-text>
                <v-card-actions>
                    <v-btn flat color="green">Купить</v-btn>
                    <v-btn flat color="blue" @click="addTols(product.objectId)">Добавить в корзину</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "products-list",
        props: ['product-list'],
    }
</script>

<style scoped>

</style>
