import create from "zustand";
import { SearchDataType } from "../domain/header/interface";
import { IndividualIssueType } from "../domain/issue/interface";
import { UseStoreType } from "./interface";

const useStore = create<UseStoreType>((set) => ({
  activeList: [true, false, false],
  setActiveList: (input: boolean[]) => set({ activeList: input }),
  allIssueData: [],
  setAllIssueData: (input: IndividualIssueType[]) =>
    set({ allIssueData: input }),
  searchResult: [],
  setSearchResult: (input: SearchDataType[]) => set({ searchResult: input }),
  searchKeyword: "",
  setSearchKeyword: (input: string) => set({ searchKeyword: input }),
}));

export default useStore;
