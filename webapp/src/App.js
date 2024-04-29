import './App.css';
import React, {useEffect} from 'react';
import Navbar from './navbar';
import {  BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import Login from './Login';
import Search from './Search';
import AreaPage from './AreaPage'
import Footer from './Footer';
import Climbs from './ClimbsPage';
import Description from './ClimbDescription';
import FetchLocalAPI from './fetchlocalapi';


function App() {
  const title = "welcome to the new block";

  return (
    
    <Router>
    <div className="App">
    <Navbar />
    <div className="image-container">
      <img src={"./natgeo.jpeg"} alt="Full Screen Image" /></div>
      <div className="content">
        <Switch>
        <Route exact path="/" component={Search}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/arealist" component={AreaPage}></Route> 
          <Route exact path="/climblist" component={Climbs}></Route>
          <Route exact path="/climbdescription" component={Description}></Route>
          <Route exact path="/fetch8080" component={FetchLocalAPI}></Route>
        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
    </Router>
  );
}
// always export components in order to use in outside files
export default App;
