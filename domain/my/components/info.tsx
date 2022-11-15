import React from "react";
import type { NextPage } from "next";
import { InfoProvider, InfoTitle, InfoUserContent } from "./info.style";

const Info: NextPage = () => {
  return (
    <>
      <InfoProvider>
        <InfoTitle>정보</InfoTitle>
        <InfoUserContent>내용이 없습니다.</InfoUserContent>
      </InfoProvider>
    </>
  );
};
export default Info;
