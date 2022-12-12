import { BoardContentType } from "../../board/interface";

interface UseMoveScrollNameType {
  name: string;
}

export interface UserInfoMenuType {
  element: React.RefObject<HTMLDivElement>;
  onMoveToElement: Function;
  namae: UseMoveScrollNameType;
}
export interface SavedContentType {
  id: number;
  questionId: number;
  title: string;
}

export interface UserInfoRightPropsType {
  moveRef: React.RefObject<HTMLDivElement>;
  uRef: React.RefCallback<HTMLDivElement>;
  myIntroduceData?: string;
  myQuestionData?: BoardContentType[];
  mySavedQuestionData?: SavedContentType[];
}

export interface MyType {
  id: number;
  contributionLevel: number;
  getMyQuestions: BoardContentType[];
  getSavedQuestions: SavedContentType[];
  image: string;
  nickname: string;
  bio: string;
}
