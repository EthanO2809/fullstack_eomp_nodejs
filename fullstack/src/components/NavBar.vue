<template>
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"><img src="https://i.postimg.cc/SKnDPNnc/Screenshot-2023-08-21-095136-removebg-preview.png" loading="lazy" alt="logo" class="logo"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products">Products</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin">Admin</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn search" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
    export default {
      
    }
  </script>
  
  <style scoped>
  
  .logo{
    width: 7rem;
  }
  
  .nav-item{
    margin-left: 1rem;
  }
  .navbar{
    background-color: grey !important;
    color: black !important;
  }
  a:hover{
    color: white !important;
  }
  
  </style>