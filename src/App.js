import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import StartUpDetail from './components/Detail/StartUpDetail/StartUpDetail';

function App() {
  
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/detail">
            <StartUpDetail></StartUpDetail>
          </Route>


        </Switch>
      </Router>
  );
}


export default App;
