<template>

  <section class="h-100 gradient-custom home fontbody text-black-50">
    <div class="container py-2">
      <div class="row d-flex justify-content-center my-4">
        <div class="col-md-8">
          <div class="card mb-4">
            <div class="card-body">

              <div class="row" v-for="product in products" :key="product.id">

                <div class="col-lg-3 col-md-12 mb-4 mb-lg-0" >
                    <img v-bind:src="product.image" class="w-100" alt="Mueble"/>
                </div>

                <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                  <h3 class="h3color"><strong>{{ product.name }}</strong></h3>
                  <p class="font-custom">{{ product.descripcion }}</p>
                  <p class="font-custom"> <strong>Precio: {{ product.price }} €</strong></p>
                </div>

                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  <div class="d-flex mb-4" style="max-width: 300px">
                    <button class="btn btn-primary px-3 me-2" @click="addItem(product.id), sumarPrecio(product.price), mostrarCheckout()">
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
            <button v-if="checkout" type="button" class="btn btn-primary btn-lg btn-block">
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
    },
    StoreCart() {
      return this.$store.getters.StoreCart;
    },
    checkout() { 
      return this.$store.getters.checkout;
    },
  },
  methods: {
    addItem(id) {
      this.$store.dispatch("addItem", id);
    },
    sumarPrecio(id) {
      this.$store.dispatch("sumarPrecio", id);
    },
    mostrarCheckout() {
      this.$store.dispatch("mostrarCheckout");
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
button{
  background-color: #1bb5ac;
  border: #1bb5ac;
}
.font-custom{
  font-size: 0.8rem;
}
</style>