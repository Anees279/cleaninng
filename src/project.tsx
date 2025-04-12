import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import projectImage from './asserts/1-20250410T042209Z-001/1/1.jpg'; // Replace with your image path

export const ProjectCallToAction: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#2C2927', mt: { md: 9 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            backgroundColor: '#FFF9C4',
            mb: 10,
            mt: { md: -9 },
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          {/* Text Section */}
          <Box
            sx={{
              flex: 1,
              px: { xs: 2, md: 3 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontFamily: '"DM Serif Display", serif',
                color: '#333',
              }}
            >
              Need Professional Cleaning?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: '#555',
              }}
            >
              Whether it's your home, office, or construction site, we provide top-notch cleaning services tailored to your needs. Let’s discuss how we can make your space spotless.
            </Typography>
            <Button variant="contained" color="primary" size="large" sx={{ mt: 6 }}>
              Connect with Us
            </Button>
          </Box>

          {/* Image Section */}
          <Box
            component="img"
            src={projectImage}
            alt="Project illustration"
            sx={{
              flex: 1,
              maxWidth: 800,
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </Box>

        {/* Additional Heading + Paragraph */}
        <Box
          sx={{
            textAlign: 'left',
            mb: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontFamily: '"DM Serif Display", serif',
              color: '#FFF9C4',
            }}
          >
            Let Us Make Your Space Shine
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: '#eee',
              maxWidth: '100%',
            }}
          >
            With our expert cleaning team by your side, you don’t have to worry about dirt or mess. We take pride in transforming every space into a cleaner, healthier environment. Whether it’s a one-time deep clean or regular maintenance, we’re here to ensure your satisfaction every step of the way.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
