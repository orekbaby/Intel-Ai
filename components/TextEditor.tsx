"use client";
import React, { useEffect, useState } from "react";
import { FaBold, FaItalic, FaUnderline, FaImage } from "react-icons/fa";

interface TextEditorProps {
  editorContent: string;
  setEditorContent: (content: string) => void;
  setCharCount: (count: number) => void;
}

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

const TextEditor: React.FC<TextEditorProps> = ({
  editorContent,
  setEditorContent,
  setCharCount,
}) => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    setContent(editorContent);
  }, [editorContent]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    if (value.length <= 500) {
      setContent(value);
      setEditorContent(value);
      setCharCount(value.length);
    } else {
      alert(`Character limit exceeded: ${value.length}`);
    }
  };

  return (
    <div className="text-editor text-[#f9f9f9]">
      <CustomToolbar />
      <textarea
        value={content}
        onChange={handleChange}
        placeholder="Write something awesome..."
        className="w-full h-48 p-2 mt-2 border rounded-md bg-[#1D1D1D] text-white text-xs scrollbar-hide"
        maxLength={500}
      />
    </div>
  );
};

export default TextEditor;
