import { PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      component="main"
      alignItems="center"
      justifyContent="center"
      px={1}
      pt={12}
      pb={10}
      width={1}
      minHeight="100vh"
    >
      <Paper sx={{ px: { xs: 2, sm: 3.5 }, py: 4, width: 1, maxWidth: 460, borderRadius: 0, boxShadow: 5 }}>{children}</Paper>
    </Stack>
  );
};

export default AuthLayout;
