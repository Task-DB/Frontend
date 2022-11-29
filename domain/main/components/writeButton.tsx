import React from "react";
import type { NextPage } from "next";
import { WriteButtonWrapper } from "./writeButton.style";
import Image from "next/image";
import { Pencil } from "../assets";

const WriteButton: NextPage = () => {
  return (
    <WriteButtonWrapper>
      <Image src={Pencil} alt="글쓰기" />
    </WriteButtonWrapper>
  );
};
export default WriteButton;
