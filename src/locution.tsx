import React from 'react';
import { Box, Typography } from '@mui/material';

const LocationMap: React.FC = () => {
  return (
    <Box sx={{ 
        backgroundColor: '#FFF9C4',
        position: 'relative',

     }}>
      
      <Box
        sx={{
          width: '100%',
          height: { xs: 300, md: 500 },
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <iframe
          title="1234 N Spring St, Los Angeles, CA"
          src="https://www.google.com/maps?q=1234+N+Spring+St,+Los+Angeles,+CA+90012&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
};

export default LocationMap;
