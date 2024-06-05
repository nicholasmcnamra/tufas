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
import UserClimbs from './UserClimbs';


function App() {
  const title = "welcome to the new block";

  return (
    
    <Router>
    <div className="App">
    <Navbar />

        <Switch>
        <Route exact path="/" component={withImage(Search)}></Route>
          <Route exact path="/login" component={withImage(Login)}></Route>
          <Route exact path="/arealist" component={withImage(AreaPage)}></Route> 
          <Route exact path="/climblist" component={withImage(Climbs)}></Route>
          <Route exact path="/climbdescription" component={withImage(Description)}></Route>
          <Route exact path="/fetch8080" component={FetchLocalAPI}></Route>
          <Route exact path="/userclimbs" component={UserClimbs}></Route>
        </Switch>

      {/* <Footer /> */}
    </div>
    </Router>
  );
}

const withImage = (Component) => {
  return (props) => (
    <div>
          <div className="image-container">
      <img src={"./natgeo.jpeg"} alt="Full Screen Image" /></div>
      <div className="content"></div>
      <Component {...props} />
    </div>
  )
}

// always export components in order to use in outside files
export default App;
