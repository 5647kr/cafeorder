import { create } from "zustand";

interface UseCategoryStore {
  category: string;
  handleCategory: (value: string) => void;
}

const useCategoryStore = create<UseCategoryStore>((set) => ({
  category: "커피",
  handleCategory: (value) => set({ category: value }),
}));

export default useCategoryStore;
