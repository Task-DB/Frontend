import React from "react";
import Editor from "../components";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { EditorFormValue } from "../interface";
import {
  CompleteButton,
  PostImageWrapper,
  PostImage,
  PostImageElement,
  ThumbnailLabel,
  TitleInput,
  ThumbnailLabelWrapper,
} from "../components/index.style";
import type { NextPage } from "next";

const WritePage: NextPage = () => {
  const router = useRouter();
  const [thumbnail, setThumbnail] = React.useState<string>("");
  const [thumbnailStatus, setThumbnailStatus] = React.useState("썸네일 업로드");
  const [content, setContent] = React.useState("");
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
          console.log(data);
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
