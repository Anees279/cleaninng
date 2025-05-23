import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image1 from "../asserts/services/Image1.png";
import Image2 from "../asserts/services/Image2.png";
import Image3 from "../asserts/services/Image3.png";

const ContactSection: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#F5F2F7", py: 6, px: 2 , borderRadius: 5 }}>
      {/* Top Images */}
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          mb: 4,
        }}
      >
        <Box sx={{ zIndex: 1, position: "relative", left: 24 }}>
          <img src={Image1} alt="icon1" width={70} height={70} />
        </Box>
        <Box sx={{ zIndex: 2, mx: -.001 }}>
          <img src={Image2} alt="icon2" width={80} height={80} />
        </Box>
        <Box sx={{ zIndex: 1, position: "relative", right: 18,  }}>
          <img src={Image3} alt="icon3" width={70} height={70} />
        </Box>
      </Box>

      {/* Heading */}
      <Typography
        sx={{
          fontSize: { xs: 28, md: 24 },
          fontWeight: 400,
          textAlign: "center",
          fontFamily: "Urbanist",
          color: "#008080",
        }}
      >
        Still Have Questions?
      </Typography>

      {/* Paragraph */}
      <Typography
        sx={{
          fontSize: 16,
          color: "#7F8490",
          fontFamily: "DM Sans",
          textAlign: "center",
          mt: 2,
          maxWidth: 390,
          mx: "auto",
        }}
      >
        Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut dolor
        felis quis. Sagittis a sapien pulvinar etiam.
      </Typography>

      {/* Contact Button */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0E5C67",
            color: "white",
            fontFamily: "Urbanist",
            fontWeight: 400,
            px: 4,
            py: 1.5,
            fontSize: 14,
            borderRadius: 30,
            textTransform: "none",
            '&:hover': {
              backgroundColor: "#D9315A",
            },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default ContactSection;
