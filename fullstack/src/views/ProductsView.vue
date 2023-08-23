<template>
    <div class="container">
        <div class="row">
            <h2 class="class-display2">Products</h2>
        </div>
        <div class="row justify-content-center gap-3" v-if="product">
            <div class="col" v-for="product in product" :key="product">
                <div class="card" style="width: 18rem;">
                    <img :src="product.prodUrl" class="card-img-top" :alt="product.prodName">
                    <div class="card-body">
                        <button class="view">View More</button>
                       <h5 class="card-title">{{ product.prodName }} <br> R {{ product.amount }}</h5>    
                      <!--<p class="card-text"><span>Category: {{ product.Category }}</span></p> -->
                    </div>
                  </div>
            </div>
        </div>
        <div v-else class="row">
            <Spinner/>
        </div>
    </div>
</template>

<script>
import Spinner from "../components/Spinner.vue"
    export default {
        components:{
            Spinner
        },
        computed: {
            product() {
                return this.$store.state.products
            }
        },
        mounted() {
            this.$store.dispatch('fetchProducts')
        }
    }

    
</script>

<style scoped>
.card-img-top{
    aspect-ratio: 1/1;
}
.card{
    margin-bottom:1rem ;
}

.view{
    width: 6rem;
    height: 2rem;
}
</style>