<template>
    <div class="footer">
        <div class="container">
    <div class="row justify-content-center">
        <div class="col-sm-4 col-md-3 item">
            <img src="https://i.postimg.cc/SKnDPNnc/Screenshot-2023-08-21-095136-removebg-preview.png" loading="lazy" alt="logo" class="logo img-fluid">
        </div>
        <div class="col-sm-4 col-md-3 item">
            <h3>Services</h3>
            <br>
            <ul>
                <li><a href="/products">Products</a></li><br>
                <li><a href="./html/test.html">Help</a></li><br>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div class="col-sm-4 col-md-3 item">
            <h3>About Us</h3>
            <br>
            <ul>
                <li><a href="/about">Company</a></li><br>
                <li><a href="#">Team</a></li>
            </ul>
        </div>
        <div class="col-sm-4 col-md-3 item">
            <h3>Contact Us</h3>
            <ul>
                <li>Address: <br>
                  47 Toner Street <br>
                  Cape Town <br>
                  7500
                </li><br>
                <li>Phone number: 021 970 1470</li><br>
                <li>Our Email: SoleCartel@gmail.com</li>
            </ul>
        </div>
        <hr>
        <div class="conatiner">
            <div class="footer-social-icon">
                <span>Follow us</span>
                <br>
                <a href="https://www.facebook.com/pottersworkCT/" id="media" target="_blank"><img src="https://i.postimg.cc/QMwWNNN2/icons8-facebook-150.png" loading="lazy" alt="facebook" class="facebook"></a>
                <a href="https://www.instagram.com/potterswork/"  id="media" target="_blank"><img src="https://i.postimg.cc/gcRBWnkP/icons8-instagram-150.png" loading="lazy" alt="instagram" class="instagram"></a>
                <a href="https://twitter.com/LaiquahC" target="_blank" id="media"><img src="https://i.postimg.cc/63bF9JwS/icons8-twitter-150.png" loading="lazy" alt="twitter" class="twitter"></a> <br>
            </div>
            <div class="copyright">
                <p class="copyright">Sole Cartel © 2023</p>
            </div>
        </div>
    </div>
</div>

    </div>
        
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.footer {
    padding:50px 0;
    background-color:grey !important;
    color:black !important;
  }

  .footer-social-icon{
    float: right;
  }
  
  #media{
    margin:5px;
  }

  .footer h3 {
    margin-top:0;
    margin-bottom:12px;
    font-weight:bold;
    font-size:16px;
  }
  
  .footer ul {
    padding:0;
    list-style:none;
    line-height:1.6;
    font-size:14px;
    margin-bottom:0;
  }
  .logo{
    width: 20rem;
  }

  .item{
    padding: 1rem;
  }
  
  .footer ul a {
    color: black !important;
    text-decoration:none;
    opacity:0.8;
  }
  
  .footer ul a:hover {
    opacity:1;
    color: rgb(200, 199, 199) !important;
  }
  
  .copyright {
    color: black !important;
    display: inline-flex !important;
    justify-content: center !important;
    align-items: center !important;
    text-align: center !important;
    float: left;
  }

 .instagram{
    width: 2rem;
 }

 .facebook{
    width: 2rem;
 }

 .twitter{
  width: 2rem;
 }
  
</style>