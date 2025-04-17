
import React from 'react';
import { Box, Typography, Container, useMediaQuery, colors } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';

import ResponsiveRootsBar from './component/navagationbar';



import image5 from './asserts/1-20250410T042209Z-001/1/2.jpg';

import { ServicesCard } from './Servicecard';
export const Services: React.FC = () => {
  const isLargeScreen = useMediaQuery('(min-width:600px)');

  

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundImage: `url(${image5})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      >
      <ResponsiveRootsBar/>

        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: {
                xs: '70vh',             // small screens
                md: 'calc(80vh - 64px)' // medium and above
              },
            // backdropFilter: "brightness(0.9)", // optional: makes text more readable
          }}
        >

          <Typography
            sx={{
              fontFamily: '"DM Serif Display", serif',
              fontWeight: 900,
             color: '#2C2927',
              fontSize: { xs: "2.5rem", sm: "4rem", md: "80px" },
              mt: { xs: 0, md: 1 },
              maxWidth: "1000px",
            }}
          >
            Our Services
          </Typography>

          <Typography
            variant="h6"
            component="p"
            sx={{
              color: "black",
              textAlign: "left",
              lineHeight: 1.8,
              alignItems: "left",
              maxWidth: "800px",
            //   ml: isLargeScreen ? "auto" : 0,
            }}
          >
             We offer a wide range of cleaning services tailored to your needs—whether <span style={{ color: "red" }}>for your home office, or construction site.</span>,
     Let us help make your spaces cleaner, safer, and more
    inviting.
          </Typography>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: {md: 0 , xs: 0}, backgroundColor: '#E6EAF8' }}>
        <Container maxWidth="xl">
        
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              flexWrap: 'wrap',


              gap: 2,
            }}
          >
           
          </Box>
        </Container>
      </Box>
      <Box sx={{ height: '50vh', m:'0' }} />
      
            {/* Scrollable About Section */}
            <Box sx={{ py: 18, backgroundColor: 'transparent', position: 'relative', zIndex: 1 , }}>
             
            </Box>
            {/* <ServicesCard/> */}
    </>
  );
};
