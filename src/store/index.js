import { createStore } from 'vuex'

export default createStore({
  // Con require podemos cargar nuestras imágenes a partir de la store de vuex
  state: {
    titleApp: "Carrito",
    products: [
      {
        id: 1,
        name: "Sofá",
        descripcion: "Chaiselongue, Gunnared gris.",
        image: require('@/assets/images/sillon1.png'),
        price: 340,
      },

      {
        id: 2,
        name: "Cómoda",
        descripcion: "Cómoda de 6 cajones, color blanco 82x126 cm.",
        image: require('@/assets/images/comoda.png'),
        price: 185,
      },

      {
        id: 3,
        name: "Escritorio",
        descripcion: "Escritorio para el hogar, beige 140x60 cm.",
        image: require('@/assets/images/escritorio1.png'),
        price: 169,
      }
    ],
    cliente: {
      nombre: "Nombre",
      apellido: "Apellido",
      direccion: "Calle del cliente"
    },
    StoreCart: [],
    total: [],
  },
  getters: {
    products: (state) => state.products,
    StoreCart: (state) => state.StoreCart,
    total: (state) => state.total,
    cliente: (state) => state.cliente
  },
  mutations: {
    ADD_Item(state, id) {
      state.StoreCart.push(id);
    },

    REMOVE_Item(state, index) {
      state.StoreCart.splice(index, 1);
    },

    SUMAR_Precio(state, price) {
      state.total.push(price);
    },

    RESTAR_Precio(state, index) {
      state.total.splice(index, 1);
    }
  },
  actions: {
    addItem(context, id) {
      context.commit("ADD_Item", id);
    },

    removeItem(context, index) {
      context.commit("REMOVE_Item", index);
    },

    sumarPrecio(context, price) {
      context.commit("SUMAR_Precio", price);
    },

    restarPrecio(context, index) {
      context.commit("RESTAR_Precio", index);
    }
  },
  modules: {},

})
