import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import Header from 'components/sections/user copy/header/header';
import Footer from 'components/sections/user copy/footer/footer';
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <Box sx={{ m: -3.5, mt: -4 }}>
      {/* Navbar */}
      <Header />

      {/* Greeting Section */}
      <Box
      id="home"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(https://d3m7xw68ay40x8.cloudfront.net/assets/2017/08/29112206/shakori-hills-music-fest-1024x540.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          padding: 4,
        }}
      >
        {/* Animated Typography for Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h1"
            fontWeight="bold"
            mb={3}
            sx={{
              color: '#fff', // Vibrant yellow for contrast
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)',
            }}
          >
            Welcome to Event Hub Organizer!
          </Typography>
        </motion.div>

        {/* Subtext Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography
            mb={4}
            mx={10}
            sx={{
              color: '#FFFFFF', // White text for clarity
              opacity: 0.9, // Slight transparency for subtlety
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
              fontSize: 18
            }}
          >
            Event Hub Organizer is your ultimate solution for simplifying event management. Whether you're organizing a corporate meeting, a community gathering, or a private celebration, our platform ensures your event runs smoothly and successfully.
</Typography>
        </motion.div>

        {/* Animated Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Typography variant='body1' color={"white"}>
          Let’s get started and create unforgettable experiences together.
          </Typography>
        </motion.div>
      </Box>

      {/* Purpose Section */}
      <Box
        id="purpose"
        sx={{
          backgroundColor: '#F2F3F4',
          color: '#36454F',
          textAlign: 'center',
          py: 6,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Why Choose Event Hub Organizer?
        </Typography>
        <Grid container spacing={2} sx={{ width: '90%'}} justifyContent="center">
          {[
            {
              title: 'Streamlined Planning',
              description:
                'Effortlessly create and manage events, set schedules, and track progress with our intuitive tools.',
            },
            {
              title: 'Seamless Collaboration',
              description:
                'Collaborate with your team or stakeholders, and assign tasks to ensure smooth execution.',
            },
            {
              title: 'Real-Time Updates',
              description:
                'Receive instant notifications and updates, ensuring everyone stays informed and on track.',
            },
            {
              title: 'Powerful Insights',
              description:
                'Gain valuable insights with analytics and reports to measure the success of your events.',
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} >
              <Card
                sx={{
                  backgroundColor: '#1F75FE',
                  color: '#FEFEFA',
                  borderRadius: 5,
                  height: '100%', 
                  boxShadow: 3,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" mb={2}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="#FFFFFF">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box id="about" sx={{height: 60, bgColor: "#F2F3F4"}}></Box>

      {/* About Section */}
       <Box
        sx={{
          backgroundColor: '#F2F3F4',
          color: '#111111',
          textAlign: 'center',
          py: 6,
          px: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={4}>
          About Us
        </Typography>
        <Typography variant="body1" mb={4}>
          Event Hub Organizer was founded with the vision of simplifying event planning and management. Our mission is to empower individuals and organizations with intuitive tools that make creating memorable events effortless.
        </Typography>
        <Typography variant="body1">
        From intimate gatherings to large-scale conferences, we offer all the features you need to make sure your events are well-organized, seamless, and impactful.
        </Typography>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{
          backgroundColor: '#F8F9FA',
          textAlign: 'center',
          py: 6,
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={4} color="#36454F">
          Contact Us
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 4, p: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Email Us
                </Typography>
                <Typography variant="body2">supportteam@eventhuborganizer.com</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 4, p: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Call Us
                </Typography>
                <Typography variant="body2">+639630211352</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Main;