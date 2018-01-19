<template>
    <v-app dark id="inspire">
        <v-navigation-drawer
                fixed
                clipped
                v-model="drawer"
                app>

            <sidebar-categories/>

        </v-navigation-drawer>
        <v-toolbar
                color="red"
                dense
                fixed
                clipped-left
                app
        >
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
            </v-toolbar-title>
            <v-layout row align-center style="max-width: 650px">
                <v-text-field
                        placeholder="Пошук товарів..."
                        single-line
                        append-icon="search"
                        :append-icon-cb="() => {}"
                        class="white--text"
                        hide-details
                        v-model="search"
                        @keyup.enter="submit"
                />
            </v-layout>
        </v-toolbar>
        <v-content>
            <v-container fill-height>
                <v-layout>
                    <router-view :key='$route.fullPath'/>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import SidebarCategories from './components/SidebarCategories';

    export default {
        data: () => ({
            drawer: true,
            search: '',
        }),
        methods: {
            submit() {
                this.$router.push({name: 'search', params: {query: this.search}})
            }
        },
        components: {
            SidebarCategories
        },
    }
</script>

<style>
</style>
