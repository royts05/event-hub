import { Box, Typography, Link, Stack, Paper } from '@mui/material';

const Footer = () => {
  return (
    <Paper sx={{backgroundColor: "#414A4C", borderRadius: 0, marginBottom: -10 }}>
      <Box
      sx={{
        color: '#000',
        textAlign: 'center',
        py: 1, // Padding vertically for better spacing
        width: '100%',
        height: 30,
        pb: 5
      }}
      component="footer"
    >
      <Typography variant="body2" color={"#fff"}>
      Event Hub &copy; {new Date().getFullYear()}. All rights reserved.
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Link href="#privacy-policy" sx={{ color: '#fff', textDecoration: 'underline', fontSize: '14px' }}>
          Privacy Policy
        </Link>
        <span style={{ color: '#fff' }}>|</span>
        <Link href="#terms-of-service" sx={{ color: '#fff', textDecoration: 'underline', fontSize: '14px' }}>
          Terms of Service
        </Link>
      </Stack>
    </Box>
    </Paper>
  );
};

export default Footer;
