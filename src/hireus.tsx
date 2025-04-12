import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export const HireUs: React.FC = () => {
  return (
    <Box sx={{ py: 18, backgroundColor: '#FFF' }}>
      <Container maxWidth="lg">
        {/* Main Heading */}
        <Typography
          variant="h3"
          sx={{
            textAlign: 'left',
            fontWeight: 700,
            mb: 6,
            // padding: 2,
            fontFamily: '"DM Serif Display", serif',
            color: '#424242',
          }}
        >
          Hire Us For
        </Typography>

        {/* Section Boxes */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
          }}
        >
          {/* Design */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#212121' }}>
              Design
            </Typography>
            <Typography sx={{ textAlign: 'justify', color: '#555' }}>
              Our web design team has ample years of experience in the core areas of design to build a website that you need.
            </Typography>
          </Box>

          {/* Development */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#212121' }}>
              Development
            </Typography>
            <Typography sx={{ textAlign: 'justify', color: '#555' }}>
              Looking out for customized solutions for your websites? Our team will develop and deliver a website that’ll serve your purpose.
            </Typography>
          </Box>

          {/* Marketing */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#212121' }}>
              Marketing
            </Typography>
            <Typography sx={{ textAlign: 'justify', color: '#555' }}>
              With researched digital marketing, we will ensure that new customers and clients are able to find your business.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
