<template>
    <div>
        <v-card>
            <v-card-media src="/static/black_logo.jpg" height="150px" class="my-1" @click="goHome">
                <v-layout column class="media"></v-layout>
            </v-card-media>
            <v-list dense>
                <v-list-tile v-for="item in categories" :key="item.text" @click="goToCat(item.slug)" ripple >
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{ item.name }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <template v-if="api.isAuth()">
                <v-subheader class="mt-3 grey--text text--darken-1">Admin</v-subheader>
                <v-list>
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="https://randomuser.me/api/portraits/women/50.jpg" alt="">
                        </v-list-tile-avatar>
                        <v-list-tile-title>Admin</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                Товари
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                Категорії
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </template>
        </v-card>
    </div>
</template>

<script>
    import api from './../shared/back.service'

    export default {
        name: 'sidebar-categories',
        data: () => ({
            categories: [],
            api: api,
        }),
        mounted() {
            api.getCategories().then((res) => {
                this.categories = res;
            })
        },
        methods: {
            goToCat(slug) {
                this.$router.push({name: 'category', params: {slug: slug}})
            },
            goHome() {
                this.$router.push({name: 'home'})
            },
        }
    }
</script>

<style scoped>

</style>
