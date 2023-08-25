<template>
  <div>
   
    <h1>Users Table</h1>
    <AddUser />
    <center>
      <div class="table-responsive">
    <table class="table table-bordered border-black text-center" >
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
          <UpdateUser :user="user"/>  
            <button class="del" @click="deleteUser(user.UserID)">delete</button>
          </td>
        </tr>
        <tr v-else>
          <Spinner />
        </tr>
      </tbody>
    </table>
  </div>
  </center>
  <br>

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
  <div class="sort-dropdown">
    <button class="btn" @click="refresh">Refresh</button>
    <button class="btn1" @click="toggleSortDirection">
      Filter by: {{ sort === "asc" ? "ascending" : "descending " }}
    </button>
  </div>
    <h1>Products Table</h1>
    <AddProducts />
    <center>
      <div class="table-responsive">
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
      <tbody v-for="product in filteredProducts" :key="product.prodID">
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
  </div>
  </center>
  </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import AddProducts from "../components/AddProducts.vue";
import AddUser from "../components/AddUser.vue";
import UpdateProducts from '../components/UpdateProducts.vue'
import UpdateUser from '../components/UpdateUser.vue'
export default {
  components: {
    Spinner,
    AddProducts,
    AddUser,
    UpdateProducts,
    UpdateUser
  },
  data() {
    return {
      sort: "",
      sortBy: "id",
      sortMode: "prodID",
    };
  },
  computed: {
    users() {
      return this.$store.state.users || [];
    },
    products() {
      return this.$store.state.products || [];
    },
    product() {
      return this.$store.state.product || [];
    },
    user() {
      return this.$store.state.user || [];
    },
    filteredProducts() {
      let filtered = [...this.products];
      if (this.sortBy === "name") {
        filtered = filtered.sort(
          (a, b) =>
            a.prodName.localeCompare(b.prodName) *
            (this.sort === "asc" ? 1 : -1)
        );
      } else if (this.sortBy === "id") {
        filtered = filtered.sort(
          (a, b) => (this.sort === "asc" ? 1 : -1) * (a.prodID - b.prodID)
        );
      }
      return filtered;
    },
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
    refresh() {
      this.sortBy = "id";
    },
    toggleSortDirection() {
      console.log("reached");
      this.sortBy = 'name'
      this.sort = this.sort === "asc" ? "desc" : "asc";
    },
    deleteUser(userID) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$store.dispatch("deleteUser", userID);
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 7rem;
}


.del {
  width: 5rem;
  border-radius: 5px;
  background-color: rgb(255, 129, 129);
}

.btn{
  border: 1px solid black;
  margin-bottom: 7px;
}
.btn1{
  float: right;
  border: 1px solid black !important;
  margin-bottom: 7px !important;
  border-radius: 5px;
  height: 2rem;
  margin-top: 1rem;
  background-color: white;
  color: black;
}
.btn:hover{
color: rgb(126, 126, 126);
}
.btn1:hover{
color: rgb(126, 126, 126);
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