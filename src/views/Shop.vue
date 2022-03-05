<template>

  <section class="h-100 gradient-custom home fontbody text-black-50">
    <div class="container py-2">
      <div class="row d-flex justify-content-center my-4">
        <div class="col-md-8">
          <div class="card mb-4">
            <div class="card-body">

              <div class="row" v-for="product in products" :key="product.id">

                <!-- <div class="col-12 col-md-6 col-xl-4">
                  <div class="card m-2">
                    <img v-bind:src="image" class="card-img-top" alt="..." style="min-width: 18rem">
                    <div class="card-body">
                      <h5 class="card-title">{{ name }}</h5>
                      <p class="card-text">{{ descripcion }}</p>
                      <div class="d-flex flex-row justify-content-between">
                        <h3 class="text-muted text-start">{{ price }} €</h3>
                        <div class="btn btn-primary" @click="addItem(id)">Añadir</div>
                      </div>
                    </div>
                  </div>
                </div> -->

                <div class="col-lg-3 col-md-12 mb-4 mb-lg-0" >
                    <img v-bind:src="product.image" class="w-100" alt="Mueble"/>
                </div>

                <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                  <p><strong>{{ product.name }}</strong></p>
                  <p>{{ product.descripcion }}</p>
                  <p>Precio: {{ product.price }} €</p>
                </div>

                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  <div class="d-flex mb-4" style="max-width: 300px">
                    <button class="btn btn-primary px-3 me-2" @click="addItem(product.id), sumarPrecio(product.price)">
                      Añadir
                    </button>
                  </div>
                </div>

                <hr class="my-4"/>

              </div>

            </div>
          </div>

        </div>
        <div class="col-md-4">
          <div class="card mb-4">
            <ListShopping/>
            <button type="button" class="btn btn-primary btn-lg btn-block">
              <router-link class="nav-link text-white" to="/checkout">Ir al checkout</router-link>
            </button>
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
      this.$store.dispatch("addItem", id);
    },
    sumarPrecio(id) {
      this.$store.dispatch("sumarPrecio", id);
    }
  },
  data() {
    return {
      name: 'Shop',
    }
  }
}
</script>

<style scoped>
button{
  background-color: #1bb5ac;
  border: #1bb5ac;
}
</style>