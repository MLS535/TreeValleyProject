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
    cliente: '',
    StoreCart: [],
    total: [],
    checkout: false,
  },
  getters: {
    products: (state) => state.products,
    StoreCart: (state) => state.StoreCart,
    total: (state) => state.total,
    cliente: (state) => state.cliente,
    checkout: (state) => state.checkout,
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
    },

    REGISTRAR_Cliente(state, cli) {
      state.cliente = cli;
    },

    MOSTRAR_Checkout(state) {
      if (state.StoreCart.length > 0) {
        state.checkout = true;
      } else {
        state.checkout = false;
      }
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
    },

    registrarCliente(context, cli) {
      context.commit("REGISTRAR_Cliente", cli);
    },

    mostrarCheckout(context) {
      context.commit("MOSTRAR_Checkout");
    }
  },
  modules: {},

})
