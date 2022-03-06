<template>
  
  <form id="formu" @submit.prevent="submitForm">
    <fieldset>
      <legend>Datos de cliente</legend>

      <div class="row align-items-start">
        <div class="mb-3 col-6">
          <label for="nombre" class="form-label">Nombre</label>
          <input class="form-control" v-model="cliente.nombre" type="text" required> 
        </div>

        <div class="mb-3 col-6">
          <label for="apellido" class="form-label">Apellido</label>
          <input class="form-control" v-model="cliente.apellido" type="text" required> 
        </div>
      </div>

      <div class="row align-items-start">
        <div class="mb-3 col-6">
          <label for="direccion" class="form-label">Dirección</label>
          <input class="form-control" v-model="cliente.direccion" type="text" required> 
        </div>

        <div class="mb-3 col-6">
          <button v-if="checkout" class="btn btn-primary mt-4" @click="submitForm(cliente)"><router-link class="nav-link text-white" to="/compra">Realizar pedido</router-link></button>
          <button v-if="!checkout" class="btn btn-outline-secondary mt-4" disabled>Realizar pedido</button>
        </div>
        
        <div v-if="!checkout" class="text-danger">¡Vaya, tu cesta de compra está vacía! Vuelve a añadir productos para poder realizar tu pedido.</div>

      </div>
    </fieldset>
  </form>
  
  
</template>

<script>
export default {
  name: "FormClient",
  data() {
    return {
      cliente: {
        nombre: '',
        apellido: '',
        direccion: '',
      }
    }
  },
  computed: {
    checkout() { 
      return this.$store.getters.checkout;
    },
  },
  methods: {
    submitForm(cliente) {
      let cli = {
      nombre: this.nombre,
      apellido: this.apellido,
      direccion: this.direccion
      }
      this.cliente = cli;
      this.$store.dispatch("registrarCliente", cliente);
    }
  }
}
</script>

<style scoped>
btn-primary {
  background-color: #1bb5ac;
  border: #1bb5ac;
}

</style>