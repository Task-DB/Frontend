import React from "react";

export interface UseMoveScrollNameType {
  name: string;
}

export interface UseMoveScrollReturnType {
  element: React.RefObject<HTMLDivElement>;
  onMoveToElement: Function;
  namae: UseMoveScrollNameType;
}
