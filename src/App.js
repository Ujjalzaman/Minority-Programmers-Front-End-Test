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
import Learn from './components/Learn/Learn/Learn';
import Courses from './components/Courses/Courses/Courses';
import Week1 from './components/Courses/Week1/Week1';
import Activity from './components/Courses/Activity/Activity';
import ActivityComplete from './components/Courses/AcitvityComplete/ActivityComplete';

function App() {
  
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/startup">
            <StartUpDetail></StartUpDetail>
          </Route>

          <Route path="/learn">
            <Learn></Learn>
          </Route>

          <Route path="/courses">
            <Courses></Courses>
          </Route>

          <Route path="/week1">
            <Week1></Week1>
          </Route>

          <Route path="/activity">
            <Activity/>
          </Route>

          <Route path="/activity-complete">
            <ActivityComplete/>
          </Route>


        </Switch>
      </Router>
  );
}


export default App;
