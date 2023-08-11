import React from 'react';

import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Request from './pages/Request';

import SignIn from './pages/SignIn';
import Ecars from './pages/Ecars';

function App() {
  return (
    <>
      <Router>
  
        <Switch>
          <Route path='/' exact component={SignIn} />
          <Route path='/home' exact component={Ecars} />
          <Route path='/products' component={Request} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
