import React from "react";
import { Box, Typography, Container, Breadcrumbs, Link } from "@mui/material";
import backgroundImage from "../asserts/About/Photo/1.png"; // Replace with actual path
import ResponsiveRootsBar from "../component/navagationbar";
import AboutUSMain from "./aboutusmain"; 
import OurMession from "./ourmession"// Replace with actual path
import StatisticsSection from "./statetaics"; // Replace with actual path
const AboutUs: React.FC = () => {
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
              fontFamily: "Urbanist",
            }}
          >
            About Us
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
            <Typography color="#fff">About Us</Typography>
          </Breadcrumbs>
        </Container>
      </Box>
      <AboutUSMain />
      <OurMession />
      <StatisticsSection />
      {/* Add any other sections or components here */}
    </>
  );
};

export default AboutUs;
