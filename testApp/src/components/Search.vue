<template>
        <v-container
                fluid
                style="min-height: 0;"
                grid-list-lg>
            <products-list :product-list="productList"></products-list>
        </v-container>
</template>
<script>
    import _ from 'lodash';
    import api from './../shared/back.service';
    import ProductsList from './../components/ProductsList';

    export default {
        name: 'Search',
        props:['query'],
        data() {
            return {
                productList: []
            }
        },
        methods: {},
        mounted() {
            api.searchProducts(this.query).then((res) => {
                _.each(res, (el) => {
                    el.sizes = (_.map(el.sizes, (x) => x.value)).join(', ')
                });
                this.productList = res;
            })
        },
        components: {
            ProductsList
        }
    }

</script>
