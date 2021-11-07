import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserProfile from './pages/UserProfile';
import Trainers from './pages/Trainers';
import Gym from './pages/Gym';
import  Session  from './pages/Session';

function App() {
  return (
    <>
     <Router>
        <Sidebar />
        <Switch>
          <Route path='/gym' exact component={Gym} />
          <Route path='/trainers' component={Trainers} />
          <Route path='/userProfile' component={UserProfile} />
          <Route path='/session' component={Session} />

        </Switch>
      </Router>
    </>
  );
}

export default App;