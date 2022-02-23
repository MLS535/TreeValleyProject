import { createStore } from 'vuex'

export default createStore({
  state: {
    titleApp: "Carrito",
    products: [
      {
        id: 0,
        name: "Mueble 0",
        image:
            "https://www.ikea.com/es/es/images/products/kransborre-cojin-rosa-claro__0920477_pe787064_s5.jpg?f=s",
        price: 340,
      },
      {
        id: 1,
        name: "Mueble 1",
        image:
            "https://www.ikea.com/es/es/images/products/kransborre-cojin-rosa-claro__0920477_pe787064_s5.jpg?f=s",
        price: 340,
      },

      {
        id: 2,
        name: "Mueble 2",
        image:
            "https://www.ikea.com/es/es/images/products/kransborre-cojin-rosa-claro__0920477_pe787064_s5.jpg?f=s",
        price: 340,
      },

      {
        id: 3,
        name: "Mueble 3",
        image:
            "https://www.ikea.com/es/es/images/products/kransborre-cojin-rosa-claro__0920477_pe787064_s5.jpg?f=s",
        price: 340,
      },

      {
        id: 4,
        name: "Mueble 4",
        image:
            "https://www.ikea.com/es/es/images/products/kransborre-cojin-rosa-claro__0920477_pe787064_s5.jpg?f=s",
        price: 340,
      },
    ],
    StoreCart: [],
  },
  getters: {
    products: (state) => state.products,
    StoreCart: (state) => state.StoreCart,
  },
  mutations: {
    ADD_Item(state, id) {
      state.StoreCart.push(id);
    },

    REMOVE_Item(state, index) {
      state.StoreCart.splice(index, 1);
    },
  },
  actions: {
    addItem(context, id) {
      context.commit("ADD_Item", id);
    },

    removeItem(context, index) {
      context.commit("REMOVE_Item", index);
    },
  },
  modules: {},

})
