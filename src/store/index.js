import { createStore } from 'vuex'

export default createStore({
  // Con require podemos cargar nuestras imágenes a partir de la store de vuex
  state: {
    titleApp: "Carrito",
    products: [
      {
        id: 1,
        name: "Mueble 1",
        descripcion: "Poner una descripción 1",
        image: require('@/assets/images/sillon1.png'),
        price: 340,
      },

      {
        id: 2,
        name: "Mueble 2",
        descripcion: "Poner una descripción 2",
        image: require('@/assets/images/comoda.png'),
        price: 340,
      },

      {
        id: 3,
        name: "Mueble 3",
        descripcion: "Poner una descripción 3",
        image: require('@/assets/images/escritorio1.png'),
        price: 340,
      },

      {
        id: 4,
        name: "Mueble 4",
        descripcion: "Poner una descripción 4",
        image: require('@/assets/images/armario.png'),
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
