import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/authReducer';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Visibility, VisibilityOff } from '@mui/icons-material';
const RegisterPage = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.userName.value;
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      name: name,
      email: email,
      password: password,
    };
    console.log(formData);
    dispatch(registerUser(formData));
  };

  return (
    <>
    <CssBaseline />
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3" gutterBottom>
          RegisterPage
        </Typography>
        <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
          <Grid>
            <TextField
              type="text"
              name="userName"
              label="Enter your name..."
              autoComplete="on"
              required
              sx={{ width: '300px' }}
            />
          </Grid>
          <Grid>
            <TextField
              type="email"
              name="userEmail"
              required
              label="Email"
              autoComplete="on"
              sx={{ width: '300px', mt:"10px" }}
            />
          </Grid>
          <Grid>
            <FormControl sx={{ mt: "10px", mb:"10px", width: '300px' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                type={showPassword ? 'text' : 'password'}
                name="userPassword"
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            </Grid>
          <Button type="submit" variant="contained" endIcon={<SendIcon/>}>Register</Button>
        </Box>
      </Grid>
    </Container>
    </>
  );
};

export default RegisterPage;
