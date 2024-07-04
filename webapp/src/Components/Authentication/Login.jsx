import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import { Grid, TextField, Button } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import UserLogin from '../APICalls/UserLogin';

const Login= ({ setOpenLogInModal, setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

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
      let apiResult = await UserLogin(username, password);
      if (apiResult) {
        console.log(username, password);
        setLoggedIn(true);
        setOpenLogInModal(false);
        console.log(`Welcome back!`)
      }
      else {
        alert('Your username or password does not match what we have on record.')
      }
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
            <div className="password-field">
            <TextField
            fullWidth
            label='Password'
            name='password'
            type={visible ? 'text' : 'password'}
            value={password}
            onChange={handleChange}
            ></TextField>
            <div className="password-visible" onClick={ () => setVisible(!visible)}>
              {visible ? <VisibilityOutlinedIcon className='visible-icon'/> : <VisibilityOffOutlinedIcon className='visible-icon'/>}
            </div>
            </div>
          </Grid>
          
          <Grid item xs={12}>
            <Button type='submit' variant='contained' className='login-button'>Log In</Button>
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