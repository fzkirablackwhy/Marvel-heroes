import React from 'react';
import { Route } from 'react-router';
import HeroesPage from './HeroesPage';

export default (
    <Route>
        <Route component={HeroesPage} path={HeroesPage.path}/>
    </Route>
);