import React from 'react';
import { Box, Typography, Container, useMediaQuery } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import ConstructionIcon from '@mui/icons-material/Construction';
import ParkIcon from '@mui/icons-material/Park';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

import image1 from './asserts/3-20250410T042226Z-001/3/1.jpg';
import image2 from './asserts/3-20250410T042226Z-001/3/2.jpg';
import image3 from './asserts/3-20250410T042226Z-001/3/3.jpg';

export const ServicesCard: React.FC = () => {
  const isLargeScreen = useMediaQuery('(min-width:600px)');

  const services = [
    {
      title: 'Residential Cleaning',
      description:
        'We provide thorough and tailored cleaning solutions for your home, ensuring a spotless and healthy environment.',
      image: image1,
      icon: <HomeIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
    },
    {
      title: 'Commercial Cleaning',
      description:
        'Our commercial cleaning services maintain your business premises clean, professional, and welcoming for clients and staff.',
      image: image2,
      icon: <BusinessIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
    },
    {
      title: 'Construction Cleaning',
      description:
        'From dust to debris, we ensure post-construction sites are clean, safe, and ready for use.',
      image: image3,
      icon: <ConstructionIcon sx={{ fontSize: 40, color: '#FF9800' }} />,
    },
    {
      title: 'Landscape Cleaning',
      description:
        'Our outdoor cleaning services bring neatness and order to your garden or landscape areas.',
      image: image2,
      icon: <ParkIcon sx={{ fontSize: 40, color: '#81C784' }} />,
    },
    {
      title: 'Hospital Cleaning',
      description:
        'Our outdoor cleaning services bring neatness and order to your garden or landscape areas.',
      image: image3,
      icon: <LocalHospitalIcon sx={{ fontSize: 40, color: 'RED' }} />,
    },
    {
      title: 'Floor Cleaning',
      description:
        'Our outdoor cleaning services bring neatness and order to your garden or landscape areas.',
      image: image1,
      icon: <CleaningServicesIcon sx={{ fontSize: 40, color: '#FF9800' }} />,
    },
  ];

  return (
    <>
      {/* Hero Section */}

      {/* Services Section */}
      <Box sx={{ py: { md: 1, xs: 1 }, backgroundColor: '#E6EAF8', position: 'relative', zIndex: 1 }}>
        <Container maxWidth="xl">
          {/* Heading */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              textAlign: 'left',
              color: '#424242',
              py: 5,
                fontFamily: '"DM Serif Display", serif',
            }}
          >
            Our Services
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            {services.map((service, index) => (
              <Box
                key={index}
                sx={{
                  flex: '1 1 22%',
                  border: '2px solid #e0e0e0',
                  borderRadius: 2,
                  backgroundColor: '#FFFFFF',
                  p: 2,
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    borderRadius: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.8s ease-in-out',
                      borderRadius: 2,
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                  {service.icon}
                </Box>

                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, mb: 1, color: '#424242', textAlign: 'center' }}
                >
                  {service.title}
                </Typography>
                <Typography sx={{ textAlign: 'justify', color: '#555' }}>
                  {service.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Scrollable About Section */}
     
    </>
  );
};
