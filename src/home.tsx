
import React from "react";
import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ResponsiveRootsBar from './component/navagationbar'; 


import CleaningForm from "./component/cleaningfrom";
import bgImage from "./asserts/1-20250410T042209Z-001/1/happy-young-cleaners-with-mop-and-spray-bottle-smiling-at-camera-while-cleaning-office.jpg";
import { color } from "framer-motion";

const CleaningHeroSection: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          paddingTop: { xs: 0, md: 2.2 },
          justifyContent: "center",
          alignItems: "center",
          zIndex: 0,
          '&::before': {
            position: 'absolute',
            content: '""',
            top: 0,
            left: 0,
            width: '100%',
            height: {xs: "100%", md: "100%"},
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            objectFit: 'cover',
            backgroundPosition: {
              xs: 'center',      // for small devices (xs)
              md: 'top center',  // for medium and up (md+)
            },
            backgroundRepeat: 'no-repeat',
            opacity: 0.7, // 👈 Adjust opacity here
            zIndex: -1,
              px: 0 

          }
        }}
      >
        <ResponsiveRootsBar />

        {/* Content above background (like nav and hero text) */}
        <Container maxWidth="xl" >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 0,
              overflow: "hidden",
              padding: { xs: 0, md: 4 },
            }}
          >
            {/* Left Side Text */}
            <Box sx={{ flex: 1, textAlign: { xs: "justify", md: "center" } }}>
              <Typography
                sx={{
                  fontFamily: '"DM Serif Display", serif',
                  fontWeight: 900,
                  color: "#008080",
                  fontSize: { xs: "1.5rem", sm: "4rem", md: "52px" },
                  maxWidth: "650px",
                  textAlign: { xs: "center", md: "left" },

                }}
              >
                Residential <span style={{ color: "red" }}>&</span> Commercial
                cleaning services that you can trust.
              </Typography>

              <Typography
                variant="h6"
                component="p"
                sx={{
                  color: "black",
                  textAlign: { xs: "justify", md: "left" },
                  lineHeight: 1.7,
                  maxWidth: "700px",
                  mt: 2,
                  fontFamily: '"DM Serif Display", serif',

                }}
              >
                We take pride in delivering top-quality cleaning services
                tailored to meet your needs. <span style={{ color: "red" }}>Whether it’s industrial facilities,
                residential spaces, or garden areas,</span> our professional team ensures
                every corner is spotless. With attention to detail and a
                commitment to excellence, we create clean, safe, and welcoming
              </Typography>
              <style>
  {`
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(10px);
      }
      60% {
        transform: translateY(5px);
      }
    }
  `}
</style>

              <Box
  sx={{
    display: "flex",
    justifyContent: { xs: "center", md: "center" },
    mt: {xs: 5, md: 8 },
    animation: "bounce 1s infinite",
  }}
>
  <KeyboardArrowDownIcon sx={{ fontSize: 50, color: "red" }} />
</Box>

            </Box> {/* Closing the unclosed Box */}

            {/* Right Side Form */}
            <CleaningForm />
          </Box>
        </Container>
      </Box>
       <Box sx={{ height: {xs:'40vh' ,md: '60vh'}}} />
      
            {/* Scrollable About Section */}
            <Box sx={{ py: 18, backgroundColor: 'transparent', position: 'relative', zIndex: -1 }}>
             
            </Box>
    </>
  );
};

export default CleaningHeroSection;
