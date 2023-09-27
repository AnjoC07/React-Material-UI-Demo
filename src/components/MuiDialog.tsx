import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";

export const MuiDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Button */}
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      {/* Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          {/* Nested Components */}
          <DialogContentText id="dialog-description">
            Are you sure you want to submit the test? You will not be able to
            edit it after submitting.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          {/* autoFocus prompt addition */}
          <Button onClick={() => setOpen(false)} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
