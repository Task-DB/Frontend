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
} 