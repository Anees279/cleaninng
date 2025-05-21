
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import ConstructionIcon from '@mui/icons-material/Construction';
import ParkIcon from '@mui/icons-material/Park';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import HotelIcon from '@mui/icons-material/Hotel';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

import image1 from './asserts/3-20250410T042226Z-001/3/1.jpg';
import image2 from './asserts/3-20250410T042226Z-001/3/2.jpg';
import image3 from './asserts/3-20250410T042226Z-001/3/3.jpg';
import image4 from './asserts/3-20250410T042226Z-001/3/2.jpg';
import image5 from './asserts/2-20250410T042223Z-001/2/pexels-cottonbro-7705344.jpg';
import image6 from './asserts/3-20250410T042226Z-001/3/4.jpg';
import image7 from './asserts/3-20250410T042226Z-001/3/5.jpg';
import image8 from './asserts/3-20250410T042226Z-001/3/6.jpg';
export const ServicesCard: React.FC = () => {
  const services = [
    {
      title: 'Residential Cleaning',
      description:
        'We provide top-notch cleaning for homes, apartments, and villas with attention to every detail.',
      image: image1,
      icon: <HomeIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
    },
    {
      title: 'Commercial Cleaning',
      description:
        'Professional office and commercial space cleaning to ensure a hygienic working environment.',
      image: image2,
      icon: <BusinessIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
    },
    {
      title: 'Post-Construction Cleaning',
      description:
        'We clear out the dust and debris after construction or renovation to make the space move-in ready.',
      image: image3,
      icon: <ConstructionIcon sx={{ fontSize: 40, color: '#FF9800' }} />,
    },
    {
      title: 'Landscape Cleaning',
      description:
        'Our team ensures outdoor areas like gardens and parks are kept clean, green, and welcoming.',
      image: image4,
      icon: <ParkIcon sx={{ fontSize: 40, color: '#81C784' }} />,
    },
    {
      title: 'Laundry & Ironing Services',
      description:
        'We offer professional laundry pickup, washing, and ironing services to save you time.',
      image: image5,
      icon: <LocalLaundryServiceIcon sx={{ fontSize: 40, color: '#3F51B5' }} />,
    },
    {
      title: 'Carpet & Sofa Cleaning',
      description:
        'Deep cleaning for carpets, sofas, and upholstery using eco-friendly and safe methods.',
      image: image6,
      icon: <CleaningServicesIcon sx={{ fontSize: 40, color: '#009688' }} />,
    },
    {
      title: 'Car Washing',
      description:
        'On-site car wash and detailing with a focus on convenience and high-quality service.',
      image: image7,
      icon: <LocalCarWashIcon sx={{ fontSize: 40, color: '#03A9F4' }} />,
    },
    {
      title: 'Hotel Housekeeping',
      description:
        'Outsource your hotel’s housekeeping to us and ensure rooms are always fresh and ready.',
      image: image8,
      icon: <HotelIcon sx={{ fontSize: 40, color: '#9C27B0' }} />,
    },
  ];

  return (
    <Box sx={{ py: { md: 5, xs: 1 }, backgroundColor: '#FFF', position: 'relative', zIndex: 1, textAlign: 'center' }}>
      <Container maxWidth="xl">
        {/* Main Heading */}
        <Typography
          variant="h3"
          sx={{
            textAlign: 'left',
            fontWeight: 700,
            mb: 3,
            fontFamily: '"DM Serif Display", serif',
            color: '#424242',
            fontSize: { xs: '2rem', md: '50px' },
          }}
        >
          Our Services
        </Typography>

        {/* Services Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr 1fr 1fr',
            },
            gap: 3,
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  border: '2px solid #e0e0e0',
                  borderRadius: 2,
                  p: 1,
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: '100%',
                    objectFit: 'cover',
                    transition: 'transform 1.3s ease-in-out',
                    transformOrigin: 'center',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
                {/* Icon */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1, mt: 1 }}>
                  {service.icon}
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#212121' }}>
                  {service.title}
                </Typography>
                <Typography sx={{ textAlign: 'justify', color: '#555' }}>
                  {service.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
