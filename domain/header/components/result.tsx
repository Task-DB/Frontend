import React from "react";
import type { NextPage } from "next";
import useStore from "../../../context/useStore";

const ResultPage: NextPage = () => {
  const { searchResult, setSearchResult } = useStore();
  return (
    <>
      {searchResult?.map((data, idx) => {
        return <div key={idx}>{data.title}</div>;
      })}
      {searchResult.length ? "" : "검색 결과가 없습니다."}
    </>
  );
};
export default ResultPage;
