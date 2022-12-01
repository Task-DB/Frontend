import React from "react";
import type { NextPage } from "next";
import { WriteButtonWrapper } from "./writeButton.style";
import Image from "next/image";
import { Pencil } from "../assets";
import Link from "next/link";

const WriteButton: NextPage = () => {
  return (
    <Link href="/write">
      <a>
        <WriteButtonWrapper>
          <Image src={Pencil} alt="글쓰기" width={24} height={20} />
        </WriteButtonWrapper>
      </a>
    </Link>
  );
};
export default WriteButton;
