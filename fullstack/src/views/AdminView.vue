<template>
    <div>
<h1>Users Table</h1>
<br>
<table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Email Address</th>
            <th>Profile Image</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody v-for="user in users" :key="user">
        <tr v-if="users">
            
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.emailAdd }}</td>
            <td><img :src="user.userProfile" :alt="user.firstName" loading="lazy" class="img-fluid image"></td>
            <td><button class="edit">edit</button><button class="del">delete</button></td> 
        </tr>
        <tr v-else>
            <Spinner/>
        </tr>
    </tbody>
</table>

<h1>Products Table</h1>
<AddProducts/>
<table class="table">
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
    <tbody v-for="product in product" :key="product">
      <tr v-if="product">
        <td>{{ product.prodID }}</td>
        <td>{{ product.prodName }}</td>
        <td>{{ product.quantity }}</td>
        <td>R {{ product.amount }}</td>
        <td>{{ product.Category }}</td>
        <td><img :src="product.prodUrl" :alt="product.prodName" class="img-fluid image" loading="lazy"></td>
        <td><button class="edit">edit</button><button class="del">delete</button></td>
      </tr>
      <tr v-else>
        <Spinner/>
      </tr>
    </tbody>
  </table>
    </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import AddProducts from '../components/AddProducts.vue'
    export default {
        components:{
            Spinner,
            AddProducts
        },
        computed: {
        users() {
            return this.$store.state.users
        },
        product() {
            return this.$store.state.product
        }
    },
    mounted() {
        this.$store.dispatch('fetchProduct')
        this.$store.dispatch('fetchUsers')
    },
    }
</script>

<style scoped>

img{
   width: 7rem;
}

.edit{
    margin-right: 5px;
    width: 3rem;
    border-radius: 5px;
    background-color: rgb(210, 205, 205);
}

.del{
    width: 4rem; 
    border-radius: 5px;
    background-color: rgb(255, 129, 129);
}
</style>