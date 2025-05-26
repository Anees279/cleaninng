
import React, { useState } from "react";
import { Box, Dialog, DialogContent } from "@mui/material";
import CleaningForm from "./cleaningfrom";

interface CleaningModalProps {
  open: boolean;
  onClose: () => void;
}

const CleaningModal: React.FC<CleaningModalProps> = ({ open, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSuccess = () => {
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 10000); // 10 seconds
  };

  return (
    <Dialog
  open={open}
  onClose={onClose}
  fullScreen
  PaperProps={{
    sx: {
      backgroundColor: "transparent",
      boxShadow: "none",
      m: 0,
    },
  }}
  BackdropProps={{
    sx: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  }}
>
  <DialogContent
    sx={{
      backgroundColor: "transparent",
      padding: 0,
      m: 0,
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        px: { xs: 1, sm: 1 },
      }}
      onClick={onClose} // Clicking outside will close
    >
      <Box
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside form
      >
        <CleaningForm onSuccess={handleSuccess} submitted={submitted} />
      </Box>
    </Box>
  </DialogContent>
</Dialog>
  );
};

export default CleaningModal;
