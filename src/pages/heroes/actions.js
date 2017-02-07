import { marvel } from '../../utils/marvelAPI';

export const GET_HEROES_REQUEST = 'GET_HEROES_REQUEST';
export const GET_HEROES_SUCCESS = 'GET_HEROES_SUCCESS';
export const SEARCH_HEROES_SUCCESS = 'SEARCH_HEROES_SUCCESS';
export const GET_HEROES_FAIL  = 'GET_HEROES_FAIL';

const requestGetHeroes = () => ({
    type: GET_HEROES_REQUEST
})

const receivedGetHeroes = (heroes) => ({
    type: GET_HEROES_SUCCESS,
    heroes
})

const errorGetHeroes = () => ({
    type: GET_HEROES_FAIL,
    error: true,
    payload: new Error('Error get API')
})

const searchHeroesByName = (heroes, name) => ({
    type: SEARCH_HEROES_SUCCESS,
    heroes,
    name,
    error: ''
})

const getHeroes = () => {
    return dispatch => {
        dispatch(requestGetHeroes());
        marvel.characters.findAll()
            .then(res => res.data)
            .then(heroes =>
                dispatch(receivedGetHeroes(heroes))
            )
            .catch(error =>
                dispatch(errorGetHeroes(error))
            )
    };
}

export const getHeroesByName = name => {
    return dispatch => {
        dispatch(requestGetHeroes());
        marvel.characters.findNameStartsWith(name)
            .then(res => res.data)
            .then(heroes =>
                dispatch(searchHeroesByName(heroes, name))
            )
            .catch(error =>
                dispatch(errorGetHeroes(error))
            )
    };
}

const shouldGetAllHeroes = state => {
    const heroesStore = state.heroes.heroes;
    return heroesStore.length === 0
}

export const getHeroesIfNeeded = () => {
    return (dispatch, getState) => {
        if (shouldGetAllHeroes(getState())) {
            return dispatch(getHeroes());
        }
        return false;
    };
}




