<template>
  <!-- ACCORDEON-->
  <div class="blog fontbody text-black-50">

    <div class="container my-5">
      
      <div class="card-group">

        <div class="card m-2" style="min-width: 18rem;">
          <img src="../assets/images/sillon1.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Producto 1</h5>
            <p class="card-text">Descripción del producto 1.</p>
            <div class="d-flex flex-row justify-content-between">
              <h3 class="text-muted text-start">25 €</h3>
              <div class="btn btn-primary">Al carrito</div>
            </div>
          </div>
        </div>

        <div class="card m-2" style="min-width: 18rem;">
          <img src="../assets/images/armario.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Producto 2</h5>
            <p class="card-text">Descripción del producto 2.</p>
            <div class="d-flex flex-row justify-content-between">
              <h3 class="text-muted text-start">25 €</h3>
              <div class="btn btn-primary">Al carrito</div>
            </div>
          </div>
        </div>

        <div class="card m-2" style="min-width: 18rem;">
          <img src="../assets/images/escritorio1.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Producto 3</h5>
            <p class="card-text">Descripción del producto 3.</p>
            <div class="d-flex flex-row justify-content-between">
              <h3 class="text-muted text-start">25 €</h3>
              <div class="btn btn-primary">Al carrito</div>
            </div>
          </div>
        </div>

        <div class="card m-2" style="min-width: 18rem;">
          <img src="../assets/images/comoda.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Producto 4</h5>
            <p class="card-text">Descripción del producto 4.</p>
            <div class="d-flex flex-row justify-content-between">
              <h3 class="text-muted text-start">25 €</h3>
              <div class="btn btn-primary">Al carrito</div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>

  <div class="container p-1 mb-5">
    <div class="row">
      <div class="col">
        <nav aria-label="Just trying things">
          <ul class="pagination justify-content-center h6">
            <li class="page-item">
              <a href="#" class="page-link">First</a>
            </li>
            <li class="page-item sr-only">
              <a href="#" class="page-link">1</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">2</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">3</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">4</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">5</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">6</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">7</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">8</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">9</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">10</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">Last</a>
            </li>
          </ul>

        </nav>
      </div>
    </div>
  </div>
</div>

  <h1>{{$store.state.titleApp}}</h1>
</template>

<script>
export default {
  name: "Shop"
}
</script>

<style scoped>

</style>