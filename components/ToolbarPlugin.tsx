// components/ToolbarPlugin.tsx
import React from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  TextFormatType,
  ElementFormatType,
} from "lexical";

const ToolbarPlugin: React.FC = () => {
  const [editor] = useLexicalComposerContext();

  const applyTextFormat = (command: TextFormatType) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, command);
      }
    });
  };

  const applyElementFormat = (command: ElementFormatType) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, command);
      }
    });
  };

  return (
    <div className="toolbar">
      <button onClick={() => applyTextFormat("bold")}>Bold</button>
      <button onClick={() => applyTextFormat("italic")}>Italic</button>
      <button onClick={() => applyTextFormat("underline")}>Underline</button>
      {/* <button onClick={() => applyElementFormat("blockquote")}>
        Blockquote
      </button> */}
    </div>
  );
};

export default ToolbarPlugin;
