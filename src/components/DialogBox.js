import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import InputForm from "./InputForm";
export default function ({ open, onCloseDialog }) {
  const [openValue, setOpenValue] = useState(open);
  const handleClose = () => {
    setOpenValue(false);
    onCloseDialog(false);
  };
  return (
    <div>
      <Dialog open={openValue} onClose={handleClose}>
        <DialogTitle>Create a new Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter these details and it will appear in the left pane
          </DialogContentText>
          <InputForm postCreateClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
