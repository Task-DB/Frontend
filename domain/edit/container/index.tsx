import React from "react";
import type { NextPage } from "next";
import { BoardContentType, DynamicRouteType } from "../../board/interface";
import { getBoardData } from "../../board/api";
import { useRouter } from "next/router";
import { EditorFormValue } from "../../write/interface";
import { useForm } from "react-hook-form";
import { handleWrite, putBoard } from "../../write/api";
import { CompleteButton, TitleInput } from "../../write/components/index.style";
import Editor from "../../write/components";

const EditContainer: NextPage<{ boardId: DynamicRouteType }> = ({
  boardId,
}) => {
  React.useEffect(() => {}, []);

  const router = useRouter();
  const [content, setContent] = React.useState<string>("");
  const [boardData, setBoardData] = React.useState<BoardContentType>();
  const [title, setTitle] = React.useState<string>("");
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

  React.useEffect(() => {
    getBoardData(boardId)
      .then((response) => {
        setContent(response?.content);
        setTitle(response?.title);
      })
      .then((error) => [console.log(error)]);
  }, [boardId]);

  return (
    <>
      <section id="editor">
        <form
          onSubmit={handleSubmit((data) => {
            data["content"] = content;
            data["category"] = category;
            putBoard(boardId, data).then((_) => {
              alert("수정이 완료되었습니다.");
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
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Editor content={content} setContent={setContent} />
          <CompleteButton type="submit" disabled={isSubmitting}>
            쓰기
          </CompleteButton>
        </form>
      </section>
    </>
  );
};
export default EditContainer;
