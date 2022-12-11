import React from "react";
import Editor from "../components";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { EditorFormValue } from "../interface";
import { CompleteButton, TitleInput } from "../components/index.style";
import type { NextPage } from "next";
import { handleWrite, postBoard } from "../api";
import { BoardContentType, dynamicRouteType } from "../../board/interface";

const WriteContainer: NextPage<{ boardId?: dynamicRouteType }> = ({
  boardId,
}) => {
  const router = useRouter();
  const [content, setContent] = React.useState<string>("");
  const [boardData, setBoardData] = React.useState<BoardContentType>();
  if (boardId) {
    // 게시글 정보 받아오는 코드
  }

  const [category, setCategory] = React.useState<string>("JAVA");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<EditorFormValue>();

  const [selectData, setSelectData] = React.useState([
    { value: "JAVA", name: "Java" },
    { value: "C_DOUBLE_PLUS", name: "C" },
    { value: "DB", name: "DB" },
    { value: "CERTIFICATE", name: "자격증" },
  ]);

  return (
    <section id="editor">
      <form
        onSubmit={handleSubmit((data) => {
          data["content"] = content;
          data["category"] = category;
          handleWrite(data).then((_) => {
            alert("작성이 완료되었습니다.");
            router.push("/");
          });
        })}
      >
        <select
          style={{
            border: "0",
            borderRadius: "3px",
            marginLeft: "15%",
            marginTop: "10px",
          }}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        >
          {selectData.map((data, idx) => {
            return (
              <option
                value={data.value}
                key={idx}
                selected={data.value === boardData?.category ? true : false}
              >
                {data.name}
              </option>
            );
          })}
        </select>
        <TitleInput
          type={`text`}
          {...register("title")}
          placeholder="제목을 입력해주세요."
        />

        <Editor content={content} setContent={setContent} />

        <CompleteButton type="submit" disabled={isSubmitting}>
          쓰기
        </CompleteButton>
      </form>
    </section>
  );
};

export default WriteContainer;
