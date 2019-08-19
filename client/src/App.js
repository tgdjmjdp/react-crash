import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/auth/login/login';
import Register from './components/auth/register/register';

import Navbar from './components/navbar/Navbar';
import Landing from './components/landing/landing';

const App = () => (
  <Router>
    <Fragment>
    <Navbar></Navbar>
    <Route exact path='/' component={Landing}></Route>
    <section>
      <Switch>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </section>
    </Fragment>
  </Router>
);

export default App;
