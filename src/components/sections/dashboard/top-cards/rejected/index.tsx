import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import IconifyIcon from 'components/base/IconifyIcon';
import { useUserContext } from 'contexts/UserContext';

const Activity = () => {
  const [declinedEventsCount, setdeclinedEventsCount] = useState<number>(0);
  const { user } = useUserContext();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        if (user.role === "MainAdmin") {
          const response = await axios.get(`http://localhost:8080/api/events`);      
        const declinedEvents = response.data.filter((event: { status: string }) => event.status === 'Declined');
        setdeclinedEventsCount(declinedEvents.length);
        } else if (user.role === "Admin") {
          const response = await axios.get(`http://localhost:8080/api/events/organizer/${user.userID}`);      
        const declinedEvents = response.data.filter((event: { status: string }) => event.status === 'Declined');
        setdeclinedEventsCount(declinedEvents.length);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <Paper
      component={Stack}
      alignItems="center"
      justifyContent="space-between"
      sx={(theme) => ({
        px: 3,
        py: 2.5,
        background: `linear-gradient(135deg, ${theme.palette.gradients.error.state} 0%, ${theme.palette.gradients.error.main} 100%)`,
      })}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        height={56}
        width={56}
        sx={{
          backgroundColor: "white"
        }}
        borderRadius="50%"
      >
        <IconifyIcon icon="ri:alert-fill" color="red" fontSize="h3.fontSize" />
      </Stack>

      <Box 
        marginLeft={-9}
        width={'30%'}
      >
        <Typography mt={0} variant="h1" color="info.light">
          {declinedEventsCount}
        </Typography>
      </Box>

      <Box>
        <Typography color={'white'} paddingTop={8}>
          REJECTED
        </Typography>
      </Box>
    </Paper>
  );
};

export default Activity;
