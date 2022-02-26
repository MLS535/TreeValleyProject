<template>
  <!-- ACCORDEON-->
  <!--  <div class="blog fontbody text-black-50">-->

  <div class="container my-5">
    <Product
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :descripcion="product.descripcion"
      :image="product.image"
      :price="product.price"
  />
    
  </div>


</template>

<script>
import Product from '../components/Product.vue'

// import ListShopping from "../components/ListShopping";
export default {
  components: { Product },
  computed: {
    products() {
      return this.$store.getters.products;
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

</style>