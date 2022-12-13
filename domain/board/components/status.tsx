import React from "react";
import type { NextPage } from "next";
import {
  BoardDate,
  BoardStatusWrapper,
  BoardViews,
  StatusWrapper,
} from "./status.style";
import Image from "next/image";
import { CloseBadge, OpenBadge } from "../assets";
import Author from "./author";
import { ProfilePicture } from "../../my/assets";
import { IndividualBoardType } from "../interface";
import { getRelativeDate } from "../../../util";
import AdminMenu from "./adminMenu";

const Status: NextPage<{ boardData: IndividualBoardType }> = ({
  boardData,
}) => {
  return (
    <section id={"status"}>
      <BoardStatusWrapper>
        <StatusWrapper>
          <Image
            src={boardData?.status !== "OPEN" ? CloseBadge : OpenBadge}
            alt="열린이슈"
            width={100}
            height={41}
          />
        </StatusWrapper>

        <Author
          nickname={boardData?.nickname}
          profilePicture={boardData?.userImage}
        />
        <BoardDate>
          <span>{getRelativeDate(boardData?.createdDate)}</span>
        </BoardDate>
        <BoardViews>
          조회수<span>{boardData?.viewCount}</span>
        </BoardViews>
        <AdminMenu boardId={boardData?.id} method="put" type={"board"} />
      </BoardStatusWrapper>
    </section>
  );
};
export default Status;
