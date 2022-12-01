import React from "react";
import Editor from "../components";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { EditorFormValue } from "../interface";
import { CompleteButton, TitleInput } from "../components/index.style";
import type { NextPage } from "next";
import { postBoard } from "../api";

const WritePage: NextPage = () => {
  const router = useRouter();
  const [content, setContent] = React.useState("");
  const [category, setCategory] = React.useState<string>("JAVA");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<EditorFormValue>();

  return (
    <section id="editor">
      <form
        onSubmit={handleSubmit((data) => {
          data["content"] = content;
          data["category"] = category;
          console.log(data);
          postBoard(data)
            .then((_) => {
              alert("작성에 성공했습니다.");
            })
            .catch((error) => {
              console.log(error);
              alert("작성에 실패하였습니다. \n 나중에 다시 시도해주세요.");
            });
        })}
      >
        <TitleInput
          type={`text`}
          {...register("title")}
          placeholder="제목을 입력해주세요."
        />
        <Editor content={content} setContent={setContent} />
        <CompleteButton type="submit" disabled={isSubmitting}>
          작성 완료
        </CompleteButton>
      </form>
    </section>
  );
};

export default WritePage;
