import React, { SetStateAction } from "react";
import type { NextPage } from "next";
import UserInfo from "../components/userInfo";
import { UserInfoContainer, UserRightProvider } from "./index.style";
import Introduce from "../components/introduce";
import Info from "../components/info";
import Board from "../components/board";
import useMoveScroll from "../../../hooks/useMoveScroll";
import useStore from "../../../context/useStore";

const MyContainer: NextPage = () => {
  const [introduceY, setIntroduceY] = React.useState<number>(0);
  const [infoY, setInfoY] = React.useState<number>(0);
  const [boardY, setBoardY] = React.useState<number>(0);
  const { setActiveList } = useStore();

  const menus = {
    0: useMoveScroll("소개"),
    1: useMoveScroll("정보"),
    2: useMoveScroll("게시글"),
    length: 3,
  };

  const setRef = (
    ref: HTMLDivElement,
    setState: React.Dispatch<SetStateAction<number>>
  ) => {
    if (ref) {
      setState(ref.getBoundingClientRect().y);
    }
  };

  const introduceRef = React.useCallback((ref: HTMLDivElement) => {
    setRef(ref, setIntroduceY);
  }, []);
  const infoRef = React.useCallback((ref: HTMLDivElement) => {
    setRef(ref, setInfoY);
  }, []);
  const boardRef = React.useCallback((ref: HTMLDivElement) => {
    setRef(ref, setBoardY);
  }, []);

  const [scrollTop, setScrollTop] = React.useState<number>(0);

  const handleScroll = () => {
    setScrollTop(document.documentElement.scrollTop);
  };

  React.useEffect(() => {
    if (scrollTop + 60 < infoY) {
      const status = [true, false, false];
      setActiveList(status);
    } else if (infoY < scrollTop + 60 && scrollTop + 60 < boardY) {
      const status = [false, true, false];
      setActiveList(status);
    } else {
      const status = [false, false, true];
      setActiveList(status);
    }
  }, [introduceY, infoY, boardY, scrollTop, setActiveList]);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll();
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleScroll();
      });
    };
  }, []);

  return (
    <UserInfoContainer>
      <UserInfo menus={Array.from(menus)} />
      <UserRightProvider>
        <Introduce moveRef={menus[0].element} uRef={introduceRef} />
        <Info moveRef={menus[1].element} uRef={infoRef} />
        <Board moveRef={menus[2].element} uRef={boardRef} />
      </UserRightProvider>
    </UserInfoContainer>
  );
};
export default MyContainer;
