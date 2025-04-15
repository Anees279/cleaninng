
import React from "react";
import { Container, Typography, useMediaQuery, useTheme, Box } from "@mui/material";
import ResponsiveRootsBar from './component/navagationbar'; 

import bgImage from "./asserts/1-20250410T042209Z-001/1/3.jpg";


const CleaningHeroSection: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`, // update the path as needed
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,

        }}
      >
      <ResponsiveRootsBar/>

        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '80vh',
            backdropFilter: "brightness(0.95)", // optional: makes text more readable
          }}
        >

          <Typography
            sx={{
              fontFamily: '"DM Serif Display", serif',
              fontWeight: 900,
              color: "#212121",
              fontSize: { xs: "2.5rem", sm: "4rem", md: "80px" },
              mt: { xs: 0, md: 1 },
              maxWidth: "1000px",
            }}
          >
            Residential & commercial cleaning services that you can trust.
          </Typography>

          <Typography
            variant="h6"
            component="p"
            sx={{
              color: "#212121",
              textAlign: "justify",
              lineHeight: 1.8,
              maxWidth: "600px",
              ml: isLargeScreen ? "auto" : 0,
            }}
          >
            We take pride in delivering top-quality cleaning services tailored to
            meet your needs. Whether it’s industrial facilities, residential
            spaces, or garden areas, our professional team ensures every corner is
            spotless. With attention to detail and a commitment to excellence, we
            create clean, safe, and welcoming environments.
          </Typography>
        </Container>
      </Box>

      {/* Remaining Sections */}
      <Box>
       
      </Box>
      <Box sx={{ height: '50vh' }} />
      
            {/* Scrollable About Section */}
            <Box sx={{ py: 18, backgroundColor: 'transparent', position: 'relative', zIndex: 1 }}>
             
            </Box>
    </>
  );
};

export default CleaningHeroSection;
