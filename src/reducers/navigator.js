
import * as types from '../constants/ActionTypes';

const initialRoute = {path: ['songs'], query: {q: 'house'}};
const initialState = {route: initialRoute};

export default function navigator(state = initialState, action) {
    switch (action.type) {

        case types.CHANGE_PATH:
            debugger;
            return Object.assign({}, state, {
            route: action.route
        });
    default:
        return state;
    }
}
