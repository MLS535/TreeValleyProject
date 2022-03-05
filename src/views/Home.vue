<template>
  <div class="home fontbody text-black-50">
    <div class="container">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                  aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/images/sofa.webp" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5 class="text-uppercase">Tree Valley: Muebles para el hogar</h5>

            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/images/objetos.webp" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5 class="text-uppercase">Calidad es sinonimo de Tree Valley</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/images/plantas.webp" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5 class="text-uppercase">Configura tu casa a tu gusto</h5>

            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/images/cocina.webp" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5 class="text-uppercase">Muebles fabricados en España</h5>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!--HOME -->
    <div class="container d-flex justify-content-around mt-4">
      <div class="row m-0 p-0  align-item-center ">
        <div class="col align-self-center">
          <div class="card border  " style="width: 18rem;">
            <img class="card-img-top border-dark" src="../assets/images/cocina.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Descubre nuestros precios más bajos</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col align-self-center">
          <div class="card border " style="width: 18rem;">
            <img class="card-img-top border-dark" src="../assets/images/cocina.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Organiza tu hogar por muy poco dinero</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col align-self-center">
          <div class="card border " style="width: 18rem;">
            <img class="card-img-top border-dark" src="../assets/images/cocina.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Ideas para organizar todo tu hogar</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
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
      name: 'Home',
    }
  }
}

</script>
