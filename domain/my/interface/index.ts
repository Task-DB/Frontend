import { BoardContentType } from "../../board/interface";

interface UseMoveScrollNameType {
  name: string;
}

export interface UserInfoMenuType {
  element: React.RefObject<HTMLDivElement>;
  onMoveToElement: Function;
  namae: UseMoveScrollNameType;
}

export interface UserInfoRightPropsType {
  moveRef: React.RefObject<HTMLDivElement>;
  uRef: React.RefCallback<HTMLDivElement>;
  myIntroduceData?: string;
  myQuestionData?: BoardContentType[];
  mySavedQuestionData?: string[];
}

export interface MyType {
  contributionLevel: number;
  getMyQuestions: BoardContentType[];
  getSavedQuestions: string[];
  image: string;
  nickname: string;
  bio: string;
}
