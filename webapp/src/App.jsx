import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import Navbar from './Components/navbar';
import {  BrowserRouter as Router, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Login from './Components/Authentication/Login';
import Search from './Components/SearchForClimbsPaths/Search';
import AreaPage from './Components/SearchForClimbsPaths/AreaPage';
import Footer from './Components/Footer';
import Climbs from './Components/SearchForClimbsPaths/ClimbsPage';
import UserLogin from './Components/APICalls/UserLogin';
import UserClimbs from './UserClimbs';
import TestAreaPage from './TestAreaPage';
import Description from './Components/SearchForClimbsPaths/ClimbDescription';
import UserContext, { UserProvider } from './Components/Authentication/UserContext';


function App() {
  const title = "welcome to the new block";
  const history = useHistory();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [openLogInModal, setOpenLogInModal] = useState(false);
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState('');
  
  useEffect(() => {
    setUserData(JSON.parse(sessionStorage.getItem('user')));
    setToken(userData.token);
    if (token) {
        console.log('Token found, logging in');
        setLoggedIn(true);
        console.log(loggedIn);
    }
    else {
        setLoggedIn(false);
    }
}, []);

function handleLogOut(e) {
  e.preventDefault();
  sessionStorage.removeItem('user');
  setLoggedIn(false);
  history.push("/");
} 

  return (
    <div className="App">
    <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} onLogout={handleLogOut} openLogInModal={openLogInModal} setOpenLogInModal={setOpenLogInModal} />

        <Switch>
        <Route exact path="/" component={withImage(Search)}></Route>
          <Route exact path="/login"><Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} openLogInModal={openLogInModal} setOpenLogInModal={setOpenLogInModal} /></Route>
          <Route exact path="/arealist" component={AreaPage}></Route> 
          <Route exact path="/climblist" component={withImage(Climbs)}></Route>
          <Route exact path="/climbdescription" component={withImage(Description)}></Route>
          <Route exact path="/fetch8080" component={UserLogin}></Route>
          <UserProvider>
          <Route exact path="/userclimbs" component={UserClimbs}></Route>
          </UserProvider>
          <Route exact path="/TestAreaPage" component={TestAreaPage}></Route>
        </Switch>

      {/* <Footer /> */}
    </div>
  );
}

const withImage = (Component) => {
  return (props) => (
    <div>
      <div className="image-container">
      <img src={"./natgeo.jpeg"} alt="Full Screen Image" /><Component {...props} /></div>
      <div className="content"></div>
      
    </div>
  )
}

// always export components in order to use in outside files
export default App;
