import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/auth/login/login';
import Register from './components/auth/register/register';

import Navbar from './components/navbar/Navbar';
import Landing from './components/landing/landing';
import Dashboard from './components/dashboard/dashboard';
import PrivateRoute from './components/routing/privateRoute';
import CreateProfile from './components/profile-forms/createProfile';
import EditProfile from './components/profile-forms/editProfile';
import AddExperience from './components/profile-forms/addExperience';
import AddEducation from './components/profile-forms/addEducation';
import Profiles from './components/profiles/profiles';

import { Provider } from 'react-redux';
import Alert from './components/alert/alert';
import store from './store';
import { loadUser } from './actions/action-auth';
import setAuthToken from './utils/setAuthToken';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
    
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar></Navbar>
          <Route exact path='/' component={Landing}></Route>
          <section style={{ 'paddingTop': '100px' }}>
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/profiles" component={Profiles}></Route>
              <PrivateRoute exact path="/dashboard" component={Dashboard}></PrivateRoute>
              <PrivateRoute exact path="/create-profile" component={CreateProfile}></PrivateRoute>
              <PrivateRoute exact path="/edit-profile" component={EditProfile}></PrivateRoute>
              <PrivateRoute exact path="/add-experience" component={AddExperience}></PrivateRoute>
              <PrivateRoute exact path="/add-education" component={AddEducation}></PrivateRoute>
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
};

export default App;
