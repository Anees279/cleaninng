import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

export const SubscribeSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        py: 9,
        backgroundColor: '#FBE8A6',
        borderRadius: 2,
        mt: 4,
        rowGap: 4,
      }}
    >
      <Typography
  variant="h2"
  sx={{
    fontWeight: 700,
    fontFamily: '"DM Serif Display", serif',
    color: '#2C2927',
  }}
>
  Subscribe
</Typography>
      <TextField
        type="email"
        placeholder="Enter your Gmail"
        variant="outlined"
        size="small"
        sx={{ width: { xs: '100%', md: '500px' } }}
      />
      
      <Button variant="outlined" color="secondary" size="medium">
        I’m Interested
      </Button>
    </Box>
  );
};
