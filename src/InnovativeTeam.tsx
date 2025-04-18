import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import image1 from './asserts/2-20250410T042223Z-001/2/1.jpg';
import image2 from './asserts/2-20250410T042223Z-001/2/2.jpg';
import image3 from './asserts/2-20250410T042223Z-001/2/3.jpg';
import image4 from './asserts/2-20250410T042223Z-001/2/1.jpg';

export const InnovativeTeam: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1  }}>
      <Container maxWidth="xl">
        {/* Heading & Paragraph */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
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
              color: '#008080',
              fontSize: { xs: '2rem', md: '50px' },
            }}
          >
            Dedicated Cleaning Experts with a Passion for Sparkle
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
            Our highly motivated team is committed to providing top-quality cleaning services that exceed expectations. We combine innovation with attention to detail, ensuring every space is left spotless and refreshed. With us, you're not just hiring a service — you're gaining a partner who truly cares.
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
          {[image1, image2, image3,image4].map((img, index) => (
            <Box
              key={index}
              component="img"
              src={img}
              alt={`Team at work ${index + 1}`}
              sx={{
                flex: '1 1 30%',
                maxWidth: { xs: '100%', sm: '48%', md: '22%' },
                height: 'auto',
                objectFit: 'object-cover',
                borderRadius: 2,
                boxShadow: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
