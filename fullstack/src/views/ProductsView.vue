<template>
    <div>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn search" type="submit">Search</button>
          </form>
  <div class="container">
    <div class="row">
      <h2 class="class-display2">Products</h2>
    </div>
    <div class="row justify-content-center gap-3" v-if="products">
        <div class="col" v-for="productItem in products" :key="productItem.prodID">
        <div class="card" style="width: 18rem">
          <img
            :src="productItem.prodUrl"
            class="card-img-top"
            :alt="productItem.prodName"
          />
          <div class="card-body">
            <h5 class="card-title">{{ productItem.prodName }} <br/></h5>
            <center>
            <button class="view" @click="viewProduct(productItem.prodID)">
                <span>View More</span>
                <svg class="arrow" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
            </button>
        </center>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="row">
      <Spinner />
    </div>
  </div>
</div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
export default {
  components: {
    Spinner,
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }, 
  methods: {
    viewProduct(prodID) {
        const chosenProd = this.products.find((product)=>product.prodID === prodID)
        this.$store.commit("setSingleProduct", chosenProd)
      this.$router.push({ name: "ViewMore", params: { prodID: prodID } });
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>
.card-img-top {
  aspect-ratio: 1/1;
}
.card {
  margin-bottom: 1rem;
}

.view {
  width: 7rem;
  height: 2rem;
  padding: 0.1rem;
}

button{
    border-radius: 5px;
}

button {
    width: 7rem !important;
    height: 30px;
    gap: 12px;
    cursor: pointer;
    border: 3px solid rgb(134, 134, 134) ;
    background-color: rgb(200, 200, 200);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.137);
  }
  
  .view {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .arrow path {
    fill: rgb(19, 19, 19);
  }
  
  button:hover .arrow {
    animation: slide-in-left 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  
  @keyframes slide-in-left {
    0% {
      transform: translateX(-8px);
      opacity: 0;
    }
  
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  
  button:active {
    transform: scale(0.97);
  }
</style>