import { Careers } from "@/utils/types";
import { create } from "zustand";

type Store = {
  setCareers: (value: Careers) => void;
  careers: Careers;
};

type Loading = {
  setLoading: (value: boolean) => void;
  loading: boolean;
};

export const useCareerStore = create<Store>((set) => ({
  careers: [],
  setCareers: (careers: Careers) => set({ careers }),
}));

export const useLoadingCareerStore = create<Loading>((set) => ({
  loading: true,
  setLoading: (loading: boolean) => set({ loading }),
}));
