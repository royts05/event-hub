import { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  TextField,
  Grid,
  Paper,
  Pagination,
  Stack,
  Divider,
} from '@mui/material';
import axios from 'axios';
import { useUserContext } from 'contexts/UserContext';
import Header from 'components/sections/user/header/header';
import Footer from 'components/sections/user/footer/footer';
import Image from 'components/base/Image';
import calendarImg from 'assets/images/calendar-cartoon.png';
import IconifyIcon from 'components/base/IconifyIcon';

interface Event {
  eventID: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  status: string;
}

const ITEMS_PER_PAGE = 6; // Number of events/photos per page

const Homepage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { user } = useUserContext();

  useEffect(() => {
    // Fetch events for the logged-in user
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://springboot-eventhub-latest.onrender.com/api/events');
        const approvedEvents = response.data.filter(
          (event: Event) => event.status === 'Approved'
        );
        setEvents(approvedEvents);
        setFilteredEvents(approvedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [user.userID]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    setFilteredEvents(
      events.filter(
        (event) =>
          event.title.toLowerCase().includes(value) ||
          event.description.toLowerCase().includes(value) ||
          event.location.toLowerCase().includes(value)
      )
    );
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  // Get the current date for comparison
  const currentDate = new Date();

  // Separate events into upcoming and past
  const upcomingEvents = filteredEvents.filter(
    (event) => new Date(event.startDate) > currentDate
  );
  const pastEvents = filteredEvents.filter(
    (event) => new Date(event.endDate) < currentDate
  );

  // Pagination logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedUpcomingEvents = upcomingEvents.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const paginatedPastEvents = pastEvents.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  return (
    <Box sx={{ m: -3.5, mt: -4 }}>
      {/* Navbar */}
      <Header />

      {/* Main Content */}
      <Box sx={{ padding: 4, mt: 9, borderRadius: 2, px: 18 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 4,
          }}
        >
          <Typography variant="h2" fontWeight="bold" color="#FFEF00">
            Welcome back, {user.firstName}!
          </Typography>
        </Box>

        <Divider sx={{mt: -1, mb: 5, backgroundColor: "#FFEF00" }} />

        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          
        <Image
            src={calendarImg}
            alt="Calendar icon"
            width={300}
            sx={{ mr: 10 }}
          />
          <Typography
            variant="h2"
            sx={{ fontWeight: 600, color: "#E3DAC9" }}
          >
           We're excited to have you join the Event Hub Organizer! Explore and stay in the loop with all the amazing events taking place near you. Dive into the world of experiences, discover upcoming happenings, and get ready to make every moment count. Let's begin this exciting journey and make the most out of your event planning adventure!
          </Typography>
        </Box>

        <Divider sx={{mt: 10, mb: 5}} />

        <TextField
          label="Search events..."
          variant="outlined"
          fullWidth
          value={searchText}
          onChange={handleSearch}
          sx={{
            '& .MuiInputBase-root': {
              height: 50,
              fontSize: '13px',
            },
            '& .MuiInputLabel-root': {
              fontSize: '13px',
            },
            my: 3,
            display: 'none'
          }}
        />

        {/* Upcoming Events */}
        <Typography variant="h3" color="#FFEF00" mb={3}>
          Upcoming Events
        </Typography>
        {paginatedUpcomingEvents.length > 0 ? (
          <>
            <Grid container spacing={3}>
              {paginatedUpcomingEvents.map((event) => (
                <Grid item xs={12} sm={6} md={4} key={event.eventID}>
                  <Paper sx={{ borderRadius: 0, boxShadow: 3 }}>
                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color="blue"
                        sx={{ textTransform: 'capitalize' }}
                      >
                        {event.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.description}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Location:</strong> {event.location}
                      </Typography>
                      <Box>
                        <Typography variant="body2" mt={4}>
                          <strong>Start:</strong>{' '}
                          {new Date(event.startDate).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </Typography>
                        <Typography variant="body2">
                          <strong>End:</strong>{' '}
                          {new Date(event.endDate).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </Typography>

                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Pagination
              count={Math.ceil(upcomingEvents.length / ITEMS_PER_PAGE)}
              page={currentPage}
              onChange={handlePageChange}
              sx={{ mt: 3 }}
              color="primary"
            />
          </>
        ) : (
          <Stack sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 300, bgcolor: '#4D5D53', opacity: 0.3, boxShadow: 1}}>
            <IconifyIcon icon={'tabler:calendar-cancel'} sx={{ fontSize: 110, color: 'gainsboro', stroke: 1 }} /> <br />
            <Typography color={"white"}>No upcoming events available</Typography>
          </Stack>
        )}

        {/* Past Events */}
        <Typography variant="h3" color="#FFEF00" mt={5} mb={3}>
          Past Events
        </Typography>
        {paginatedPastEvents.length > 0 ? (
          <>
            <Grid container spacing={3}>
              {paginatedPastEvents.map((event) => (
                <Grid item xs={12} sm={6} md={4} key={event.eventID}>
                  <Paper sx={{ borderRadius: 0, boxShadow: 3 }}>
                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color="primary"
                        sx={{ textTransform: 'capitalize' }}
                      >
                        {event.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.description}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Location:</strong> {event.location}
                      </Typography>
                      <Typography variant="body2" mt={4}>
                        <strong>Start:</strong>{' '}
                        {new Date(event.startDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </Typography>
                      <Typography variant="body2">
                        <strong>End:</strong>{' '}
                        {new Date(event.endDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </Typography>

                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Pagination
              count={Math.ceil(pastEvents.length / ITEMS_PER_PAGE)}
              page={currentPage}
              onChange={handlePageChange}
              sx={{ mt: 3 }}
              color="primary"
            />
          </>
        ) : (
          <Stack sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 300, bgcolor: '#4D5D53', opacity: 0.3, boxShadow: 1}}>
            <IconifyIcon icon={'tabler:calendar-cancel'} sx={{ fontSize: 110, color: 'gainsboro', stroke: 1 }} /> <br />
            <Typography color={"white"}>No events available</Typography>
          </Stack>
        )}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Homepage;
