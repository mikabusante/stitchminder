import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router } from '@reach/router';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Reference from './components/Reference';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const res = await axios.get('/api/current_user');
      console.log('res:', res);

      if (res.data) {
        console.log('Logged in!');
        setLoggedIn(true);
      } else {
        console.log('Logged out');
      }
    };
    checkUser();
  }, []);

  return (
    <Router>
      <Reference loggedIn={loggedIn} path='/' />
      <Dashboard loggedIn={loggedIn} path='collection' />
    </Router>
  );
};

export default App;
