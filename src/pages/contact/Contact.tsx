import { Box, Typography, Button, Container, Divider } from '@mui/material';
import Footer from 'components/sections/user/footer/footer';
import Header from 'components/sections/user/header/header';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleContact = () =>{
    navigate('/contact');
  }
  return (
    <Box sx={{ m: -3.5, mt: -4 }}>
      {/* Navbar */}
      <Header />

      {/* Main Content */}
      <Container sx={{ mt: 8, py: 6, textAlign: 'justify' }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: '2rem', color: '#FDEE00', textAlign: 'center' }}>
            Contact Us
          </Typography>

        <Typography variant="body1" color="#fff" paragraph sx={{ fontSize: '15px', textAlign: 'center', mx: 7 }}>
          At Event Hub Organizer, we prioritize clear communication and transparency. Our dedicated support team is always ready to assist you with any questions or concerns. Whether you're looking to learn more about our platform, need help with an ongoing event, or want to explore how we can support your organization, we're just a message or call away.
          Let me know if you’d like to make any more adjustments!
        </Typography>

        <Typography variant="body1" color="#fff" paragraph sx={{ fontSize: '15px', textAlign: 'center', mx: 7 }}>
          At Event Hub Organizer, our goal is to deliver a smooth and efficient experience for educators, administrators, and all team members involved in event planning. We recognize the importance of staying organized and connected throughout every stage of event planning and execution. With our platform, we aim to remove the common obstacles of event management, enabling you to focus on what truly matters: making a positive impact through your events.
        </Typography>

        <Typography variant="body1" color="#fff" paragraph sx={{ fontSize: '15px', textAlign: 'center', mx: 7 }}>
        Whether you need assistance navigating the platform, have feature requests, or seek advice on how to make the most of our system, we’re here to help in any way we can. Reach out to us, and let us support you in making your event a success!
        </Typography>

        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Divider sx={{mt: 3, width: '60%'}}/>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: '27px', color: '#FDEE00' }}>
            We're Here to Help!
          </Typography>
          <Typography variant="body1" color="#fff" paragraph sx={{ fontSize: '15px', px: 30 }}>
          At Event Hub Organizer, we are dedicated to offering outstanding service and support. Whether you're just starting your event planning journey or in the final stages, we’re here to help ensure your experience is smooth and successful.
          </Typography>
          <Button onClick={handleContact} variant="contained" color="primary" sx={{ mt: 3, fontSize: '1.1rem', padding: '12px 24px' }}>
            Contact Us Now
          </Button>
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Contact;
