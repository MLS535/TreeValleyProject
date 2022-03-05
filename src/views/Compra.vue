<template>

  <div class="container">
    <h1>Factura de la compra</h1>
    <hr>

    <h3>Cliente:</h3>
    <div>{{ cliente }}</div>

    <h3 class="mt-3">Productos comprados:</h3>
    <div>{{ carrito }}</div>

    <hr>
    <h3>Total: {{ total }} €</h3>

  </div>
  

</template>

<script>
// import ListShopping from "../components/ListShopping";
export default {
  computed: {
    cliente() {
      return this.$store.getters.cliente;
    },
    carrito() {
      return this.$store.getters.StoreCart;
    },
    precios() {
      return this.$store.getters.total
    },
    total: function () {
      var sum = 0;
      this.precios.forEach(e => {
          sum += e;
      });
      return sum;
    },
  },
  data() {
    return {
      name: 'Compra',
    }
  }
}
</script>

<style>

</style>