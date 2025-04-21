// import React from 'react';
// import { Box, Typography, Container, useMediaQuery } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
// import BusinessIcon from '@mui/icons-material/Business';
// import ConstructionIcon from '@mui/icons-material/Construction';
// import ParkIcon from '@mui/icons-material/Park';
// import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

// import image1 from './asserts/3-20250410T042226Z-001/3/1.jpg';
// import image2 from './asserts/3-20250410T042226Z-001/3/2.jpg';
// import image3 from './asserts/3-20250410T042226Z-001/3/3.jpg';

// export const ServicesCard: React.FC = () => {
//   const isLargeScreen = useMediaQuery('(min-width:600px)');

//   const services = [
//     {
//       title: 'Residential Cleaning',
//       description:
//         'We provide thorough and tailored cleaning solutions for your home, ensuring a spotless and healthy environment.',
//       image: image1,
//       icon: <HomeIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
//     },
//     {
//       title: 'Commercial Cleaning',
//       description:
//         'Our commercial cleaning services maintain your business premises clean, professional, and welcoming for clients and staff.',
//       image: image2,
//       icon: <BusinessIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
//     },
//     {
//       title: 'Construction Cleaning',
//       description:
//         'From dust to debris, we ensure post-construction sites are clean, safe, and ready for use.',
//       image: image3,
//       icon: <ConstructionIcon sx={{ fontSize: 40, color: '#FF9800' }} />,
//     },
//     {
//       title: 'Landscape Cleaning',
//       description:
//         'Our outdoor cleaning services bring neatness and order to your garden or landscape areas.',
//       image: image2,
//       icon: <ParkIcon sx={{ fontSize: 40, color: '#81C784' }} />,
//     },
//     {
//       title: 'Hospital Cleaning',
//       description:
//         'Our outdoor cleaning services bring neatness and order to your garden or landscape areas.',
//       image: image3,
//       icon: <LocalHospitalIcon sx={{ fontSize: 40, color: 'RED' }} />,
//     },
//     {
//       title: 'Floor Cleaning',
//       description:
//         'Our outdoor cleaning services bring neatness and order to your garden or landscape areas.',
//       image: image1,
//       icon: <CleaningServicesIcon sx={{ fontSize: 40, color: '#FF9800' }} />,
//     },
//     {
//       title: 'Hospital Cleaning',
//       description:
//         'Our outdoor cleaning services bring neatness and order to your garden or landscape areas.',
//       image: image3,
//       icon: <LocalHospitalIcon sx={{ fontSize: 40, color: 'RED' }} />,
//     },
//     {
//       title: 'Floor Cleaning',
//       description:
//         'Our outdoor cleaning services bring neatness and order to your garden or landscape areas.',
//       image: image1,
//       icon: <CleaningServicesIcon sx={{ fontSize: 40, color: '#FF9800' }} />,
//     },
//   ];

//   return (
//     <>
//       {/* Hero Section */}

//       {/* Services Section */}
//       <Box sx={{ py: { md: 10, xs: 5 }, backgroundColor: '#E6EAF8', position: 'relative', zIndex: 1 }}>
//         <Container maxWidth="xl">
//           {/* Heading */}
//           {/* <Typography
//             variant="h2"
//             sx={{
//               fontWeight: 700,
//               textAlign: 'center',
//               alignItems: 'center',
//               color: '#008080',
//               py: 2,
//                 fontFamily: '"DM Serif Display", serif',
//                 fontSize: { xs: '2rem', md: '50px' },

//             }}
//           >
//             Our Services
//           </Typography> */}

