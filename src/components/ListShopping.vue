<template>


<!--  <div class="accordion" id="accordionExample">-->
<!--    <div class="accordion-item">-->
<!--      <h2 class="accordion-header" id="headingOne">-->
<!--        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"-->
<!--                id="show" @click="showList(id)">-->
<!--          {{ cartCount }}<span></span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">-->
<!--          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>-->
<!--        </svg>-->
<!--        </button>-->
<!--      </h2>-->
<!--      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" v-for="(item, index) in cart" :key="index">-->
<!--        <div class="accordion-body list" >-->



<!--          <ul >-->
<!--            <li class="list-group-item">  <img :src="item.image" alt style="width: 50px"/> {{ item.name }} {{ item.price + ' €'}}-->
<!--              <div class="btn btn-primary" @click="removeItem(index)">Eliminar</div></li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

<!--  <h4 class="archiveh accordion-header text-center rounded-top p-2">Shopping Cart</h4>-->
<!--  <div class="accordion">-->
<!--    <div class="accordion-item">-->
<!--      <h2 class="accordion-header" id="panelsStayOpen-headingOnee">-->
<!--        <button class="accordion-button bg-white" type="button" data-bs-toggle="collapse"-->
<!--                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"-->
<!--                aria-controls="panelsStayOpen-collapseOne" id="swhow" @click="showList(id)">-->
<!--          {{ cartCount }}<span></span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">&ndash;&gt;-->
<!--                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>-->
<!--                  </svg>-->
<!--        </button>-->
<!--      </h2>-->
<!--      <div id="panelsStayOpen-collapseOnee" class="accordion-collapse collapse show"-->
<!--           aria-labelledby="panelsStayOpen-headingOne">-->
<!--        <div class="accordion-body" v-for="(item, index) in cart" :key="index">-->
<!--          <ul >-->
<!--                        <li class="list-group-item">  <img :src="item.image" alt style="width: 50px"/> {{ item.name }} {{ item.price + ' €'}}-->
<!--                          <div class="btn btn-primary" @click="removeItem(index)">Eliminar</div></li>-->
<!--                      </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->


<!--      <div class="card-header py-3" id="show" @click="showList(id)">-->
<!--        <h5 class="mb-0">{{ cartCount }} items</h5>-->
<!--      </div>-->
<!--      <div class="card-body" >-->
<!--        <ul class="list-group list-group-flush" v-for="(item, index) in cart" :key="index">-->
<!--          <li-->
<!--              class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">-->
<!--            <p> <img :src="item.image" alt style="width: 50px"/></p>-->
<!--            <p><strong>{{ item.name }}</strong></p>-->
<!--            <p>Precio: {{ item.price + ' €'}}</p>-->
<!--            <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"-->
<!--                    title="Remove item" @click="removeItem(index)">Remove-->
<!--            </button>-->
<!--          </li>-->

<!--        </ul>-->
<!--        <li-->
<!--            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">-->
<!--          <div>-->
<!--            <strong>Total amount</strong>-->
<!--            <strong>-->
<!--              <p class="mb-0">(including VAT)</p>-->
<!--            </strong>-->
<!--          </div>-->
<!--          <span><strong>$53.98</strong></span>-->
<!--        </li>-->
<!--        <button type="button" class="btn btn-primary btn-lg btn-block">-->
<!--          Go to checkout-->
<!--        </button>-->
<!--      </div>-->

<!--  <h4 class="archiveh accordion-header text-center rounded-top p-2">Shopping Cart</h4>-->
  <div class="accordion">
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingOne">
<!--  <div class="card-header py-3" id="show" @click="showList(id)">-->
<!--    <h5 class="mb-0">{{ cartCount }} items</h5>-->
<!--  </div>-->
        <button class="accordion-button bg-white py-3" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne" id="show" @click="showList(id)">
          Shopping cart <span> </span> <span> {{ " " +cartCount +" " }}  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">-->
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
        </svg></span>
        </button>
      </h2>
      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
  <div class="accordion-body" >
    <ul class="list-group list-group-flush" v-for="(item, index) in cart" :key="index">
      <li
          class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
        <p> <img :src="item.image" alt style="width: 50px"/></p>
        <p><strong>{{ item.name }}</strong></p>
        <p>Precio: {{ item.price + ' €'}}</p>
        <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                title="Remove item" @click="removeItem(index)">Remove
        </button>
      </li>
<!--      <span><strong>{{ sumPrecios(item.price) }}</strong></span>-->
    </ul>
    <li
        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
      <div>
        <strong>Total amount</strong>
        <strong>
          <p class="mb-0">(including VAT)</p>
        </strong>
      </div>
      <span><strong>Precio</strong></span>
    </li>
    <button type="button" class="btn btn-primary btn-lg btn-block">
      Go to checkout
    </button>
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
    }
  },
  methods: {
    removeItem(index) {
      this.$store.dispatch ( "removeItem", index );
    },

  }
}
</script>

<style scoped>

</style>