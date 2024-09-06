"use client"
import React, {useEffect, useRef, useState } from "react";
import { FaBook, FaCheck, FaCheckSquare, FaFire, FaPlus } from "react-icons/fa";
import { SlBookOpen } from "react-icons/sl";
import { LiaGripfire } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import { CiFileOn } from "react-icons/ci";
import { FaRegSquare } from "react-icons/fa";
import { MdDeleteOutline, MdOutlineDeleteOutline } from "react-icons/md";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { toast, useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { responsesData } from "@/utils/mockData";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";

interface UploadedFile {
  id: number;
  name: string;
  isChecked: boolean;
}

interface Workspace {
  id: number;
  name: string;
}

type ResponseType = {
  id: number;
  title: string;
  title2: string;
  problem: string;
  problem2: string;
  fix: string;
  fix2: string;
  why: string; // Optional field
};

interface WorkspaceData {
  uploadedFiles: UploadedFile[];
  responses: ResponseType[];
  promptCount: number;
}
const initialWorkspaceData: WorkspaceData = {
  uploadedFiles: [],
  responses: [],
  promptCount: 0,
};

const Page = () => {
  
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [prompt, setPrompt] = useState<string>(""); // Current prompt input
  const [responses, setResponses] = useState<ResponseType[]>([]);
  const responsesEndRef = useRef<HTMLDivElement | null>(null);
  const [promptCount, setPromptCount] = useState(0);
  const maxPrompts = 10;

  const handleEnterClick = () => {
    if (promptCount >= maxPrompts) {
      toast({
        variant: "destructive",
        title: "Prompt Limit Exceeded",
        description: "You have reached the maximum number of prompts for today.",
        action: <ToastAction altText="Okay">Okay</ToastAction>,
      });
      return;
    }

    if (uploadedFiles.length === 0) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please upload a file before entering a prompt.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    if (prompt.trim() === "") {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please enter a prompt before submitting.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    // Add a new mock response
    setResponses((prevResponses) => [...prevResponses, ...responsesData]);

    // Clear the prompt input after submission
    setPrompt("");

    // Increment the prompt count
    setPromptCount(prevCount => prevCount + 1);
  };

  // Handle file upload
  useEffect(() => {
    const storedFiles = localStorage.getItem("uploadedFiles");
    if (storedFiles) {
      setUploadedFiles(JSON.parse(storedFiles));
    }
  }, []);

  // Save files to localStorage whenever the uploadedFiles state changes
  useEffect(() => {
    localStorage.setItem("uploadedFiles", JSON.stringify(uploadedFiles));
  }, [uploadedFiles]);

  // Handle file upload when the button is clicked
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Optional chaining in case no file is selected
    if (file) {
      const newFile = { id: Date.now(), name: file.name, isChecked: false };
      setUploadedFiles((prevFiles) => [...prevFiles, newFile]);
    }
  };

  // Handle deleting a file
  const handleDelete = (fileId: number) => {
    const updatedFiles = uploadedFiles.filter((file) => file.id !== fileId);
    setUploadedFiles(updatedFiles);
  };

  // Handle checking/unchecking a file
  const handleCheck = (fileId: number) => {
    const updatedFiles = uploadedFiles.map((file) =>
      file.id === fileId ? { ...file, isChecked: !file.isChecked } : file
    );
    setUploadedFiles(updatedFiles);
  };

  const scrollToBottom = () => {
    if (responsesEndRef.current) {
      responsesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom(); // Auto-scroll when responses change
  }, [responses]);

  

  // workspace
  const [workspaces, setWorkspaces] = useState<Workspace[]>([
    { id: 1, name: "Default" }
  ]);
  
  const [currentWorkspace, setCurrentWorkspace] = useState<number>(1);
  const [workspaceData, setWorkspaceData] = useState<Record<number, WorkspaceData>>({
    1: initialWorkspaceData
  });
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [editingWorkspaceId, setEditingWorkspaceId] = useState<number | null>(null);
  const [showSecondInput, setShowSecondInput] = useState(false);
  const [newWorkspaceName, setNewWorkspaceName] = useState("");
  
  const inputRef = useRef<HTMLInputElement | null>(null); 
  
  // Handle adding a new workspace
  const handleAddWorkspace = () => {
    if (newWorkspaceName.trim()) {
      const newWorkspace = {
        id: workspaces.length + 1,
        name: newWorkspaceName.trim(),
      };
      setWorkspaces([...workspaces, newWorkspace]);
      // Do not change the current workspace
      setNewWorkspaceName(""); // Clear the input value
      setShowSecondInput(false); // Hide the second input box
      setDialogOpen(false); // Close the dialog
      toast({
        description: "Your new workspace has been created.",
      });
    }
  };
  
  
  
  const handleWorkspaceChange = (workspaceId: number) => {
    // Save the current workspace data
    setWorkspaceData(prevData => ({
      ...prevData,
      [currentWorkspace]: {
        uploadedFiles: uploadedFiles,
        responses: responses,
        promptCount: promptCount
      }
    }));

    // Load the new workspace data
    const newWorkspaceData = workspaceData[workspaceId] || initialWorkspaceData;
    setUploadedFiles(newWorkspaceData.uploadedFiles);
    setResponses(newWorkspaceData.responses);
    setPromptCount(newWorkspaceData.promptCount);

    setCurrentWorkspace(workspaceId);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const workspaceId = Number(e.target.value);
    handleWorkspaceChange(workspaceId);
  };
  

  useEffect(() => {
    const savedData = localStorage.getItem(`workspaceData_${currentWorkspace}`);
    if (savedData) {
      setWorkspaceData(prevData => ({
        ...prevData,
        [currentWorkspace]: JSON.parse(savedData)
      }));
    }
  }, [currentWorkspace]);

  useEffect(() => {
    if (currentWorkspace !== null) {
      localStorage.setItem(`workspaceData_${currentWorkspace}`, JSON.stringify({
        uploadedFiles,
        responses,
        promptCount
      }));
    }
  }, [uploadedFiles, responses, promptCount, currentWorkspace]);
  
  
  // Handle editing a workspace
 
  
  // Handle keypress event to add or edit workspace
  const handleEditWorkspace = (id: number, name: string) => {
    const updatedWorkspaces = workspaces.map((workspace) =>
      workspace.id === id ? { ...workspace, name } : workspace
    );
    setWorkspaces(updatedWorkspaces);
  };
  
  
  // Handle editing icon click
  const handleEditIconClick = (id: number) => {
    setEditingWorkspaceId(id); // Focus on the input box for editing
    setDialogOpen(true); // Open modal for editing
  };
  
  
  // Set cursor position at the end of text in the input
  
  
  // Handle pressing Enter for adding or editing
  const handleKeyPress = (e: React.KeyboardEvent, id: number | null) => {
    if (e.key === "Enter") {
      if (id === null) {
        // Handle adding new workspace
        if (newWorkspaceName.trim()) {
          handleAddWorkspace();
        }
      } else {
        // Handle editing an existing workspace
        if (newWorkspaceName.trim()) {
          handleEditWorkspace(id, newWorkspaceName);
          setDialogOpen(false); // Close dialog
          toast({
            description: "Your workspace has been updated.",
          });
          setEditingWorkspaceId(null); // Exit edit mode
        }
      }
    }
  };
  
  
  
  
  // Handle deleting a workspace
  const handleDeleteWorkspace = (id: number) => {
    const updatedWorkspaces = workspaces.filter((workspace) => workspace.id !== id);
    setWorkspaces(updatedWorkspaces);
    if (updatedWorkspaces.length > 0) {
      setCurrentWorkspace(updatedWorkspaces[0].id);
    } else {
      setCurrentWorkspace(0); // No workspaces left
    }
  };
  
  
  return (
<>
<div className="pl-28 w-full h-[80vh] md:h-[100vh] lg:h-[100vh] relative overflow-y-auto scrollbar-hide pb-20">
  <div className="dasboard-color">
<div className="flex justify-between items-center w-full p-4">
      {/* Left Side: Buttons */}
      <div className="flex items-center gap-5">
        {/* First Div: Useful Libraries */}
        <div className="flex justify-center items-center gap-2 w-auto bg-[#25252566] opacity-[40%] h-[40px] rounded-[9px] px-2 ">
           <span className="font-normal text-sm leading-[12px]">Useful Libraries</span>
          <SlBookOpen className="h-4 w-4 text-[#03FFA3]" />
        </div>

        {/* Second Div: Trending Contracts */}
        <div className="flex justify-center items-center gap-2 w-auto px-2 h-[40px]  bg-[#25252566] opacity-[40%] rounded-[9px]">
         <span className="font-normal text-sm leading-[12px]">Trending Contracts</span>
          <LiaGripfire className="h-4 w-4  text-[#03FFA3]" />
        </div>
      </div>

      {/* Right Side: Daily Usage Quota */}
      <div>
      <div className="pr-4 text-white">
        <button className="font-normal text-sm leading-[12px]" onClick={handleEnterClick}>| {promptCount} / {maxPrompts} daily usage quota</button>
      </div>
      {/* Other JSX elements, including input and button for sending prompts */}
      
    </div>
    </div>
    <div className="flex justify-between">
    <div className="w-[45%] pl-4 h-[100vh] overflow-y-auto scrollbar-hide">
  <div className="flex justify-between w-full p-4 gap-10">
      {/* Left Side: Two Rows */}
      <div className="flex flex-col w-1/2 gap-4">
        {/* Row 1: Task Type */}
        <h3 className="font-semibold text-base leading-[28.9px]">Task Type</h3>

        {/* Row 2: Fix Bug with Dropdown */}
        <div className="relative flex items-center justify-between w-full h-[48px] p-[10px] bg-[#131313] text-white rounded-[12px]">
        <select className="appearance-none bg-transparent text-white outline-none w-full pr-8">
          <option className="text-sm leading-[16.64px]" value="Fix Bug">Fix Bug</option> 
             <option className="text-sm leading-[16.64px]" value="Unit Testing">Unit Testing</option>
            <option className="text-sm leading-[16.64px]" value="Smart Contract Audit">Smart Contract Audit</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
     </svg>
  </div>
        </div>
      </div>

      {/* Right Side: Two Rows */}
      <div className="flex flex-col w-1/2 gap-4">
        {/* Row 1: Developer Proficiency */}
        <h3 className="font-semibold text-base leading-[28.9px]">Developer Proficiency</h3>

        {/* Row 2: Junior with Dropdown */}
        <div className="relative flex items-center justify-between w-full h-[48px] p-[10px] bg-[#131313] text-white rounded-[12px]">
  <select className="appearance-none bg-transparent text-white outline-none w-full pr-8">
    <option className="text-sm leading-[16.64px]" value="option3">Junior</option> 
    <option className="text-sm leading-[16.64px]" value="option1">Mid Level</option>
    <option className="text-sm leading-[16.64px]" value="option2">Senior</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
  </div>
  </div>
    </div>
    <div className="pt-10 pb-16">
      <h3 className="font-semibold text-base leading-[28.9px] mb-5">Task Instruction (Raw Prompt)</h3>
      
      <div className="bg-[#131313] pb-3">
      <textarea 
    className="w-full h-[141px] p-3 px-5  font-normal text-sm text-white bg-[#131313] rounded-xl outline-none resize-none" 
    placeholder="Type your response here"
    value={prompt}
    onChange={(e) => setPrompt(e.target.value)}
  />
  <div className="flex justify-end">
    <button className="w-[80px] h-[38px] bg-[#03FFA3] font-normal text-base text-black rounded-[40px] px-[19px] pt-[3px] pb-[6px]" onClick={handleEnterClick} >
      Enter
    </button>
  </div>
   </div>

    </div>

    <div className="flex justify-between items-center pb-5">
     <h4 className="font-semibold text-sm leading-[28.9px] mb-5 pt-5">
      Code Context
      </h4>
       <div className="flex gap-3">
          
      {/* Workspace Selector */}
      
      <div className="flex items-center gap-1 font-normal text-sm justify-center w-auto h-[40px] py-[7px] px-[11px] rounded-[9px] bg-[#252525]">
  <select
    className="bg-[#252525] text-white font-normal text-sm outline-none"
    value={currentWorkspace}
    onChange={handleSelectChange}
  >
    {workspaces.map((workspace) => (
  <option className="mb-5 font-normal text-sm" key={workspace.id} value={workspace.id}>
    Workspace: {workspace.name}
  </option>
))}

    <option value="" disabled>
      <CiFileOn />
    </option>
  </select>
</div>



<Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
  <DialogTrigger asChild>
    <div className="flex justify-center items-center bg-[#1D1D1D] w-[40px] h-[40px] rounded-[4px] cursor-pointer">
      <FiPlus className="w-[12px] h-[12px] text-white" />
    </div>
  </DialogTrigger>

  <DialogContent className="bg-[#131313] outline-0 w-[541px] border-none h-[auto] p-[21px_18px_105.5px_19px] rounded-[10px_0px_0px_0px]">
    <div className="flex justify-between items-center">
      <h2 className="font-medium text-lg text-white">Workspace Manager</h2>

      {/* Plus Icon for Adding a New Workspace */}
      {!showSecondInput && (
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowSecondInput(true)}>
          <div className="bg-[#1d1d1d] w-[22px] h-[22px] p-[5.5px] rounded-[2.2px_0px_0px_0px]">
            <FiPlus className="w-[11px] h-[11px] text-white" />
          </div>
          <span className="text-white font-normal text-base leading-[25.92px]">Add New</span>
        </div>
      )}
    </div>

    {/* Current Workspace Input */}
    {workspaces
      .filter(workspace => workspace.id === currentWorkspace)
      .map((workspace) => (
        <div key={workspace.id} className="flex justify-between items-center mt-4">
          <input
            type="text"
            value={workspace.name}
            onChange={(e) => handleEditWorkspace(workspace.id, e.target.value)}
            onKeyDown={(e) => handleKeyPress(e, workspace.id)}
            placeholder="Workspace name"
            className="w-[392px] h-[40px] p-[6px_23px] rounded-[66px] border border-[#363636] bg-[#131313] outline-none text-white"
            autoFocus={editingWorkspaceId === workspace.id}
          />
          {/* Edit and Delete Icons */}
          <div className="flex items-center gap-2">
            <div
              className="bg-[#1d1d1d] w-[30px] h-[30px] p-[8px_7px] rounded-[4px_0px_0px_0px] cursor-pointer"
              onClick={() => handleEditIconClick(workspace.id)}
            >
              <FiEdit2 className="w-[15px] h-[15px] text-white" />
            </div>
            <div
              className="bg-[#1d1d1d] w-[30px] h-[30px] p-[8px_7px] rounded-[4px_0px_0px_0px] cursor-pointer"
              onClick={() => handleDeleteWorkspace(workspace.id)}
            >
              <MdDeleteOutline className="w-[15px] h-[15px] text-white" />
            </div>
          </div>
        </div>
      ))}

    {/* Second Input for Adding a New Workspace */}
    {showSecondInput && (
      <input
        type="text"
        value={newWorkspaceName}
        onChange={(e) => setNewWorkspaceName(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e, null)}
        placeholder="New workspace name"
        className="w-[392px] h-[40px] p-[6px_23px] rounded-[66px] border border-[#363636] bg-[#131313] outline-none text-white mt-4"
      />
      
    )}
  </DialogContent>
</Dialog>


      </div>
    </div>

    <div className="space-y-4 bg-[#131313] p-4">
    {uploadedFiles.map((file) => (
        <div key={file.id} className="flex justify-between items-center mt-4">
          <span className="text-base font-normal leading-[29.16px]">{file.name}</span>
          <div className="flex space-x-4">
            {/* Check/Uncheck functionality */}
            <div
              className="bg-[#1D1D1D] w-10 h-10 rounded-l flex items-center justify-center cursor-pointer"
              onClick={() => handleCheck(file.id)}
            >
              {file.isChecked ? (
                <FaCheck className="text-white w-4 h-4" />
              ) : (
                <FaRegSquare className="text-white w-5 h-5" />
              )}
            </div>

            {/* Delete functionality */}
            <div
              className="bg-[#1D1D1D] w-10 h-10 flex items-center justify-center rounded-l cursor-pointer"
              onClick={() => handleDelete(file.id)}
            >
              <MdOutlineDeleteOutline className="text-white w-5 h-5" />
            </div>
          </div>
        </div>
      ))}
<div className="flex justify-center items-center pt-10">
      <p className="font-normal text-sm text-center text-[#858585]">Drag and drop files or folders here (VS Code/IDE/Finder/File Explorer)</p>
      </div>
      <div className="flex justify-center items-center gap-2">
      <span className="font-normal text-sm leading-[12px]">or</span> 
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileUpload}
      />

      {/* Label for triggering file input */}
      <label htmlFor="file-upload">
        <button
          className="flex justify-center items-center w-[185px] h-[44px] rounded-md font-normal text-sm leading-[12px] bg-[#1D1D1D]"
          onClick={() => fileInputRef.current?.click()} // Directly trigger the input click
        >
          Add File Manually
        </button>
      </label>
      </div>
    </div>
    {/* stops herr */}
</div>

{/* second section */}
<div className="w-[55%] ml-4 h-[100vh]">
  <h3 className="font-semibold text-base leading-[28.9px] mb-5">
    Code Breakdown (Explanation)
  </h3>
  
  <div className="bg-[#131313] h-full overflow-y-auto scrollbar-hide w-full p-3 px-5 rounded-xl">
    <div className="flex gap-2">
      <div>
        <Image 
          width={24}
          height={24}
          src="/setings.png"
          alt=""
        />
      </div>
      
      <h5 className="font-medium text-base leading-[29.07px] mb-2">
        Issues and fixes
      </h5>
    </div>

    {/* Response Mapping */}
    {responses.map((response, index) => (
       <div key={response.id} className="mb-10">
      <>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-start gap-1">
            <span className="font-bold">1.</span>
            <h5 className="font-normal text-sm leading-6">{response.title}</h5>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-start gap-2">
              <p className="font-normal text-sm leading-6">{response.problem}</p>
            </div>
            <div className="flex items-start gap-2">
              <p className="font-normal text-sm leading-6">{response.fix}</p>
            </div>
          </div>
          <p className="pt-5 font-normal text-base leading-6">{response.why}</p>
        </div>
        <div className="flex flex-col gap-2 pt-5">
          <div className="flex items-start gap-1">
            <span className="font-bold">2.</span>
            <h5 className="font-normal text-sm leading-6">{response.title2}</h5>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-start gap-2">
              <p className="font-normal text-sm leading-6">{response.problem2}</p>
            </div>
            <div className="flex items-start gap-2">
              <p className="font-normal text-sm leading-6">{response.fix2}</p>
            </div>
          </div>
          </div>

        
        
      </div>
      <div className="pt-10 px-2">
          <Image
            width={646}
            height={627}
            src="/code.png"
            alt="code" />
        </div>
        </>
        </div>
    ))}
    <div ref={responsesEndRef}></div>
  </div>
</div>
 </div>
    </div>
    </div>
    
</>
  )
};

export default Page;
