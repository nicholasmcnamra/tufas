import React, { useState } from 'react';
import FetchLocalAPI from './APICalls/fetchlocalapi';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import { Grid, TextField, Button } from '@mui/material';

const Login= ({ setOpenLogInModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    switch(e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in both fields.');
      return;
    }
    else {
      let apiResult = await FetchLocalAPI(username, password);
      console.log(username, password);
      console.log(apiResult);
      setOpenLogInModal(false);
        if (apiResult) 

          console.log(`Welcome back!`)
    }

  };

const handleGoogleLogin = async () => {
  try {
    // Make a request to the backend server to initiate the Google OAuth2 flow
    const response = await axios.get('http://localhost:8080/login');
    console.log(response.url);
    document.location = response.url;
  } catch (error) {
    console.error('Error initiating Google login:', error);
  }
};

  return (
    <div className="login-container">
      <form onSubmit={ handleFormSubmit }>
        <Grid container spacing={2}>
          <Grid item xs={12}>

            <TextField
            fullWidth
            label='Username'
            name='username'
            value={username}
            onChange={handleChange}
            />
            </Grid>

            <Grid item xs={12}>
            <TextField
            fullWidth
            label='Password'
            name='password'
            value={password}
            onChange={handleChange}
            />

          </Grid>
          
          <Grid item xs={12}>
            <Button type='submit' variant='contained'>Log In</Button>
          </Grid>
          <Grid item xs={12}>
          <Button onClick={handleGoogleLogin} variant='contained'>Login with Google</Button>
          </Grid>
        </Grid>
      </form>
      
    </div>
  );
}

export default Login;