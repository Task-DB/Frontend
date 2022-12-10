import React from "react";
import Editor from "../components";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { EditorFormValue } from "../interface";
import { CompleteButton, TitleInput } from "../components/index.style";
import type { NextPage } from "next";
import { handleWrite, postBoard } from "../api";

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
          handleWrite(data);
        })}
      >
        <select
          style={{
            border: "0",
            borderRadius: "3px",
            marginLeft: "15%",
            marginTop:"10px"
          }}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        >
          <option value="JAVA">Java</option>
          <option value="C_DOUBLE_PLUS">C++</option>
          <option value="DB">DB</option>
          <option value="CERTIFICATE">자격증</option>
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

export default WritePage;
