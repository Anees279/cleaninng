
import React from 'react';
import { Box, Typography, Container, useMediaQuery, colors } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import ResponsiveRootsBar from './component/navagationbar';



import image5 from './asserts/1-20250410T042209Z-001/1/2.jpg';

import { ServicesCard } from './Servicecard';
import { color } from 'framer-motion';
export const Services: React.FC = () => {
  const isLargeScreen = useMediaQuery('(min-width:600px)');

  

  return (
    <>
      {/* Hero Section */}
      <Box
       sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        paddingTop: { xs: 0, md: 2.2 },

        zIndex: 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${image5})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4, // 👈 Adjust opacity here
          zIndex: -1,
        }
      }}
      >
      <ResponsiveRootsBar/>

        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: { xs: 0, md: 12 },
            height: {
                xs: '70vh',             // small screens
                md: 'calc(50vh - 64px)' // medium and above
              },
            // backdropFilter: "brightness(0.9)", // optional: makes text more readable
          }}
        >

          <Typography
            sx={{
              fontFamily: '"DM Serif Display", serif',
              fontWeight: 900,
             color: '#008080',
              fontSize: { xs: "2.5rem", sm: "4rem", md: "70px" },
              mt: { xs: 0, md: 1 },
              // maxWidth: "1000px",
              textAlign: { xs: "center", md: "center" },
            }}
          >
            {/* Cleaning, Customized for You */}
            Our Services
          </Typography>

          <Typography
            variant="h6"
            component="p"
            sx={{
              color: "black",
              textAlign: "center",
              lineHeight: 1.8,
              alignItems: "center",
              // maxWidth: "700px",
            //   ml: isLargeScreen ? "auto" : 0,
            }}
          >
             We are committed to the best quality in <span style={{ color: "red" }}>industrial cleaning, residential cleaning, and garden cleaning</span> .
             Soft padding is not comfortable; unless it carries structure, it is just weakly supported and lacking flow.
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
    mt: {xs: 5, md: 15 },
    animation: "bounce 1s infinite",
  }}
>
  <KeyboardArrowDownIcon sx={{ fontSize: 50, color: "red" }} />
</Box>
        </Container>
      </Box>
    
      {/* Services Section */}
     
       <Box sx={{ height:{xs:'70vh' , md: '60vh'} }} />
      
            {/* Scrollable About Section */}
            {/* <Box sx={{ py: 18, backgroundColor: 'transparent', position: 'relative', zIndex: 1 , }}> */}
             
            {/* </Box> */} 
            {/* <ServicesCard/> */}
    </>
  );
};
