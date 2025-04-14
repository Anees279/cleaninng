
import React from 'react';
import { Box, Typography, Container, useMediaQuery, colors } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import ConstructionIcon from '@mui/icons-material/Construction';
import ParkIcon from '@mui/icons-material/Park';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ResponsiveRootsBar from './component/navagationbar';

import image1 from './asserts/3-20250410T042226Z-001/3/1.jpg';
import image2 from './asserts/3-20250410T042226Z-001/3/2.jpg';
import image3 from './asserts/3-20250410T042226Z-001/3/3.jpg';
import image4 from './asserts/3-20250410T042226Z-001/3/2.jpg';

import image5 from './asserts/1-20250410T042209Z-001/1/2.jpg';


export const Services: React.FC = () => {
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
        icon: <CleaningServicesIcon  sx={{ fontSize: 40, color: '#FF9800' }} />,
      },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${image5})`, // update the path as needed
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
        }}
      >
      <ResponsiveRootsBar/>

        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: {
                xs: '50vh',             // small screens
                md: 'calc(80vh - 64px)' // medium and above
              },
            px: 2,
            // backdropFilter: "brightness(0.9)", // optional: makes text more readable
          }}
        >

          <Typography
            sx={{
              fontFamily: '"DM Serif Display", serif',
              fontWeight: 900,
              color: "black",
              fontSize: { xs: "2.5rem", sm: "4rem", md: "80px" },
              mt: { xs: 0, md: 1 },
              maxWidth: "1000px",
            }}
          >
            Our Services
          </Typography>

          <Typography
            variant="h6"
            component="p"
            sx={{
              color: "black",
              textAlign: "left",
              lineHeight: 1.8,
              alignItems: "left",
              maxWidth: "800px",
            //   ml: isLargeScreen ? "auto" : 0,
            }}
          >
             We offer a wide range of cleaning services tailored to your needs—whether <span style={{ color: "yellow" }}>for your home office, or construction site.</span>,
     Let us help make your spaces cleaner, safer, and more
    inviting.
          </Typography>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 18, backgroundColor: '#E6EAF8' }}>
        <Container maxWidth="xl">
        
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
                    mb: 2,
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
    </>
  );
};
