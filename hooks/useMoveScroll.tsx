import React from "react";
import { UseMoveScrollNameType, UseMoveScrollReturnType } from "./interface";

const useMoveScroll = (listName: string): UseMoveScrollReturnType => {
  const namae: UseMoveScrollNameType = {
    name: listName,
  };

  const element = React.useRef<HTMLDivElement>(null);

  const onMoveToElement = () => {
    element.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return { element, onMoveToElement, namae };
};

export default useMoveScroll;
