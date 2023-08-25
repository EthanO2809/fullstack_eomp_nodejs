<template>
  <div class="container" v-if="products">
    <div class="row">
      <h2 class="class-display2 mt-5 mb-5">{{ products.prodName }}</h2>
    </div>
    <div class="row">
      <div class="col">
          <div class="img">
            <img
              :src="products.prodUrl"
              class="img-fluid"
              :alt="products.prodName"
            />
          </div>
          <center>
          <div class="body">
            <h2 class=" mt-5">
              {{ products.prodName }} <br>
              R {{ products.amount }}
            </h2>
            <h2 class="">{{ products.Category }}</h2> <br>
            <p>{{ products.prodDesc }}</p>
          </div>
        </center>
      </div>
    </div>
    <div v-if="loading" class="row">
      <Spinner />
    </div>
  </div>
  <div class="else" v-else>
    <h1>Hi</h1>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.chosenProduct;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>
.card {
  border: 0;
}

.img {
  float: left;
}

.title{
    display: flex;
    justify-content: right;
    align-items: right;   
    text-align: left;
}
</style>