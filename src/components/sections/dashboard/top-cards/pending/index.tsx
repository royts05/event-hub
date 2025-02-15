import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import IconifyIcon from 'components/base/IconifyIcon';
import { useUserContext } from 'contexts/UserContext';

const Activity = () => {
  const [pendingEventsCount, setPendingEventsCount] = useState<number>(0);
  const { user } = useUserContext();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        if (user.role === "MainAdmin") {
          const response = await axios.get(`https://springboot-eventhub-latest.onrender.com/api/events`);
        const pendingEvents = response.data.filter((event: { status: string }) => event.status === 'Pending');    
        setPendingEventsCount(pendingEvents.length);
        } else if (user.role === "Admin") {
          const response = await axios.get(`https://springboot-eventhub-latest.onrender.com/api/events/organizer/${user.userID}`);
        const pendingEvents = response.data.filter((event: { status: string }) => event.status === 'Pending');    
        setPendingEventsCount(pendingEvents.length);
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
        background: `linear-gradient(135deg, ${theme.palette.gradients.yellow.state} 0%, ${theme.palette.gradients.yellow.main} 100%)`,
      })}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        height={56}
        width={56}
        sx={{ backgroundColor: "white" }}
        borderRadius="50%"
      >
        <IconifyIcon icon="ri:loader-line" color="#EF9B0F" fontSize="h3.fontSize" />
      </Stack>

      <Box 
        marginLeft={-10}
        width={'30%'}
      >
        <Typography mt={0} variant="h1" color="info.light">
          {pendingEventsCount}
        </Typography>
      </Box>

      <Box>
        <Typography color={'white'} paddingTop={8}>
          PENDING
        </Typography>
      </Box>
    </Paper>
  );
};

export default Activity;
