import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import aboutImage from './asserts/3-20250410T042226Z-001/3/3.jpg'; // Replace with your actual image path

export const AboutUs: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FFF9C4', // Light yellow
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 6,
          }}
        >
          {/* Left - Text Content */}
          <Box sx={{ flex: 1 , color: '#424242'}}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, mb: 3, fontFamily: 'Poppins, sans-serif' }}
            >
              About Us
            </Typography>
            <Typography sx={{ mb: 2, fontSize: '1.1rem', textAlign: 'justify', }}>
              We are a team of 40 web experts with over 12 years of experience in website building and marketing to help businesses grow online.
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mt: 4, fontFamily: 'Poppins, sans-serif' }}
            >
              Mission.
            </Typography>
            <Typography sx={{ textAlign: 'justify', mb: 2 }}>
              Our mission is to empower our clients to use the internet to its full potential by providing affordable, effective, custom design and marketing solutions.
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mt: 4, fontFamily: 'Poppins, sans-serif' }}
            >
              Vision.
            </Typography>
            <Typography sx={{ textAlign: 'justify' }}>
              Our vision is to become a global leader in providing the best and unique web design and marketing services to improve our client’s productivity and business strength.
            </Typography>
          </Box>

          {/* Right - Image */}
          <Box
            component="img"
            src={aboutImage}
            alt="About us"
            sx={{
              flex: 1,
              width: '100%',
              borderRadius: 4,
              boxShadow: 3,
              maxHeight: 400,
              objectFit: 'cover',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};
