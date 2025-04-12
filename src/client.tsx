
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

// Import your logo images from local assets
import logo1 from './asserts/client-logo-1.webp';
import logo2 from './asserts/client-logo-2.webp';
import logo3 from './asserts/logo-black.svg';
import logo4 from './asserts/client-logo-5.webp';

const clientLogos = [logo1, logo2, logo3, logo4];

export const Clients: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 3, md: 10 }, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        {/* Clients Heading */}
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            // mb: 6,
            fontFamily: '"DM Serif Display", serif',
            color: '#424242',
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
              color: '#424242',
            }}
          >
            Why Choose Us?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 1200,
              margin: '0 auto',
              color: '#555',
              fontSize: '1.125rem',
              lineHeight: 1.8,
            }}
          >
           <strong>We are the right team for your business. We have the expertise and knowledge to offer impartial advice and services at an honest price.</strong> 
            <br /><br />
            With us you’ll feel heard. We listen to our client requirements and then select the right solution that fits. We care for your business as our own. We take a sincere interest in it and genuinely want to help your company reach its potential.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
