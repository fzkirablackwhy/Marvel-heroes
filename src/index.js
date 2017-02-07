import ReactDOM from 'react-dom';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './store';
import { loadState, saveState } from './utils/localStorage'
import throttle from 'lodash/throttle';
export const persistedState = loadState();
export const store = configureStore(persistedState);

store.subscribe(throttle(() => {
    saveState({
        myTeam: store.getState().myTeam,
        heroes: store.getState().heroes
    });
}, 1000));

const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);