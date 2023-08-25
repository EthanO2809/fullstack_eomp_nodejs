<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      @click="openEditModal(product.prodID)"
      data-bs-toggle="modal"
      :data-bs-target="'#eexampleModal' + product.prodID"
    >
      Update
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
      :id="'eexampleModal' + product.prodID"
      tabindex="-1"
      :aria-labelledby="'eexampleModalLabel' + product.prodID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="eexampleModalLabel">
              Update Products
            </h1>
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
              v-model="editingProduct.prodName"
              required
            />
            <input
              placeholder="quantity"
              type="number"
              v-model="editingProduct.quantity"
              required
            />
            <input
              placeholder="amount"
              type="number"
              v-model="editingProduct.amount"
              required
            />
            <input
              placeholder="category"
              type="text"
              v-model="editingProduct.category"
              required
            />
            <input
              placeholder="product image"
              type="text"
              v-model="editingProduct.prodUrl"
              required
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct(product.prodID)"
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
  props: ["product"],
  data() {
    return {
        editingProduct:{
          prodName: "",
          quantity: 0,
          amount: 0,
          category: "",
          prodUrl: "",
        },
      };
  },
  computed: {
    thisProduct() {
      return this.$store.state.product;
    },
  },
  methods: {
    openEditModal(prodID) {
      this.editingProductID = prodID;
      this.editingProduct = {
        ...this.$store.state.products.find(
          (product) => product.prodID === prodID
        ),
      };
    },
    updateProduct(prodID) {
      this.$store
        .dispatch("updateProduct", {
          prodID: prodID,
          ...this.editingProduct,
        })
        .then(() => {
          console.log("product successfully updated");
        })
        .catch((err) => {
          console.error("Error while updating: ", err);
        });
    },
  },
};
</script>

<style scoped>

</style>