import { SearchDataType } from "../../domain/header/interface";
import { IndividualIssueType } from "../../domain/issue/interface";

export interface UseStoreType {
  activeList: boolean[];
  setActiveList: (input: boolean[]) => void;
  allIssueData: IndividualIssueType[];
  setAllIssueData: (input: IndividualIssueType[]) => void;
  searchResult: SearchDataType[];
  setSearchResult: (input: SearchDataType[]) => void;
  searchKeyword: string;
  setSearchKeyword: (input: string) => void;
}
