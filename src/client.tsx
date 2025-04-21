import React from 'react';
import { Box, Typography, Container } from '@mui/material';

// Import your logo images from local assets
import logo1 from './asserts/download (1).jpg';
import logo2 from './asserts/download.jpg';
import logo3 from './asserts/download (1).png';
import logo4 from './asserts/download.png';

const clientLogos = [logo1, logo2, logo3, logo4];

export const Clients: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 3, md: 10 }, backgroundColor: '#f9f9f9',position: 'relative', zIndex: 1  }}>
      <Container maxWidth="xl">
        {/* Clients Heading */}
        <Typography
          variant="h3"
          sx={{
            textAlign: { xs: 'left', md: 'center' },
            fontWeight: 700,
            fontFamily: '"DM Serif Display", serif',
            color: '#008080',
            mb: 3,
            fontSize: { xs: '1.7rem', md: '50px' },

          }}
        >
          Clients We’ve Worked With
        </Typography>

        {/* Logos Row */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 4,
          }}
        >
          {clientLogos.map((logo, index) => (
            <Box
              key={index}
              component="img"
              src={logo}
              alt={`Client logo ${index + 1}`}
              sx={{
                height: { xs: 50, md: 70 },
                maxWidth: 150,
                objectFit: 'contain',
              }}
            />
          ))}
        </Box>

        {/* Why Choose Us Section */}
        <Box sx={{ mt: { xs: 8, md: 10 }, textAlign: 'left' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontFamily: '"DM Serif Display", serif',
              color: 'black',
              fontSize: { xs: '2rem', md: '50px' },

            }}
          >
            Why Choose Us?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 1500,
              margin: '0 auto',
              color: '#555',
              fontSize: '1.125rem',
              lineHeight: 1.8,
            }}
          >
            <strong>We are your trusted partner in cleanliness. With years of experience and a trained team, we deliver thorough and reliable cleaning services every time.</strong>
            <br /><br />
            From residential to commercial spaces, we tailor our services to your specific needs using eco-friendly products and modern equipment. Our commitment to detail, punctuality, and customer satisfaction sets us apart. When you choose us, you're choosing a spotless experience and peace of mind.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
