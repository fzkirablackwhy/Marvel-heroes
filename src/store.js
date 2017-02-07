import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers';

export default function configureStore(persistedState) {
    const store = compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)(rootReducer, persistedState);

    return store;
}