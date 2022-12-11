import React from "react";
import dynamic from "next/dynamic";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import "react-quill/dist/quill.snow.css";
import { DynamicEditorType, EditorContentType } from "../interface";

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
  "font",
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "formula",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "background",
];
const Editor = ({ content, setContent }: EditorContentType) => {
  const quillRef = React.useRef();

  const modules = React.useMemo(
    () => ({
      syntax: {
        highlight: (text: string) => hljs.highlightAuto(text).value,
      },
      toolbar: {
        container: [
          [{ font: [] }], // font 설정
          [{ header: [1, 2, 3, 4, 5, 6, false] }], // header 설정
          ["bold", "italic", "underline", "strike", "blockquote", "code-block"], // 굵기, 기울기, 밑줄 등 부가 tool 설정
          ["link", "image", "video"], // 링크, 이미지, 비디오 업로드 설정
          [{ align: [] }, { color: [] }, { background: [] }], // 정렬, 글씨 색깔, 글씨 배경색 설정
          ["clean"], // toolbar 설정 초기화 설정
        ],
      },
    }),
    []
  );

  return (
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
        width: "70%",
        height: "450px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  );
};

export default Editor;
