import { REMOVE_FROM_TEAM, ADD_TO_TEAM } from './actions';

const teamReducer = ( state = {}, action) => {
    switch (action.type) {
        case ADD_TO_TEAM:
            let hero = action.hero;
            state[hero.id] = action.hero;
            return {...state };
        case REMOVE_FROM_TEAM:
            // delete state[id];
            let newState = {...state }
            delete newState[action.id] // shallowly mutating a shallow copy is fine
            return newState;
        default:
            return state;
    }
}

const TeamReducer = {
    myTeam: teamReducer
};

export default TeamReducer;