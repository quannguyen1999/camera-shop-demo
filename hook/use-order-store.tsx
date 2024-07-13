import { create } from "zustand";

interface ProductModal {
  id: string;
  name: string;
  imageUrl: string;
  quantity: number;
  price: number;
}

interface Profile {
  id?: string;
  userId?: string;
  name?: string;
  email?: string;
}

interface Order {
  products?: ProductModal[];
  profile?: Profile;
  totalMoney?: number;
}

interface ModalStore {
  data: Order;
  setOrder: (data: Order) => void;
}

export const useOrderStore = create<ModalStore>((set) => ({
  data: {
    products: [],
    profile: {},
    totalMoney: 0
  },
  setOrder: (data) => set({ data: data }),
}));
