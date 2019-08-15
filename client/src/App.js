import React from 'react';
import { Router } from '@reach/router';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Reference from './components/Reference';

const App = () => (
  <Router>
    <Home path='/' />
    <Dashboard path='collection' />
    <Reference path='reference' />
  </Router>
);

export default App;
