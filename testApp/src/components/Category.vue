<template>
    <v-container
            fluid
            style="min-height: 0;"
            grid-list-lg>
        <products-list :product-list="productList"></products-list>
    </v-container>
</template>
<script>
    import api from './../shared/back.service';
    import ProductsList from './../components/ProductsList';

    export default {
        name: 'Category',
        props: ["slug"],
        data() {
            return {
                productList: [],
            }
        },
        methods: {},
        mounted() {
            api.getProducts(this.slug.trim()).then((res) => {
                _.each(res, (el) => {
                    el.sizes = (_.map(el.sizes, (x) => x.value)).join(', ')
                });
                this.productList = res;
            })
        },
        components: {
            'products-list': ProductsList
        }
    }

</script>
