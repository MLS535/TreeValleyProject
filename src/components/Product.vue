<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <img v-bind:src="image" class="card-img-top" alt="..." style="width: 250px">
        <div class="card-body">
          <h5 class="card-title">{{ name }}</h5>
          <p class="card-text">{{ descripcion }}</p>
          <div class="d-flex flex-row justify-content-between">
            <h3 class="text-muted text-start">{{ price }} €</h3>
            <div class="btn btn-primary" @click="addItem(id)">Añadir</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["id", "name", "descripcion", "image", "price"],
  methods: {
    addItem(id) {
      this.$store.dispatch("addItem", id);
    }
  }
}
</script>

<style>

</style>