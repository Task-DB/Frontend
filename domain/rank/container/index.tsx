import React from "react";
import type { NextPage } from "next";
import { RankWrapper } from "./index.style";
import RankElement from "../components/rankElement";

const RankContainer: NextPage = () => {
  const [rankData, setRankData] = React.useState([
    {
      grade: 1,
      name: "J1min",
      profile:
        "https://avatars.githubusercontent.com/u/80014454?s=400&u=697229e95f7d992ec544f660b009decf907ac4d6&v=4",
      bio: "어어어어어어어어어어어어어어어어어어어어어어어어어",
      score: 100,
    },
    {
      grade: 1,
      name: "J1min",
      profile:
        "https://avatars.githubusercontent.com/u/80014454?s=400&u=697229e95f7d992ec544f660b009decf907ac4d6&v=4",
      bio: "어어어어어어어어어어어어어어어어어어어어어어어어어",
      score: 100,
    },
    {
      grade: 1,
      name: "J1min",
      profile:
        "https://avatars.githubusercontent.com/u/80014454?s=400&u=697229e95f7d992ec544f660b009decf907ac4d6&v=4",
      bio: "어어어어어어어어어어어어어어어어어어어어어어어어어",
      score: 100,
    },
    {
      grade: 1,
      name: "J1min",
      profile:
        "https://avatars.githubusercontent.com/u/80014454?s=400&u=697229e95f7d992ec544f660b009decf907ac4d6&v=4",
      bio: "어어어어어어어어어어어어어어어어어어어어어어어어어",
      score: 100,
    },
    {
      grade: 1,
      name: "J1min",
      profile:
        "https://avatars.githubusercontent.com/u/80014454?s=400&u=697229e95f7d992ec544f660b009decf907ac4d6&v=4",
      bio: "어어어어어어어어어어어어어어어어어어어어어어어어어",
      score: 100,
    },
    {
      grade: 1,
      name: "J1min",
      profile:
        "https://avatars.githubusercontent.com/u/80014454?s=400&u=697229e95f7d992ec544f660b009decf907ac4d6&v=4",
      bio: "어어어어어어어어어어어어어어어어어어어어어어어어어",
      score: 100,
    },
    {
      grade: 1,
      name: "J1min",
      profile:
        "https://avatars.githubusercontent.com/u/80014454?s=400&u=697229e95f7d992ec544f660b009decf907ac4d6&v=4",
      bio: "어어어어어어어어어어어어어어어어어어어어어어어어어",
      score: 100,
    },
    {
      grade: 1,
      name: "J1min",
      profile:
        "https://avatars.githubusercontent.com/u/80014454?s=400&u=697229e95f7d992ec544f660b009decf907ac4d6&v=4",
      bio: "어어어어어어어어어어어어어어어어어어어어어어어어어",
      score: 100,
    },
    {
      grade: 1,
      name: "J1min",
      profile:
        "https://avatars.githubusercontent.com/u/80014454?s=400&u=697229e95f7d992ec544f660b009decf907ac4d6&v=4",
      bio: "어어어어어어어어어어어어어어어어어어어어어어어어어",
      score: 100,
    },
    {
      grade: 1,
      name: "J1min",
      profile:
        "https://avatars.githubusercontent.com/u/80014454?s=400&u=697229e95f7d992ec544f660b009decf907ac4d6&v=4",
      bio: "어어어어어어어어어어어어어어어어어어어어어어어어어",
      score: 100,
    },
  ]);

  return (
    <RankWrapper>
      {rankData.map((data, idx) => {
        return <RankElement key={idx} userData={data} />;
      })}
    </RankWrapper>
  );
};
export default RankContainer;
