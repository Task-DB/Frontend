import React from "react";
import type { NextPage } from "next";
import useStore from "../../../context/useStore";
import IndividualIssue from "../../issue/components/indiviualIssue";
import * as S from "./result.style";
const ResultPage: NextPage = () => {
  const { searchKeyword, searchResult } = useStore();

  return (
    <S.ResultWrapper>
      {/* <h1>검색어 : {searchKeyword}</h1> */}
      <S.IssueWrapper>
        {searchResult?.map((data, idx) => {
          return (
            <div key={idx}>
              <IndividualIssue issueData={data} />
            </div>
          );
        })}
        {searchResult.length ? "" : "검색 결과가 없습니다."}
      </S.IssueWrapper>
    </S.ResultWrapper>
  );
};
export default ResultPage;
