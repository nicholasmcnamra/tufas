import './App.css';
import React from 'react';
import Navbar from './navbar';
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Login';
import Header from './header';
import Search from './Search';
import AreaList from './arealist';
import AreaPage from './AreaPage'

function App() {
  const title = "welcome to the new block";


  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>

          <Route exact path= "/">
            <Search/>
            <Header />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/arealist">
            <AreaPage />
          </Route> 

        </Switch>
      </div>
    </div>
    </Router>
  );
}
// always export components in order to use in outside files
export default App;
