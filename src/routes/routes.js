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
import StartCourse from '../pages/instructor/start_course';
import EditCourse from '../pages/instructor/edit_course';
import AddModule from '../pages/instructor/add_module';
import EditModule from '../pages/instructor/edit_module';
import ViewModule from '../pages/instructor/view_module';
import ModuleExercises from '../pages/instructor/module_exercises';
import ViewResult from '../pages/instructor/view_result';
import ModuleUnits from '../pages/instructor/module_unit';
import AddUnit from '../pages/instructor/add_unit';
import EditUnit from '../pages/instructor/edit_unit';

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
            <PrivateRoute exact path="/start_course">
              <StartCourse />
            </PrivateRoute>
            <PrivateRoute exact path="/courses/:id">
              <InstructorCourse />
            </PrivateRoute>
            <PrivateRoute exact path="/:id/edit">
              <EditCourse />
            </PrivateRoute>
            <PrivateRoute exact path="/:id/add_module">
              <AddModule />
            </PrivateRoute>
            <PrivateRoute exact path="/courses/:id/:moduleId">
              <ViewModule />
            </PrivateRoute>
            <PrivateRoute exact path="/courses/:id/:moduleId/edit">
              <EditModule />
            </PrivateRoute>
            <PrivateRoute exact path="/courses/:id/:moduleId/exercises">
              <ModuleExercises />
            </PrivateRoute>
            <PrivateRoute path="/courses/:id/:moduleId/exercise/result/:resultId">
              <ViewResult />
            </PrivateRoute>
            <PrivateRoute exact path="/courses/:id/:moduleId/units">
              <ModuleUnits />
            </PrivateRoute>
            <PrivateRoute exact path="/courses/:id/:moduleId/units/add">
              <AddUnit />
            </PrivateRoute>
            <PrivateRoute
              exact
              path="/courses/:id/:moduleId/units/:unitId/edit"
            >
              <EditUnit />
            </PrivateRoute>
          </>
        )}
      </Switch>
    </Router>
  );
}
