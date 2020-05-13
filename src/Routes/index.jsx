import React from 'react';
import Chart from '../components/Chart';
import InformationCard from '../components/Card';
import Dashboard from '../components/Dashboard';
import NotFoundView from '../components/NotFoundView';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { Main as MainLayout, Minimal as MinimalLayout } from '../layouts';
import { RouteWithLayout } from './RouteWithLayout';
const Routes = () => {
 return (
  <Switch>
   <Redirect exact from="/" to="/card" />
   {/* <Route component={Dashboard} path="/card" RouteWithLayout  /> */}

   <RouteWithLayout component={Dashboard} layout={MainLayout} path="/card" />
   <RouteWithLayout component={Chart} layout={MainLayout} path="/chart" />
   <RouteWithLayout component={NotFoundView} layout={MainLayout} path="/not-found" />
   {/* <Route component={Chart} path="/chart" layout={MainLayout} /> */}
   {/* <Route component={NotFoundView} path="/not-found" /> */}
   {/* <Redirect to="/not-found" /> */}
  </Switch>
 );
};

export default Routes;