//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: { xs: 'column', md: 'row' },
//               flexWrap: 'wrap',
//               gap: 2,
//             }}
//           >
//             {services.map((service, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   flex: '90% 90% 22%',
//                   border: '2px solid #e0e0e0',
//                   borderRadius: 2,
//                   backgroundColor: '#FFFFFF',
//                   p: 1.8,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     overflow: 'hidden',
//                     borderRadius: 2,
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src={service.image}
//                     alt={service.title}
//                     sx={{
//                       width: '100%',
//                       objectFit: 'cover',
//                       transition: 'transform 0.8s ease-in-out',
//                       borderRadius: 2,
//                       '&:hover': {
//                         transform: 'scale(1.1)',
//                       },
//                     }}
//                   />
//                 </Box>

//                 <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
//                   {service.icon}
//                 </Box>

//                 <Typography
//                   variant="h5"
//                   sx={{ fontWeight: 600, mb: 1, color: '#424242', textAlign: 'center' , fontFamily: '"DM Serif Display", serif' , fontSize: "20px" }}
//                 >
//                   {service.title}
//                 </Typography>
//                 <Typography sx={{ textAlign: 'justify', color: '#555' }}>
//                   {service.description}
//                 </Typography>
//               </Box>
//             ))}
//           </Box>
//         </Container>
//       </Box>

//       {/* Scrollable About Section */}
     
//     </>
//   );
// };

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import ConstructionIcon from '@mui/icons-material/Construction';
import ParkIcon from '@mui/icons-material/Park';

import image1 from './asserts/3-20250410T042226Z-001/3/1.jpg';
import image2 from './asserts/3-20250410T042226Z-001/3/2.jpg';
import image3 from './asserts/3-20250410T042226Z-001/3/3.jpg';
import image4 from './asserts/3-20250410T042226Z-001/3/2.jpg';

export const ServicesCard: React.FC = () => {
  const services = [
    {
      title: 'Residential Cleaning',
      description:
        'Our web design team has ample years of experience in the core areas of design to build a website that you need.',
      image: image1,
      icon: <HomeIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
    },
    {
      title: 'Commercial Cleaning',
      description:
        'Looking out for customized solutions for your websites? Our team will develop and deliver a website that’ll serve your purpose.',
      image: image2,
      icon: <BusinessIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
    },
    {
      title: 'Construction Cleaning',
      description:
        'With researched digital marketing, we will ensure that new customers and clients are able to find your business.',
      image: image3,
      icon: <ConstructionIcon sx={{ fontSize: 40, color: '#FF9800' }} />,
    },
    {
      title: 'Landscape Cleaning',
      description:
        'With researched digital marketing, we will ensure that new customers and clients are able to find your business.',
      image: image4,
      icon: <ParkIcon sx={{ fontSize: 40, color: '#81C784' }} />,
    },
    {
      title: 'Residential Cleaning',
      description:
        'Our web design team has ample years of experience in the core areas of design to build a website that you need.',
      image: image1,
      icon: <HomeIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
    },
    {
      title: 'Commercial Cleaning',
      description:
        'Looking out for customized solutions for your websites? Our team will develop and deliver a website that’ll serve your purpose.',
      image: image2,
      icon: <BusinessIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
    },
    {
      title: 'Construction Cleaning',
      description:
        'With researched digital marketing, we will ensure that new customers and clients are able to find your business.',
      image: image3,
      icon: <ConstructionIcon sx={{ fontSize: 40, color: '#FF9800' }} />,
    },
    {
      title: 'Landscape Cleaning',
      description:
        'With researched digital marketing, we will ensure that new customers and clients are able to find your business.',
      image: image4,
      icon: <ParkIcon sx={{ fontSize: 40, color: '#81C784' }} />,
    },
  ];

  return (
    <Box sx={{ py: {md:5 , xs: 1}, backgroundColor: '#FFF',position: 'relative', zIndex: 1 , textAlign: 'center'}}>
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

        {/* Services Boxes */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
          }}
        >
         {services.map((service, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    style={{ flex: 1 }}
  >
      <Box
        sx={{
          border: '2px solid #e0e0e0',
          borderRadius: 2,
          p: 1,
          height: '100%',
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
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        />
        {/* Logo/Icon */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
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
