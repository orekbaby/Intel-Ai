// const TextEditor: React.FC<TextEditorProps> = ({
//   editorContent,
//   setEditorContent,
//   setCharCount,
// }) => {
//   const [content, setContent] = useState<string>("");

//   useEffect(() => {
//     setContent(editorContent);
//   }, [editorContent]);

//   const handleChange = (value: string) => {
//     if (value.length <= 500) {
//       setContent(value);
//       setEditorContent(value); // Update the content in the parent component
//       setCharCount(value.length);
//     } else {
//       alert(`Character limit exceeded: ${value.length}`);
//     }
//   };

//   return (
//     <div className="text-editor text-[#f9f9f9]">
//       <CustomToolbar />
//       <ReactQuill
//         value={content}
//         onChange={handleChange}
//         modules={modules}
//         formats={formats}
//         placeholder="Write something awesome..."
//       />
//     </div>
//   );
// };
