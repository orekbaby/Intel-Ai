import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";
import { DialogContent } from "../ui/dialog";

const workspaceDialog = () => {
  return (
    <>
      <Dialog>
        <DialogContent className="px-8 md:w-full lg:w-full border-none rounded-lg 
        max-w-auto w-[540px] h-[401px] bg-[#181818]"></DialogContent>
      </Dialog>
    </>
  );
};

export default workspaceDialog;
