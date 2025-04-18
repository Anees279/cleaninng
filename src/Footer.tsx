import React from 'react';
import { Box, Typography, Link, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

export const Footer: React.FC = () => {
  return (
    <Box sx={{ color: '#2C2927', py: 6, backgroundColor: '#f5f5f5',position: 'relative', zIndex: 1  }}>
      <Container maxWidth="lg">
        {/* Top Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 4,
            mb: 4,
          }}
        >
          {/* Address Section */}
          <Box
          sx={{textAlign: { xs: 'center', md: 'left' }, mb: 4 }}>
            <Typography><strong>Address:Mussafah 26 Abu Dhabi, UAE</strong></Typography>
            <Typography><strong>info@quickbrightcleaners.com</strong></Typography>
          </Box>

          {/* Links + Social Section */}
          <Box>
            <Box sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' }, gap: 6 , textAlign: { xs: 'center', md: 'left' }}}>
              <Link href="#" underline="hover" color="inherit">Home</Link>
              <Link href="#" underline="hover" color="inherit">Services</Link>
              <Link href="#" underline="hover" color="inherit">About</Link>
              <Link href="#" underline="hover" color="inherit">Contact</Link>
            </Box>

            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mt: 2 }}>
              <Typography variant="body1" sx={{ mb: 2 }}>Follow us:</Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <IconButton sx={{ color: '#2C2927' }}><Twitter /></IconButton>
                <a href="https://www.facebook.com/quickbrightcleaners/" target="_blank" rel="noopener noreferrer">
  <IconButton sx={{ color: '#2C2927' }}>
    <Facebook />
  </IconButton>
</a>
<a href="https://www.instagram.com/quickbrightcleaners/" target="_blank" rel="noopener noreferrer">
<IconButton sx={{ color: '#2C2927' }}><Instagram /></IconButton>
</a>
               
                <IconButton sx={{ color: '#2C2927' }}><YouTube /></IconButton>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Copyright Section */}
       
      </Container>
      <Box
          sx={{
            borderTop: '1px solid #2C2927',
            mt: 6,
            pt: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: '#555' }}>
           copyright © 2025 voxdigify.com | Powered by voxdigify.com
          </Typography>
        </Box>
    </Box>
  );
};
