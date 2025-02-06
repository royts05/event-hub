import { Typography, Box, Container, Grid, Paper, Divider } from '@mui/material';
import Footer from 'components/sections/user/footer/footer';
import Header from 'components/sections/user/header/header';

const AboutUs = () => {
    return (
        <Box sx={{ m: -3.5, mt: -4 }}>
            {/* Navbar */}
            <Header />

            {/* Main Content */}
            <Container sx={{ mt: 8, py: 8 }}>
                <Typography variant="h3" fontWeight="bold" color="#FDEE00" gutterBottom sx={{ fontSize: '2rem', letterSpacing: 1, textAlign: 'center' }}>
                    About Us
                </Typography>

                <Typography variant="body1" color="#F5F5DC" paragraph sx={{ fontSize: '15px', lineHeight: 1.7, mx: 20, textAlign: 'center' }}>
                The Event Hub Organizer is an all-in-one platform designed to simplify the event planning and execution process. Tailored for teachers, administrators, and organizational staff, our system offers an intuitive interface that streamlines event management, making communication, collaboration, and overall execution more efficient.
                </Typography>

                <Typography variant="body1" color="#F5F5DC" paragraph sx={{ fontSize: '15px', lineHeight: 1.7, mx: 20, textAlign: 'center' }}>
                Our platform is designed to meet the specific needs of educational institutions and organizations by making event coordination simpler and more organized. Whether it's a small meeting or a large workshop, Event Hub Organizer helps you manage every detail, from scheduling to resource sharing, with an intuitive and flexible approach.
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Divider sx={{ mt: 3, width: '60%' }} />
                </Box>

                <Typography variant="h5" fontWeight="bold" color="#FDEE00" mt={4} gutterBottom sx={{ fontSize: '28px', letterSpacing: 0.5, textAlign: 'center' }}>
                    Our Vision
                </Typography>
                <Typography variant="body1" color="#F5F5DC" paragraph sx={{ fontSize: '15px', lineHeight: 1.7, mx: 20, textAlign: 'center' }}>
                At Event Hub Organizer, we envision a future where schools, colleges, and organizations have a streamlined solution for managing events seamlessly. Our platform is designed to enhance productivity, improve communication, and ensure every event is planned flawlessly. Our goal is to be the go-to tool for all event-related tasks, allowing users to focus on what matters most: the success of their events and the people they bring together.
                 </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Divider sx={{ mt: 3, width: '60%' }} />
                </Box>

                <Typography variant="h5" fontWeight="bold" color="#FDEE00" mt={4} gutterBottom sx={{ fontSize: '28px', letterSpacing: 0.5, textAlign: 'center' }}>
                    Why Choose Us?
                </Typography>
                <Grid container spacing={2} px={17} mt={1}>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={12} sx={{ p: 4, borderRadius: 0, backgroundColor: '#f1f8ff', boxShadow: 2 }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontSize: '15px', color: '#0077b6' }}>
                                User-Friendly Interface
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '15px' }}>
                                We believe in simplicity without compromising functionality. Our platform offers an intuitive interface that makes event creation and management quick and easy, no matter the user's tech experience.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Paper elevation={12} sx={{ p: 4, borderRadius: 0, backgroundColor: '#fff1e6', boxShadow: 2 }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontSize: '15px', color: '#e63946' }}>
                                Efficient Communication
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '15px' }}>
                                Effective communication is key to event success. Our system ensures that users can easily send notifications, share updates, and maintain continuous communication, making event coordination smooth and transparent.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Paper elevation={12} sx={{ p: 4, borderRadius: 0, backgroundColor: '#e2f9e1', boxShadow: 2, height: '100%' }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontSize: '15px', color: '#2a9d8f' }}>
                                Enhanced Security
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '15px' }}>
                                We take security seriously. Our platform includes robust security features to ensure that sensitive information is protected and that all user data remains confidential.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Paper elevation={12} sx={{ p: 4, borderRadius: 0, backgroundColor: '#fce4ec', boxShadow: 2 }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontSize: '15px', color: '#9b4d96' }}>
                                Customizable Solutions
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '15px' }}>
                                Every event is unique, and we understand that. Our system offers customizable features that cater to the specific needs of each event, allowing users to tailor their event management experience to their preferences.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default AboutUs;
