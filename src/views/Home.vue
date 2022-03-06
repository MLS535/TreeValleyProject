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
            <img src="../assets/images/sofa.webp" class="d-block w-100" alt="sofa" style="width: 100%; height: 100%" >
            <div class="carousel-caption d-none d-md-block">
              <h2 class="text-uppercase bg-dark">Tree Valley: Muebles para el hogar</h2>

            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/images/objetos.webp" class="d-block w-100" alt="objetos" style="width: 100%; height: 100%">
            <div class="carousel-caption d-none d-md-block">
              <h2 class="text-uppercase bg-dark">Calidad es sinonimo de Tree Valley</h2>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/images/plantas.webp" class="d-block w-100" alt="plantas">
            <div class="carousel-caption d-none d-md-block">
              <h2 class="text-uppercase bg-dark">Configura tu casa a tu gusto</h2>

            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/images/cocina.webp" class="d-block w-100" alt="cocina" style="width: 100%; height: 100%">
            <div class="carousel-caption d-none d-md-block">
              <h2 class="text-uppercase bg-dark">Muebles fabricados en España</h2>
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
    <div class="container d-flex justify-content-around">
      <div class="row  p-0  align-item-center ">
        <div class="col align-self-center  mt-4">
          <router-link class="text-decoration-none"  to="/shop">
          <div class="card border  " style="width: 18rem; height: 100%">
            <img class="card-img-top border-dark" src="../assets/images/espejo.webp" alt="Card image cap">
            <div class="card-body">
              <h3 class="card-title"><strong>Descubre nuestros precios más bajos</strong></h3>
              <p class="card-text text-secondary">Tree Valley hace productos unicos, especiales para gente como tu, la calidad a un solo click.Hazme click y veremos todo los productos disponibles.</p>
            </div>
          </div>
          </router-link>
        </div>
        <div class="col align-self-center mt-4">
          <router-link class="text-decoration-none"  to="/shop">
          <div class="card border " style="width: 18rem; height: 100%">
            <img class="card-img-top border-dark" src="../assets/images/kitchen_1.webp" alt="Card image cap">
            <div class="card-body">
             <h3 class="card-title"> <strong>Organiza tu hogar por muy poco dinero</strong></h3>
              <p class="card-text text-secondary">Revisa nuestros productos que están hechos con sumo mimo para ti y solo para ti. Hazme click y veremos todo los productos disponibles.</p>
            </div>
          </div>
          </router-link>
        </div>

        <div class="col align-self-center  mt-4">
          <router-link class="text-decoration-none"  to="/shop">
          <div class="card border" style="width: 18rem; height: 100%">
            <img class="card-img-top border-dark" src="../assets/images/tv.webp" alt="Card image cap">
            <div class="card-body">
              <h3 class="card-title"><strong>Ideas para organizar todo tu hogar</strong></h3>
              <p class="card-text text-secondary">¿Te gusta lo que ves? Entra y revisa todo lo que tenemos disponible en nuestra tienda. Hazme click y veremos todo los productos disponibles.</p>
            </div>
          </div>
          </router-link>
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
<style scoped>
.card{
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  cursor: pointer;
}

.card:hover{
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}




</style>