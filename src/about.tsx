
import React from 'react';
import { Box, Typography, Container, useMediaQuery } from '@mui/material';
import ResponsiveRootsBar from './component/navagationbar';

import image5 from './asserts/1-20250410T042209Z-001/1/2.jpg';
import {AboutU} from './aboutus1'
export const About: React.FC = () => {
  const isLargeScreen = useMediaQuery('(min-width:600px)');

  return (
    <>
      {/* Fixed Hero Section */}
      <Box
        sx={{
          position: 'fixed',
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
        {/* Content above background (like nav and hero text) */}
        <Box sx={{ zIndex: 10 }}>
          <ResponsiveRootsBar />

          <Container
            maxWidth="lg"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '70vh',
            //   px: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: '"DM Serif Display", serif',
                fontWeight: 900,
                color: 'black',
                fontSize: { xs: '2.5rem', sm: '4rem', md: '80px' },
                mt: { xs: 0, md: 1 },
                maxWidth: '1000px',
              }}
            >
              About US
            </Typography>

            <Typography
              variant="h6"
              component="p"
              sx={{
                color: 'black',
                textAlign: 'left',
                lineHeight: 1.8,
                maxWidth: '800px',
              }}
            >
              We offer a wide range of cleaning services tailored to your needs—
              whether <span style={{ color: 'red' }}>for your home office, or construction site</span>,
              let us help make your spaces cleaner, safer, and more inviting.
            </Typography>
          </Container>
        </Box>
      </Box>

      {/* Spacer to offset full screen fixed hero */}
      <Box sx={{ height: '50vh' }} />

      {/* Scrollable About Section */}
      <Box sx={{ py: 18, backgroundColor: 'transparent', position: 'relative', zIndex: 1 }}>
       
      </Box>
      {/* <AboutU/> */}
    </>
  );
};
