import React from 'react';
import { Router } from '@reach/router';

import Home from './components/Home';
import Dashboard from './components/Dashboard';

const App = () => (
  <Router>
    <Home path='/' />
    <Dashboard path='dashboard' />
  </Router>
);

export default App;
