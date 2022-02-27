<template>

  <!--  <div class="container d-flex  ">-->
  <!--  <div class="container">-->
  <!--    <div class="row cards">-->
  <!--      <div class="col-lg-2 order-1 mt-3  blogaccordeon ">-->
  <!--      -->
  <!--      </div>-->

  <!--      </div>-->


<!--        <div class="col-5" v-for="product in products"-->
<!--             :key="product.id">-->
<!--          <div class="card m-2">-->
<!--            <img v-bind:src="product.image" class="card-img-top" alt="muebles">-->
<!--            <div class="card-body">-->
<!--              <h5 class="card-title">{{ product.name }}</h5>-->
<!--              <p class="card-text">{{ product.descripcion }}</p>-->
<!--              <div class="d-flex flex-row justify-content-between">-->
<!--                <h3 class="text-muted text-start">{{ product.price }} €</h3>-->
<!--                <div class="btn btn-primary" @click="addItem(product.id)">Añadir</div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->


  <section class="h-100 gradient-custom">
    <div class="container py-2">
      <div class="row d-flex justify-content-center my-4">
        <div class="col-md-8">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Tienda</h5>
            </div>
            <div class="card-body">
              <!-- Single item -->
              <div class="row" v-for="product in products"
                   :key="product.id">
                <div class="col-lg-3 col-md-12 mb-4 mb-lg-0" >
                  <!-- Image -->
                  <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                    <img v-bind:src="product.image"
                         class="w-100" alt="Mueble"/>
                    <a href="#!">
                      <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                    </a>
                  </div>
                  <!-- Image -->
                </div>

                <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                  <!-- Data -->
                  <p><strong>{{ product.name }}</strong></p>
                  <p>{{ product.descripcion }}</p>
                  <p>Precio: {{ product.price }}</p>
                  <!-- Data -->
                </div>

                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  <div class="d-flex mb-4" style="max-width: 300px">
                    <button class="btn btn-primary px-3 me-2"
                            @click="addItem(product.id)">
                      Añadir
                    </button>
                  </div>
                </div>
                <hr class="my-4"/>
              </div>
              <!-- Single item -->




              <!-- Single item -->
            </div>
          </div>


        </div>
        <div class="col-md-4">
          <div class="card mb-4">
            <ListShopping/>
          </div>
        </div>
      </div>
    </div>
  </section>





</template>

<script>
// import Product from '../components/Product.vue'
import ListShopping from "../components/ListShopping";


export default {
  components: {ListShopping},
  computed: {
    products() {
      return this.$store.getters.products;
    }
  },
  methods: {
    addItem(id) {
      this.$store.dispatch ( "addItem", id );
    },
  },
  data() {
    return {
      name: 'Shop',
    }
  }
}
</script>

<style scoped>

</style>