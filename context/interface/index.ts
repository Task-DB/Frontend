import { IndividualIssueType } from "../../domain/issue/interface";

export interface UseStoreType {
  activeList: boolean[];
  setActiveList: (input: boolean[]) => void;
  allIssueData: IndividualIssueType[];
  setAllIssueData: (input: IndividualIssueType[]) => void;
}
