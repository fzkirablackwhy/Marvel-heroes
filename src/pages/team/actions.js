export const REMOVE_FROM_TEAM = 'REMOVE_FROM_TEAM';
export const ADD_TO_TEAM = 'ADD_TO_TEAM';

export const removeFromTeam = (id) => {
    if(id) {
        return {
            type: REMOVE_FROM_TEAM,
            id,
        }
    }
}

export const addToTeam = (hero) => {
    return {
        type: ADD_TO_TEAM,
        hero,
    }
}