import create from "zustand";
import { IndividualIssueType } from "../domain/issue/interface";
import { UseStoreType } from "./interface";

const useStore = create<UseStoreType>((set) => ({
  activeList: [true, false, false],
  setActiveList: (input: boolean[]) => set({ activeList: input }),
  allIssueData: [],
  setAllIssueData: (input: IndividualIssueType[]) =>
    set({ allIssueData: input }),
}));

export default useStore;
