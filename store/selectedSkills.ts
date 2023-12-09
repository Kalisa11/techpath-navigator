import { create } from "zustand";

type Store = {
  setSelectedSkills: (value: string[]) => void;
  selectedSkills: string[];
};

export const useSelectSkillStore = create<Store>((set) => ({
  selectedSkills: [],
  setSelectedSkills: (selectedSkills: string[]) => set({ selectedSkills }),
}));
