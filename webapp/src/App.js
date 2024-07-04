import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/navbar';
import {  BrowserRouter as Router, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Login from './Components/Login';
import Search from './Components/SearchForClimbsPaths/Search';
import AreaPage from './Components/SearchForClimbsPaths/AreaPage';
import Footer from './Components/Footer';
import Climbs from './Components/SearchForClimbsPaths/ClimbsPage';
import FetchLocalAPI from './Components/APICalls/fetchlocalapi';
import UserClimbs from './UserClimbs';
import TestAreaPage from './TestAreaPage';
import Description from './Components/SearchForClimbsPaths/ClimbDescription';


function App() {
  const title = "welcome to the new block";
  const history = useHistory();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(!!sessionStorage.getItem('token'));
  const [openLogInModal, setOpenLogInModal] = useState(false);
  
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
        console.log('Token found, logging in');
        setLoggedIn(true);
        
    }
    else {
        setLoggedIn(false);
    }
}, [])

function handleLogOut(e) {
  e.preventDefault();
  sessionStorage.removeItem('token');
  setLoggedIn(false);
  history.push("/");
  console.log(history);
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
          <Route exact path="/fetch8080" component={FetchLocalAPI}></Route>
          <Route exact path="/userclimbs" component={UserClimbs}></Route>
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
