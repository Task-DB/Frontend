import create from "zustand";
import { UseStoreType } from "./interface";

const useStore = create<UseStoreType>((set) => ({
  activeList: [true, false, false],
  setActiveList: (input: boolean[]) => set({ activeList: input }),
}));

export default useStore;
