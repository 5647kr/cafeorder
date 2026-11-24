import { create } from "zustand";

interface UseOrderStore {
  order: Order;
  handleOrder: (name: string, value: string) => void;
  handleOrderMenu: (value: OrderMenu) => void;
  orderClear: () => void;
}

const useOrderStore = create<UseOrderStore>((set) => ({
  order: {
    orderType: "",
    orderMenu: [],
    totalPrice: 0,
    orderId: "",
  },

  handleOrder: (name, value) => {
    set((state) => ({
      order: { ...state.order, [name]: value },
    }));
  },

  handleOrderMenu: (value) =>
    set((state) => ({
      order: { ...state.order, orderMenu: [...state.order.orderMenu, value] },
    })),

  orderClear: () =>
    set({
      order: {
        orderType: "",
        orderMenu: [],
        totalPrice: 0,
        orderId: "",
      },
    }),
}));

export default useOrderStore;
