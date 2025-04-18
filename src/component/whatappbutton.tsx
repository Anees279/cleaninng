import React from "react";
import { Button, Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const encodedMessage = message ? encodeURIComponent(message) : "";
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 9999,  // Ensures the button stays above other content
      }}
    >
      <Button
        variant="contained"
        color="success"
        sx={{
          borderRadius: "50%",
          minWidth: "60px",
          height: "60px",
          padding: 0,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        }}
        onClick={handleClick}
      >
        <WhatsAppIcon sx={{ fontSize: "30px", color: "white" }} />
      </Button>
    </Box>
  );
};

export default WhatsAppButton;
