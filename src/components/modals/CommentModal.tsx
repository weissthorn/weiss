import React, { useRef, useState } from "react";
import { Spacer, Button } from "@geist-ui/core";
import { Maximize, Minimize, XCircleFill } from "@geist-ui/icons";
import toast, { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const Quill = dynamic(() => import("react-quill"), {
  ssr: false,
});

type editorProps = {
  title?: string;
  content?: string;
  show: boolean;
  toggleModal: () => void;
  save: () => void;
};

const CommentModal = (props: editorProps) => {
  const editor = useRef<any>(null);
  const [value, setValue] = useState("");
  const [width, setWidth] = useState("700px");
  const [height, setHeight] = useState("auto");
  const [_height, _setHeight] = useState("150px");

  const { title, content, show, toggleModal, save } = props;

  const toggleFullScreen = () => {
    if (editor.current.requestFullscreen) {
      setWidth("100%");
      setHeight("100vh");
      _setHeight("calc(100% - 100px)");
      editor.current.requestFullscreen();
    }
  };

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      setWidth("700px");
      setHeight("auto");
      _setHeight("150px");
      document.exitFullscreen();
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <div className="editor-container" ref={editor}>
      <div className="container" style={{ width, height }}>
        <div className="close">
          {_height === "150px" ? (
            <Maximize size={28} onClick={toggleFullScreen} />
          ) : (
            <Minimize size={28} onClick={closeFullscreen} />
          )}
          <Spacer w={1} inline />
          <XCircleFill size={30} />
        </div>
        <Quill
          style={{ "--height": _height }}
          theme="snow"
          modules={modules}
          formats={formats}
          value={value}
          onChange={setValue}
        ></Quill>
        <Button type="success-light" onClick={save}>
          Publish
        </Button>
      </div>
    </div>
  );
};

export default CommentModal;
