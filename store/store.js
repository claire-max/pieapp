import create from "zustand";

export const useStore = create(
    (set) => ({

        // cart 
        cart: {
            pizzas: [],
            quantity: 0,
            total: 0,

        },

    // Add Pizza
        addPizza: (data) =>
      set((state) => ({
        cart: {
          pizzas: [...state.cart.pizzas, data],
        },

    })),

    // // Remove Pizza
    // removePizza: (index) =>
    // set((state) => ({
    //   cart: 
    //   { pizzas: state.cart.pizzas.filter((_, i) => i != index) 
    //   },
    // })),
   
    // // Reset Cart
    // resetCart: () =>
    // set(() => ({
    //   cart: {
    //     pizzas: [],
    //     quantity: 0,
    //     total: 0,
    //   },
    // })),

})

)