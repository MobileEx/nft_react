import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from 'components/Layout';
import AuthLayout from '../components/Layout/AuthLayout';
import Home from '../containers/Home';
import Activity from '../containers/Activity';
import ConnectWallet from '../containers/ConnectWallet';
import EditProfile from '../containers/EditProfile';
import FAQ from '../containers/FAQ';
import ProductDetail from '../containers/ProductDetail';
import Profile from '../containers/Profile';
import Search from '../containers/Search';
import Upload from '../containers/Upload';
import UploadEdit from '../containers/Upload/UploadEdit';

import SignIn from '../containers/Auth/SignIn';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" render={() => (<Redirect to="/home" />)} />

      <PublicRoute
        path="/auth/login"
        component={SignIn}
        layout={AuthLayout}
      />

      <PrivateRoute
        path="/home"
        component={Home}
        layout={Layout}
      />

      <PrivateRoute
        path="/activity"
        component={Activity}
        layout={Layout}
      />

      <PrivateRoute
        path="/connect-wallet"
        component={ConnectWallet}
        layout={Layout}
      />

      <PrivateRoute
        path="/profile/edit"
        component={EditProfile}
        layout={Layout}
      />

      <PrivateRoute
        path="/profile"
        component={Profile}
        layout={Layout}
      />

      <PrivateRoute
        path="/faq"
        component={FAQ}
        layout={Layout}
      />

      <PrivateRoute
        path="/product/detail"
        component={ProductDetail}
        layout={Layout}
      />

      <PrivateRoute
        path="/search"
        component={Search}
        layout={Layout}
      />

      <PrivateRoute
        path="/upload"
        exact
        component={Upload}
        layout={Layout}
      />

      <PrivateRoute
        path="/upload/:type"
        component={UploadEdit}
        layout={Layout}
      />
    </Switch>
  </>
);

export default Routes;
