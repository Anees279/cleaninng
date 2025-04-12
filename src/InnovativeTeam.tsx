import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import image1 from './asserts/2-20250410T042223Z-001/2/1.jpg'; // Replace with your actual image paths
import image2 from './asserts/2-20250410T042223Z-001/2/2.jpg';
import image3 from './asserts/2-20250410T042223Z-001/2/3.jpg';

export const InnovativeTeam: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Heading & Paragraph */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: {xs: 'column', md: 'row'},
            gap: 3,
            textAlign: 'left',
            mb: 6,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontFamily: '"DM Serif Display", serif',
              color: '#2C2927',
            }}
          >
            Highly Motivated Team with Innovative Ideas
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: '#555',
              maxWidth: 800,
            }}
          >
            We love what we do and therefore come up with the best possible solutions to help you set and grow
            online quickly. We are your trusted partners you can count on.
          </Typography>
        </Box>

        {/* Image Row */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 4,
          }}
        >
          {[image1, image2, image3].map((img, index) => (
            <Box
              key={index}
              component="img"
              src={img}
              alt={`Team creativity ${index + 1}`}
              sx={{
                flex: '1 1 30%',
                maxWidth: { xs: '100%', sm: '48%', md: '30%' },
                height: 'auto',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 2,
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
