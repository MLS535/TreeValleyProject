<template>
  <!-- ACCORDEON-->
  <!--  <div class="blog fontbody text-black-50">-->

  <div class="container my-5">

    <div class="row">
      <div class="col">
        <div class="card">
          <img :src="image" class="card-img-top" alt="..." style="width: 250px">
          <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">Descripción del producto 1.</p>
            <div class="d-flex flex-row justify-content-between">
              <h3 class="text-muted text-start">{{  `${price}€` }}</h3>
              <div class="btn btn-primary" @click="addItem(id)">Añadir</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




</template>

<script>

// import ListShopping from "../components/ListShopping";
export default {
  name: "Shop",
  // components: {ListShopping},
  props: ["id", "name", "image", "price"],
  methods: {
    addItem(id) {
      this.$store.dispatch("addItem", id);
    }
  }
}
</script>

<style scoped>

</style>