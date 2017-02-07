import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './pages/home/Home';
import HomeRoutes from './pages/home/Home';
import ErrorPage from './pages/error/Error';
import HeroesRoutes from './pages/heroes/routes'
import TeamRoutes from './pages/team/routes';

export default (
    <Route component={App} path={App.path} >
        <IndexRoute component={HomePage}/>
        {HomeRoutes}
        {HeroesRoutes}
        {TeamRoutes}
        <Route path='*' component={ErrorPage}/>
    </Route>
);