import { StaticImageData } from "next/image";

export type dynamicRouteType = string | string[] | undefined;

export interface IndividualBoardPropsType {
  boardId: dynamicRouteType;
}

export interface LinePropsType {
  width: string;
}

export interface AuthorPropsType {
  profilePicture: string | StaticImageData;
  nickname: string;
  time: string;
}

export interface CommentsDataType {
  content: string;
  createdDate: string;
  nickname: string;
  userImage: string;
  userId: number;
}

export interface ReplyEditorContentType {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  boardId: dynamicRouteType;
  width: string;
  height: string;
  type: string;
}

export interface BoardContentType {
  category: string;
  commentCount: number;
  createdDate: string;
  id: number;
  likeCount: number;
  status: string;
  title: string;
  userImage: string;
}

export interface AnswerDataType {
  content: string;
  createdDate: string;
  likeCount: number;
  nickname: string;
  userImage: string;
  status: string;
  userId: number;
}

export interface IndividualBoardType {
  answers: AnswerDataType[];
  comments: CommentsDataType[];
  content: string;
  id: number;
  userId: number;
  createdDate: string;
  likeCount: number;
  modifiedDate: string;
  nickname: string;
  status: string;
  title: string;
  userImage: string;
  viewCount: number;
}
