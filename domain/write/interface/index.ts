import React from "react";

export interface ImagePostResponseType {
  photo_id: number;
  href: string;
  board_id: number;
}

export interface DynamicEditorType {
  forwardedRef?: any;
  theme?: string;
  modules?: any;
  formats?: string[];
  value?: string;
  onChange?: any;
  style?: React.CSSProperties;
}

export interface EditorFormValue {
  title: string;
  content: string;
  category: string;
}

export interface EditorContentType {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

export type CategoryType =
  | "JAVA"
  | "DB"
  | "C_DOUBLE_PLUS"
  | "CERTIFICATE"
  | "OTHERS";
