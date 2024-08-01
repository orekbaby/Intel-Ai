"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Quill } from "react-quill";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaImage,
  FaSmile,
} from "react-icons/fa";
import { useState } from "react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CustomToolbar = () => (
  <div id="toolbar">
    <button className="ql-bold">
      <FaBold />
    </button>
    <button className="ql-italic">
      <FaItalic />
    </button>
    <button className="ql-underline">
      <FaUnderline />
    </button>
    <button className="ql-image">
      <FaImage />
    </button>
  </div>
);

const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {},
  },
};

const formats = ["bold", "italic", "underline", "image"];
// function for the props
interface TextEditorProps {
  content: string;
  setContent: (content: string) => void;
  setCharCount: (count: number) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({
  content,
  setContent,
  setCharCount,
}) => {
  const [value, setValue] = useState(content);

  useEffect(() => {
    setValue(content);
  }, [content]);

  const handleChange = (value: string) => {
    if (value.length <= 500) {
      setValue(value);
      setContent(value);
      setCharCount(value.length);
    } else {
      alert(`Character limit exceeded: ${value.length}`);
    }
  };

  return (
    <div className="text-editor text-[#f9f9f9]">
      <CustomToolbar />
      <ReactQuill
        value={value}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder="Write something awesome..."
      />
    </div>
  );
};

export default TextEditor;
