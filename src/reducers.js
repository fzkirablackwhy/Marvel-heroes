import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import HeroesReducer from './pages/heroes/reducers';
import ModalReducer from './components/modalDialog/reducers';
import TeamReducer from './pages/team/redusers'

export default combineReducers({
    routing: routerReducer,
    ...HeroesReducer,
    ...ModalReducer,
    ...TeamReducer
});