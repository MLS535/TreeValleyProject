<template>
  <div class="btn btn-primary" @click="showList(id)" id="show">{{ cartCount }}</div>
  <div id="shoppingList">
    <div v-for="(item, index) in cart" :key="index">
      <div>{{ item.name }}</div>
      <div>
        <img :src="item.image" alt style="width: 250px"/>
      </div>
      <div>{{ '$' + item.price }}</div>
      <div>
        <div class="btn btn-primary" @click="removeItem(index)">Eliminar</div>
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
    }
  },
  methods: {
    removeItem(index) {
      this.$store.dispatch ( "removeItem", index );
    },
    showList() {
      // var modal = document.getElementById ( "shoppingList" );
      // var btn = document.getElementById ( "show" );
    }
  }
}
</script>

<style scoped>

</style>