import React from "react";
import dynamic from "next/dynamic";
import { DynamicEditorType } from "../../write/interface";
import { postEditorImage } from "../../write/api";
import { ReplyFormButton, ReplyFormWrapper } from "./replyForm.style";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import "react-quill/dist/quill.snow.css";
import { handleReply, postReply } from "../api";
import { ReplyEditorContentType } from "../interface";

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return function comp({ forwardedRef, ...props }: DynamicEditorType) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false }
);

hljs.configure({
  languages: ["typescript", "javascript", "python", "java", "cpp"],
});

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "code-block",
  "image",
];

const ReplyForm = ({
  content,
  setContent,
  boardId,
  width,
  height,
}: ReplyEditorContentType) => {
  const quillRef = React.useRef();
  const insertImage = (photo_id: string) => {
    const IMG_URL = photo_id;
    // @ts-ignore
    const editor = quillRef.current?.getEditor();
    const range = editor.getSelection();
    editor.insertText(range, "\n");
    editor.insertEmbed(
      range.index,
      "image",
      `NEXT_PUBLIC_AWS_BUCKET_NAME/${IMG_URL}`
    );
  };

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const file: File = (input.files as FileList)[0];
      postEditorImage(file)
        .then((response) => {
          insertImage(response.href);
        })
        .catch((_) => {
          alert("Image upload failed.");
        });
    });
  };

  const modules = React.useMemo(() => {
    return {
      syntax: {
        highlight: (text: string) => hljs.highlightAuto(text).value,
      },
      toolbar: {
        Wrapper: [
          [{ header: "1" }, { header: "2" }],
          [{ size: [] }],
          [
            "image",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "code-block",
            "link",
          ],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
    //eslint-disable-next-line
  }, []);

  return (
    <ReplyFormWrapper width={width}>
      <ReactQuill
        forwardedRef={quillRef}
        theme={"snow"}
        modules={modules}
        formats={formats}
        value={content}
        onChange={(event: string) => {
          setContent(event);
        }}
        style={{
          margin: "1rem auto",
          paddingBottom: "2rem",
          height: `${height}px`,
        }}
      />
      <ReplyFormButton
        onClick={() => {
          handleReply(boardId, { content: content });
        }}
      >
        작성하기
      </ReplyFormButton>
    </ReplyFormWrapper>
  );
};

export default ReplyForm;
