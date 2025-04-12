// import React from 'react';
// import { Box, Typography, Button, Container } from '@mui/material';
// import projectImage from './asserts/1-20250410T042209Z-001/1/1.jpg'; // Replace with your image path

// export const ProjectCallToAction: React.FC = () => {
//   return (
//     <Box  sx={{ backgroundColor: '#2C2927',mt: {md: 9} }}>
//       <Container maxWidth="lg">
//         <Box
//           sx={{
//             display: 'flex',
//             backgroundColor: '#FFF9C4',
//             mb: 10,
//             mt: {  md: -9 },
//             flexDirection: { xs: 'column', md: 'row' },
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             gap: 4,
//           }}
//         >
//           {/* Text Section */}
//                 <Box sx={{ flex: 1, 
//             px: { xs: 2, md: 3 },

//                  }}>
//             <Typography
//               variant="h4"
//               sx={{
//                 fontWeight: 700,
//                 mb: 2,
//                 fontFamily: '"DM Serif Display", serif',
//                 color: '#333',
//               }}
//             >
//               Have a Project in mind?
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 mb: 4,
//                 fontSize: '1.125rem',
//                 lineHeight: 1.8,
//                 color: '#555',
//               }}
//             >
//               We can help you bring your ideas to life. Let’s talk about what we can build and raise together.
//             </Typography>
//             <Button variant="contained" color="primary" size="large" sx={{ mt: 6 }}>
//               Connect with Us
//             </Button>
//           </Box>

//           {/* Image Section */}
//           <Box
//             component="img"
//             src={projectImage}
//             alt="Project illustration"
//             sx={{
//               flex: 1,
//               maxWidth: 800,
//               width: '100%',
//               height: 'auto',
//               objectFit: 'cover',
//             }}
//           />
//         </Box>
//       </Container>
//     </Box>
//   );
// };
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
              Have a Project in mind?
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
              We can help you bring your ideas to life. Let’s talk about what we can build and raise together.
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
    gap: 3, // Adjust gap as needed (theme spacing unit)
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
    Let us together build a flourishing business
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
    When connected with us, you aren’t growing your business alone. We have your back and put in our best
    to contribute to the growth of your entire team and organization. So, if you are looking for the right
    agency that’ll help you build a good online presence and bring in more conversions and revenue,
    we are right here!
  </Typography>
</Box>

      </Container>
    </Box>
  );
};
