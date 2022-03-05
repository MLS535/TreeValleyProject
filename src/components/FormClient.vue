<template>

  <fieldset>
    <legend>Datos de cliente</legend>
    <div class="row align-items-start">
      <div class="mb-3 col-6">
        <label for="nombre" class="form-label">Nombre</label>
        <input class="form-control" name="nombre" id="nombre" required> 
      </div>

      <div class="mb-3 col-6">
        <label for="apellido" class="form-label">Apellido</label>
        <input class="form-control" name="apellido" id="apellido" required> 
      </div>
    </div>

    <div class="row align-items-start">
      <div class="mb-3 col-6">
        <label for="direccion" class="form-label">Dirección</label>
        <input class="form-control" name="direccion" id="direccion" required> 
      </div>

      <div class="mb-3 col-6">
        <button type="button" class="btn btn-primary mt-4">
          <router-link class="nav-link text-white" to="/compra">Realizar pedido</router-link>
        </button> 
      </div>
    </div>
  </fieldset>
  
</template>

<script>
export default {
  name: "FormClient"
}
</script>

<style scoped>
button{
  background-color: #1bb5ac;
  border: #1bb5ac;
}
</style>