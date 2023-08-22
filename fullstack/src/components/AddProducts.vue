<template>
    <div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        add product
      </button>
  
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">New Product</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                placeholder="product Name"
                type="text"
                v-model="model.product.prodName"
              />
              <input
                placeholder="quantity"
                type="number"
                v-model="model.product.quantity"
              />
              <input
                placeholder="price"
                type="number"
                v-model="model.product.price"
              />
              <input
                placeholder="category"
                type="text"
                v-model="model.product.category"
              />
              <input
                placeholder="product image"
                type="text"
                v-model="model.product.prodUrl"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn"
                @click="createProduct"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        model: {
          product: {
            prodName: "",
            quantity: "",
            price: "",
            category: "",
            prodUrl: "",
          },
        },
      };
    },
    methods: {
      createProduct(){
        this.$store.dispatch("createProduct", this.model.product)
        location.reload()
      }
    },
    }
  </script>
  

<style scoped>
</style>