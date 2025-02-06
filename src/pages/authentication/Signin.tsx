import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import IconifyIcon from 'components/base/IconifyIcon';
import paths from 'routes/paths';
import axios from 'axios';
import { useUserContext } from 'contexts/UserContext';
import Swal from 'sweetalert2';

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://springboot-eventhub-latest.onrender.com/api/login', credentials);
      const { token, role, username, password, userID, status, email, firstName, lastName, phoneNumber } = response.data;

      
      localStorage.setItem('auth_token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('userID', userID);
      localStorage.setItem('email', email);
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('phoneNumber', phoneNumber);

      // Update UserContext
      setUser({ username, password, token, role, userID, email, firstName, lastName, phoneNumber });

      // Navigate based on role
      if (role === 'MainAdmin') {
        navigate('/'); // Navigate to admin dashboard
      } else if (role === 'Admin' && status === 'Active') {
        navigate('/'); // Navigate to admin dashboard
      } else if (role === 'Admin' && status === 'Inactive') {
         Swal.fire({
                title: 'Inactive Account!',
                text: 'Your account  is inactive.',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#3085d6',
              });
      } else {
        navigate(paths.home); // Navigate to user dashboard
      }
    } catch (error) {
      setError('Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Typography align="center" variant="h4">
        Log in
      </Typography>
      <Typography mt={1.5} align="center" variant="body2">
        Event Hub - Organizer System
      </Typography>

      {error && (
        <Typography width={"100%"} bgcolor={"#f8d7da"} borderRadius={2} py={1.5} color="#721c24" variant="body2" mt={2} align="center">
          {error}
        </Typography>
      )}

      <Stack component="form" mt={3} onSubmit={handleSubmit} direction="column" gap={2}>
        <TextField
          id="username"
          name="username"
          type="username"
          value={credentials.username}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Your username"
          autoComplete="username"
          fullWidth
          autoFocus
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconifyIcon icon="ri:user-fill" />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiFilledInput-root': {
              backgroundColor: 'transparent',
              border: '1px solid gainsboro',
            },
            '& .MuiFilledInput-root.Mui-focused': {
              borderColor: '#007FFF',
            },
            mr: 1
          }}
        />
        <TextField
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={credentials.password}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Your Password"
          autoComplete="current-password"
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconifyIcon icon="ic:sharp-key" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  opacity: credentials.password ? 1 : 0,
                  pointerEvents: credentials.password ? 'auto' : 'none',
                }}
              >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{ border: 'none', bgcolor: 'transparent !important' }}
                  edge="end"
                  tabIndex={0} // Added for better accessibility
                >
                  <IconifyIcon
                    icon={showPassword ? 'ic:outline-visibility' : 'ic:outline-visibility-off'}
                    color="neutral.light"
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiFilledInput-root': {
              backgroundColor: 'transparent',
              border: '1px solid gainsboro',
            },
            '& .MuiFilledInput-root.Mui-focused': {
              borderColor: '#007FFF',
            },
            mr: 1
          }}
        />

        <Button type="submit" variant="contained" size="medium" fullWidth disabled={loading}>
          {loading ? 'Logging In...' : 'Log In'}
        </Button>
      </Stack>

      <Typography mt={5} variant="body2" color="text.secondary" align="center" letterSpacing={0.25}>
        Don't have an account? <Link href={paths.signup}>Signup</Link>
      </Typography>
    </>
  );
};

export default Signin;
