import './App.css';
import React from 'react';
import Navbar from './navbar';
import Home from './home';
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ClimbingAreas from './ClimbingAreas';
import Login from './Login';

function App() {
  const title = "welcome to the new block";


  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
        <Route exact path= "/">
            <Home />
          </Route>
          <Route exact path="/login">
          <Login />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}
// always export components in order to use in outside files
export default App;
