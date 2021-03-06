import { Box, Divider, Link, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          my: 1,
          py: 1,
        }}
      >
        <Divider />
      </Box>
      <Box component="footer">
        <Typography
          sx={{
            color: '#767676',
          }}
          variant="body2"
        >
          Grand Archive card images are text are owned by and used with permission from Weebs of the Shore LLC
        </Typography>
        <Typography
          sx={{
            color: '#767676',
          }}
          variant="body2"
        >
          Silvie, Discord Bot and 
          {' '}
          <Link
            href="https://silvie.org"
            rel="noopener noreferrer"
            sx={{
              color: '#767676'
            }}
          >
            https://silvie.org
          </Link>
          {' '}
          © 2022
        </Typography>
      </Box>
    </>
  )
}

export default Footer;