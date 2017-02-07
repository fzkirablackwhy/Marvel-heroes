import React from 'react';
import { Route } from 'react-router';
import MyTeamPage from './MyTeamPage';

export default (
    <Route>
        <Route component={ MyTeamPage } path={ MyTeamPage.path }/>
    </Route>
);