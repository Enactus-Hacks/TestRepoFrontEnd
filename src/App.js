import React from 'react';
import { Router } from 'react-router-dom'
import { Route } from 'react-router'
import history from './history'

function App() {
  return (
    <Router history={history}>
      <Route exact path = '/'/>
    </Router>
  );
}

export default App;
