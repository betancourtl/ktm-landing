import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-flexbox-grids';

// CSS
import '../css/index.scss';

// Auth
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Register from './Auth/Register';
import ResetPassword from './Auth/ResetPassword';
import ForgetPassword from './Auth/ForgetPassword';

// Route components
import NotFound from '../components/Auth/NotFound';
import AuthRoute from '../components/Auth/AuthRoute';
import UnauthRoute from '../components/Auth/UnauthRoute';

// Home
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* Switch used to be able to render only the 404 page if no route match */}
        {/* Auth Routes used to render routes that require to be authorized */}
        {/* Unauth Routes used to render routes that require to be user to not be authorized */}
        {/* Do not use react fragments inside Switch components it will mess up route matching */}
        <Switch>
          {/* Auth Routes */}
          <AuthRoute path="/logout" component={Logout} exact />
          <UnauthRoute path="/login" component={Login} exact />
          <UnauthRoute path="/register" component={Register} exact />
          <UnauthRoute path="/forget-password" component={ForgetPassword} exact />
          <UnauthRoute path="/reset-password/:token" component={ResetPassword} exact />
          <Route path="/" component={Home} exact />
          {/* 404 */}
          <NotFound to="/" />
        </Switch>
      </div>
    );
  };
}

export default App;
