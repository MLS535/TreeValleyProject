<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6">
        <list-shopping/>
      </div>
      <div class="col-12 col-lg-6 mt-3">
        <form-client/>
      </div>
    </div>
    
  </div>
  
</template>

<script>
import FormClient from '../components/FormClient.vue';
import ListShopping from "../components/ListShopping";
export default {
  components: {
    ListShopping, FormClient
  },
  data() {
    return {
      name: 'Checkout',
    }
  }
}
</script>

<style>

</style>