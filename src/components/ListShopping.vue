<template>
  <div class="accordion">
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingOne">
<!--  <div class="card-header py-3" id="show" @click="showList(id)">-->
<!--    <h5 class="mb-0">{{ cartCount }} items</h5>-->
<!--  </div>-->
        <button class="accordion-button bg-white py-3" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne" id="show" @click="showList(id)">
           <span> {{ " " +cartCount +" " }}  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">-->
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
        </svg></span>
        </button>
      </h2>
      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
  <div class="accordion-body" >
    <ul class="list-group list-group-flush" v-for="(item, index) in cart" :key="index">
      <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
        <p><img :src="item.image" alt style="width: 50px"/></p>
        <p><strong>{{ item.name }}</strong></p>
        <p><strong>Precio: {{ item.price + ' €'}}</strong></p>
        <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                title="Remove item" @click="removeItem(index), restarPrecio(index), mostrarCheckout()">Eliminar
                <!-- Aquí no funciona mostrarCheckout -->
        </button>
      </li>
    </ul>
    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
      <div>
        <strong>Cantidad total</strong>
        <strong>
          <p class="mb-0">(con IVA)</p>
        </strong>
      </div>
      <h3><strong>{{ total }} €</strong></h3> <!-- Mostrar suma con el precio total -->
    </li>
    
  </div>
      </div>
      </div>
      </div>
</template>

<script>
export default {
  name: "ListShopping",
  computed: {
    StoreCart() {
      return this.$store.getters.StoreCart;
    },
    cartCount() {
      return this.StoreCart.length;
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
      return sum
    }
    
  },
  methods: {
    removeItem(index) {
      this.$store.dispatch("removeItem", index);
    },
    restarPrecio(index) {
      this.$store.dispatch("restarPrecio", index);
    },
    mostrarCheckout() { // Aquí no funciona porque la propiedad de checkout está en shop. Arreglar en un rato
      if (this.cartCount > 0) {
        this.checkout = true;
      } else {
        this.checkout = false;
      }
    }
  }
}
</script>

<style scoped>
button{
  background-color: #1bb5ac;
  border: #1bb5ac;
}
svg{
  color: #1bb5ac;
}
span{
  color: #1bb5ac;
}
</style>