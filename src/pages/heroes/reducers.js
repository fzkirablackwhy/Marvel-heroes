import {
        GET_HEROES_REQUEST,
        GET_HEROES_SUCCESS,
        SEARCH_HEROES_SUCCESS,
        GET_HEROES_FAIL
} from './actions';

const initialState = {
    heroes: [],
    error: '',
    isLoading: false,
};

const heroesReducer = (state = initialState, action)  => {
    switch (action.type) {
        case GET_HEROES_REQUEST:
            return {...state,
                isLoading: true,
            };
        case GET_HEROES_SUCCESS:
            return {...state,
                heroes: action.heroes,
                isLoading: false,
                error: ''
            };
        case SEARCH_HEROES_SUCCESS:
            return {...state,
                heroes: action.heroes,
                name: action.name,
                isLoading: false,
                error: action.error
            };
        case GET_HEROES_FAIL:
            return {...state,
                error: action.payload.message,
                isLoading: false
            };
        default:
            return state;
    }
};

const HeroesReducer = {
    heroes: heroesReducer
};

export default HeroesReducer;