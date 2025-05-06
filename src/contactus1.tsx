import React from 'react';
import { Box, Typography, TextField, Button, Container, IconButton, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube, Phone , LocationOn} from '@mui/icons-material';

export const ContactU: React.FC = () => {
  return (
    <Box sx={{ color: '#2C2927', py: 6, backgroundColor: '#FFF9C4', position: 'relative', zIndex: 1 ,

    }}>
      <Container maxWidth="lg">
        {/* Top Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 4,
            mb: 4,
             fontFamily: '"DM Serif Display", serif',
// height: '100vh',
          }}
        >
          {/* Left Section with Help Info and Social Media */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 4, md: 0 }, flex: 1 ,
    }}>
            <Typography variant="h2" sx={{ mb: 2 ,
        fontFamily: '"DM Serif Display", serif', 
        fontWeight: 900,
textAlign: 'left',
fontSize: {
  xs: 50, // for small devices
   md:70// for medium and up
},
            }}>We are here to help!</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 10 }}>
  <LocationOn />
  <Typography><strong>Mussafah 26 Abu Dhabi, UAE</strong></Typography>
</Box>

<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 5 }}>
  <Phone />
  <Typography><strong>+1971565021171</strong></Typography>
</Box>
            
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" sx={{ mb: 2, mt:10 }}>Follow us:</Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <a href="https://www.facebook.com/quickbrightcleaners/" target="_blank" rel="noopener noreferrer">
                  <IconButton sx={{ color: '#2C2927' }}>
                    <Facebook />
                  </IconButton>
                </a>
                <a href="https://www.instagram.com/quickbrightcleaners/" target="_blank" rel="noopener noreferrer">
                <IconButton sx={{ color: '#2C2927' }}><Instagram /></IconButton>
                </a>
                <IconButton sx={{ color: '#2C2927' }}><Twitter /></IconButton>
                <IconButton sx={{ color: '#2C2927' }}><YouTube /></IconButton>
              </Box>
            </Box>
          </Box>

          {/* Right Section with Contact Form */}
          <Box sx={{ flex: 1 , backgroundColor: '#FFF', p:4}}>
            <Typography variant="h3" sx={{ mb: 2, textAlign: 'left' ,
        fontFamily: '"DM Serif Display", serif',

            }}>Send us a message</Typography>
            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                <TextField fullWidth label="First Name" variant="outlined" />
                <TextField fullWidth label="Last Name" variant="outlined" />
              </Box>
              <TextField fullWidth label="Email Address" variant="outlined" />
              <TextField fullWidth label="Subject" variant="outlined" />
              <TextField fullWidth label="Your Message" multiline rows={4} variant="outlined" />
              <Button
  variant="contained"
  sx={{
    alignSelf: 'flex-start',
    mt: 1,
    backgroundColor: '#fff',
    color: 'grey',
    border: '2px solid black',
    px: 3,
    py: 1,
    '&:hover': {
      backgroundColor: 'grey',
      color: '#fff',
    },
  }}
>
  Send Message
</Button>

            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
