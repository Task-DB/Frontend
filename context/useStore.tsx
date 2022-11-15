import create from "zustand";
import { UseStoreType } from "./interface";

const useStore = create<UseStoreType>((set) => ({
  active: [true, false, false],
  setActive: (input: boolean[]) => set({ active: input }),
}));

export default useStore;
