import React from "react";
import type { NextPage } from "next";
import { dynamicRouteType } from "../../board/interface";
import useMoveScroll from "../../../hooks/useMoveScroll";
import useStore from "../../../context/useStore";
import Introduce from "../../my/components/introduce";
import Info from "../../my/components/myBoard";
import Board from "../../my/components/saveBoard";
import { UserInfoContainer, UserRightWrapper } from "../../my/container/index.style";
import { MyType } from "../../my/interface";
import { getMyQuestionData } from "../../my/api";
import UserInfo from "../../my/components/userInfo";

const UserContainer: NextPage<{ userId: dynamicRouteType }> = ({ userId }) => {
  const [introduceY, setIntroduceY] = React.useState<number>(0);
  const [infoY, setInfoY] = React.useState<number>(0);
  const [boardY, setBoardY] = React.useState<number>(0);
  const [scrollTop, setScrollTop] = React.useState<number>(0);
  const { setActiveList } = useStore();

  const menus = {
    0: useMoveScroll("소개"),
    1: useMoveScroll("쓴 글"),
    2: useMoveScroll("저장한 글"),
    length: 3,
  };

  const setRef = (
    ref: HTMLDivElement,
    setState: React.Dispatch<React.SetStateAction<number>>
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

  const handleScroll = () => {
    setScrollTop(document.documentElement.scrollTop);
  };
  const headerHeight = 60;

  React.useEffect(() => {
    if (scrollTop + headerHeight < infoY) {
      const status = [true, false, false];
      setActiveList(status);
    } else if (
      infoY < scrollTop + headerHeight &&
      scrollTop + headerHeight < boardY
    ) {
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

    getMyQuestionData().then((response) => {
      setMyData(response);
    });
  }, []);

  const [myData, setMyData] = React.useState<MyType>();

  return (
    <UserInfoContainer>
      <UserInfo
        userName={myData!?.nickname}
        userProfile={myData!?.image}
        menus={Array.from(menus)}
      />
      <UserRightWrapper>
        <Introduce
          moveRef={menus[0].element}
          uRef={introduceRef}
          myIntroduceData={myData!?.bio}
        />
        <Info
          moveRef={menus[1].element}
          uRef={infoRef}
          myQuestionData={myData!?.getMyQuestions}
        />
        <Board
          moveRef={menus[2].element}
          uRef={boardRef}
          mySavedQuestionData={myData!?.getSavedQuestions}
        />
      </UserRightWrapper>
    </UserInfoContainer>
  );
};
export default UserContainer;
