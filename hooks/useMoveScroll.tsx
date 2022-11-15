import React from "react";

const useMoveScroll = () => {
  const element = React.useRef<HTMLDivElement>(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { element, onMoveToElement };
};

export default useMoveScroll;
