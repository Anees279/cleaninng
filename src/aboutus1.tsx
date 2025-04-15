import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import aboutImage from './asserts/3-20250410T042226Z-001/3/3.jpg';

export const AboutU: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FFF9C4',
        py: { xs: 6, md: 10 },
        position: 'relative', zIndex: 1 
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 6,
          }}
        >
          {/* Left - Text Content */}
          <Box sx={{ flex: 1, color: '#424242' }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, mb: 3, fontFamily: 'Poppins, sans-serif' }}
            >
              About Us
            </Typography>
            <Typography sx={{ mb: 2, fontSize: '1.1rem', textAlign: 'justify' }}>
              We are a team of dedicated cleaning professionals with over a decade of experience in delivering top-tier residential, commercial, and post-construction cleaning services.
            </Typography>

            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mt: 4, fontFamily: 'Poppins, sans-serif' }}
            >
              Mission.
            </Typography>
            <Typography sx={{ textAlign: 'justify', mb: 2 }}>
              Our mission is to provide exceptional cleaning services that create healthier environments for our clients — whether it’s their home, office, or construction site. We focus on affordability, efficiency, and eco-friendly practices to ensure complete customer satisfaction.
            </Typography>

            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mt: 4, fontFamily: 'Poppins, sans-serif' }}
            >
              Vision.
            </Typography>
            <Typography sx={{ textAlign: 'justify' }}>
              Our vision is to be the most trusted name in the cleaning industry by setting new standards in service quality, customer care, and sustainability. We aim to continuously evolve our practices to create cleaner, safer, and more welcoming spaces for everyone we serve.
            </Typography>
          </Box>

          {/* Right - Image with Hover Effect */}
          <motion.img
  src={aboutImage}
  alt="About us"
  style={{
    flex: 1,
    width: '100%',
    maxHeight: 400,
    borderRadius: 16,
    boxShadow: '0px 8px 20px rgba(0,0,0,0.15)',
    objectFit: 'cover',
    marginTop: '20px', // add top margin if you want it to float a bit
  }}
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
/>
          
        </Box>
      </Container>
    </Box>
  );
};
