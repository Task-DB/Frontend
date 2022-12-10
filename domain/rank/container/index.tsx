import React from "react";
import type { NextPage } from "next";
import { RankHeadElement, RankWrapper } from "./index.style";
import RankElement from "../components/rankElement";
import { getRankData } from "../api";
import { RankDataType } from "../interface";

const RankContainer: NextPage = () => {
  const [rankData, setRankData] = React.useState<RankDataType[]>([]);
  const [headData, setHeadData] = React.useState<string[]>([
    "순위",
    "프로필",
    "답변",
    "점수",
  ]);

  React.useEffect(() => {
    getRankData().then((response) => {
      setRankData(response);
    });
  }, []);

  return (
    <RankWrapper>
      <thead>
        <tr>
          {headData.map((data, idx) => {
            return <RankHeadElement key={idx}>{data}</RankHeadElement>;
          })}
        </tr>
      </thead>

      <tbody>
        {rankData.map((data, idx) => {
          return <RankElement key={idx} userData={data} rank={idx + 1} />;
        })}
      </tbody>
    </RankWrapper>
  );
};
export default RankContainer;
