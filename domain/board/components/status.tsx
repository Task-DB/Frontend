import React from "react";
import type { NextPage } from "next";
import { BoardDate, BoardStatusWrapper, BoardViews } from "./status.style";
import Image from "next/image";
import { OpenBadge } from "../assets";

const Status: NextPage = () => {
  return (
    <section id={'status'}>
      <BoardStatusWrapper>
        <Image src={OpenBadge} alt="열린이슈" width={100} height={41} />
        <BoardDate>
          질문한 날짜<span>오늘</span>
        </BoardDate>
        <BoardViews>
          조회수<span>20</span>
        </BoardViews>
      </BoardStatusWrapper>

    </section>
  )
};
export default Status;
