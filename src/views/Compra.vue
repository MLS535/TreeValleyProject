<template>

  <div class="container">
    <h1>Factura de la compra</h1>
    <hr>

    <h3>Cliente:</h3>
    
    <div>Nombre: {{ cliente.nombre }}</div>
    <div>Apellido: {{ cliente.apellido }}</div>
    <div>Dirección: {{ cliente.direccion }}</div>

    <h3 class="mt-3">Productos comprados:</h3>
    <div class="accordion-body" >
    <ul class="list-group list-group-flush" v-for="(item, index) in cart" :key="index">
      <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
        <p><strong>{{ item.name }}</strong></p>
        <p>{{ item.descripcion }}</p>
        <p>{{ item.price }} €</p>
      </li>
    </ul>
    
    
  </div>

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
    cart() {
      return this.$store.getters.StoreCart.map ( cartitems => {
        return this.$store.getters.products.find ( itemForSale => {
          return cartitems === itemForSale.id;
        } );
      } );
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