import React from "react";
import { Box, Typography, Container, Breadcrumbs, Link } from "@mui/material";
import backgroundImage from "../asserts/services/services.png"; // Replace with actual path
import ResponsiveRootsBar from "../component/navagationbar";
import MainServices from "./mainServices"; 
import Ourskill from "./ourSkill"// Replace with actual path

import HowItWorks from "../About/howitwork" // Replace with actual path
import Packages from "../packages"; // Replace with actual path
import FaqSection from "./faq"; // Replace with actual path
const Services: React.FC = () => {
  return (
    <>
      <ResponsiveRootsBar />
      <Box
        sx={{
          position: "relative", // for overlay positioning
          width: "100%",
          height: {md:400 , xs:"auto"}, // corrected height from string to number
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: { xs: "center", md: "top" },
          py: { xs: 8, md: 10 },
          color: "#fff",
          overflow: "hidden",
        }}
      >
        {/* Black overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.4)", // black with 40% opacity
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 32, md: 64 },
              fontWeight: 400,
              mb: 2,
              mt: { xs: 0, md: 10 },
              fontFamily: "Urbanist",
            }}
          >
           Services
          </Typography>

          <Breadcrumbs
            separator="/"
            sx={{
              justifyContent: "center",
              display: "flex",
              color: "#fff",
              
            }}
          >
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="#fff">Services</Typography>
          </Breadcrumbs>
        </Container>
      </Box>
     <MainServices />
     <Ourskill />
      <HowItWorks />
    <Packages />
    <FaqSection />
      
    </>
  );
};

export default Services;
