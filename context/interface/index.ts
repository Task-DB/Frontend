import { SearchDataType } from "../../domain/header/interface";
import { IndividualIssueType } from "../../domain/issue/interface";

export interface UseStoreType {
  activeList: boolean[];
  setActiveList: (input: boolean[]) => void;
  allIssueData: IndividualIssueType[];
  setAllIssueData: (input: IndividualIssueType[]) => void;
  result: SearchDataType[];
  setResult: (input: SearchDataType[]) => void;
}
