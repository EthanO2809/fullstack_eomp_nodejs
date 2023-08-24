<template>
  <div>
    <!--buttons and search -->
    <div id="all_buttons_display">
      <!-- filter -->
      <div class="dropdown">
      <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sort</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Name</a></li>
        <li><a class="dropdown-item" href="#">Price</a></li>
      </ul>
  </div>
    <!-- sort -->
    <div class="dropdown1">
      <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Filter</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Sneakers</a></li>
        <li><a class="dropdown-item" href="#">Football Boots</a></li>
      </ul>
    </div>
  </div>
  <br>
    <h1>Users Table</h1>
    <AddUser />
    <center>
    <table class="table table-bordered border-black text-center">
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Role</th>
          <th>Email Address</th>
          <th>Profile Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user">
        <tr v-if="user">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.Gender }}</td>
          <td>{{ user.userRole }}</td>
          <td>{{ user.emailAdd }}</td>
          <td>
            <img
              :src="user.userProfile"
              :alt="user.firstName"
              loading="lazy"
              class="img-fluid image"
            />
          </td>
          <td>
            <button class="edit">edit</button   
            ><button class="del" @click="remveUser(user.userID)">delete</button>
          </td>
        </tr>
        <tr v-else>
          <Spinner />
        </tr>
      </tbody>
    </table>
  </center>

    <h1>Products Table</h1>
    <AddProducts />
    <center>
      <table class="table table-bordered border-black text-center">
      <thead>
        <tr>
          <th>ID</th>
          <th>name</th>
          <th>quantity</th>
          <th>price</th>
          <th>category</th>
          <th>product image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-for="product in products" :key="product.prodID">
        <tr v-if="product">
          <td>{{ product.prodID }}</td>
          <td>{{ product.prodName }}</td>
          <td>{{ product.quantity }}</td>
          <td>R {{ product.amount }}</td>
          <td>{{ product.Category }}</td>
          <td>
            <img
              :src="product.prodUrl"
              :alt="product.prodName"
              class="img-fluid image"
              loading="lazy"
            />
          </td>
          <td>
            <UpdateProducts :product="product"/>
            <button class="del" @click="remveProduct(product.prodID)">
              delete
            </button>
          </td>
        </tr>
        <tr v-else>
          <Spinner />
        </tr>
      </tbody>
    </table>
  </center>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import AddProducts from "../components/AddProducts.vue";
import AddUser from "../components/AddUser.vue";
import UpdateProducts from '../components/UpdateProducts.vue'
export default {
  components: {
    Spinner,
    AddProducts,
    AddUser,
    UpdateProducts
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    product() {
      return this.$store.state.product;
    },
    products(){
      return this.$store.state.products
    },
    user(){
      return this.$store.state.user
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
    this.$store.dispatch("fetchUsers");
  },
  methods: {
    remveProduct(prodID) {
      console.log("deleted...");
      this.$store.dispatch("removeProduct", prodID);
      setTimeout(() => {
        location.reload();
      }, 500);
    },
    async remveUser(id) {
      console.log("deleted...");
      try {
        await this.$store.dispatch("deleteUser", id);
      } catch (e) {
        console.error("An error occured: ", e);
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 7rem;
}

.edit {
  margin-right: 5px;
  width: 3rem;
  border-radius: 5px;
  background-color: rgb(210, 205, 205);
}

.del {
  width: 4rem;
  border-radius: 5px;
  background-color: rgb(255, 129, 129);
}



table {
  border: 1px solid black;
  width: 90%;
}

.dropdown{
  float: left;
}
.dropdown1{
  float: right;
}
</style>