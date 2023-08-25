<template>
  <div class="home">
    <div class="container-fluid g-0">
      <div class="background">
        <div class="bg">
          <br />
          <h1 class="title">Sole Cartel</h1>
          <br />
          <h1 class="title">"Unlock Your Style, Step by Step."</h1>
        </div>
      </div>
      <div class="pro">
        <h1 class="feature">Featured Products:</h1>
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="card card-grid1">
                <a href="/products" class="card1">
                  <div
                    class="card__bg1"
                    style="
                      background-image: url(https://i.postimg.cc/vH3XgW5Y/nike-air-max-90-2899.webp);
                    "
                  ></div>
                  <div class="card__content1">
                    <h3 class="card__heading1 text-white"></h3>
                  </div>
                </a>
                <a href="/products" class="card1">
                  <div
                    class="card__bg1"
                    style="
                      background-image: url(https://i.postimg.cc/7hMVHzn2/nike-sb-dunk-low-2099.webp);
                    "
                  ></div>
                  <div class="card__content1">
                    <h3 class="card__heading1 text-white"></h3>
                  </div>
                </a>
                <a href="/products" class="card1">
                  <div
                    class="card__bg1"
                    style="
                      background-image: url(https://i.postimg.cc/WzgnQyBP/mercurial-superfly.webp);
                    "
                  ></div>
                  <div class="card__content1">
                    <h3 class="card__heading1 text-white"></h3>
                  </div>
                </a>
                <a href="/products" class="card1">
                  <div
                    class="card__bg1"
                    style="
                      background-image: url(https://i.postimg.cc/GtVMtDB3/nike-mercurial-1899.jpg);
                    "
                  ></div>
                  <div class="card__content1">
                    <h3 class="card__heading1 text-white"></h3>
                  </div>
                </a>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  color: white;
  text-shadow: 4px 4px rgb(129, 126, 126);
}

.bg {
  float: right;
  margin-left: 2rem;
  margin-top: 2rem;
}

.home {
  height: max-content;
}
.background {
  background-image: url("https://i.postimg.cc/bvzJDb8R/hermes-rivera-OX-en7-CXMj4-unsplash.jpg");
  height: 110vh;
  background-repeat: no-repeat;
  background-size: cover;
  object-position: center center;
  object-fit: cover;
}

.card1 {
  list-style: none;
  position: relative;
  transition: all 0.5s ease-out;
}

.pro {
  background-color: grey;
}

.card-grid1 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  width: 100%;
}
.card__bg1 {
  position: relative;
  height: 50vh;
  min-width: 250px;
  background-size: cover;
  background-position: center center;
  border-radius: 1rem;
  overflow: hidden;
  transform: scale(1);
  transition: all 0.5s ease-out;
}

.card__content1 {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}
.card__category1 {
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: #acacac;
}
.card1:hover {
  transform: scale(1.02);
  filter: drop-shadow(0px 0px 100px #acacac);
}
.card-grid1:hover > .card1:not(:hover).card1 {
  filter: brightness(0.8) grayscale(0.6) contrast(1.2) blur(10px);
}

.card {
  width: 100%;
  border: none;
}

.card {
  background-color: transparent;
}
.img {
  border-radius: 10px;
  width: 50%;
}

h1 {
  color: white;
  text-shadow: 1.5px 1.5px rgb(196, 195, 195);
  padding: 1rem;
}

@media (max-width: 1200px) {
  .card-grid1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    width: 100%;
  }
}
@media (max-width: 600px) {
  .card-grid1 {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    width: 100%;
  }
}
</style>