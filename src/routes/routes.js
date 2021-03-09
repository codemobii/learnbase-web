import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainLayout from '../components/layouts/main.layout';
import ForgotPassword from '../pages/auth/forgot_password';
import ResetPassword from '../pages/auth/reset_password';
import Signin from '../pages/auth/sign_in';
import Signup from '../pages/auth/sign_up';
import Verify from '../pages/auth/verify';

import Profile from '../pages/user';
import Exercise from '../pages/user/exercise';
import Modules from '../pages/user/modules';
import Read from '../pages/user/read';
import RegCourse from '../pages/user/reg_course';
import Result from '../pages/user/result';
import Cookies from 'js-cookie';
import Instructor from '../pages/instructor';
import InstructorCourse from '../pages/instructor/course';

// Pricate route
function PrivateRoute({ children, ...rest }) {
  const user = Cookies.get('id');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth/sign_in',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

// Route

export default function Routes() {
  //
  const role = Cookies.get('role');

  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/auth/sign_in">
            <Signin />
          </Route>
          <Route exact path="/auth/sign_up">
            <Signup />
          </Route>
          <Route exact path="/auth/forgot_password">
            <ForgotPassword />
          </Route>
          <Route exact path="/auth/reset_password">
            <ResetPassword />
          </Route>
          <Route exact path="/auth/verify">
            <Verify />
          </Route>
          {role !== '2' ? (
            <>
              <PrivateRoute exact path="/">
                <Profile />
              </PrivateRoute>
              <PrivateRoute exact path="/start_course">
                <RegCourse />
              </PrivateRoute>
              <PrivateRoute exact path="/courses/:id">
                <Modules />
              </PrivateRoute>
              <PrivateRoute exact path="/courses/:id/:moduleId">
                <Read />
              </PrivateRoute>
              <PrivateRoute exact path="/courses/:id/:moduleId/exercise">
                <Exercise />
              </PrivateRoute>
              <PrivateRoute path="/courses/:id/:moduleId/exercise/result/:resultId">
                <Result />
              </PrivateRoute>
            </>
          ) : (
            <>
              <PrivateRoute exact path="/">
                <Instructor />
              </PrivateRoute>
              <PrivateRoute exact path="/courses/:id">
                <InstructorCourse />
              </PrivateRoute>
            </>
          )}
        </Switch>
      </MainLayout>
    </Router>
  );
}
