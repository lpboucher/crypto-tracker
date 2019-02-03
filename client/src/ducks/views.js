import { NEW_TRADE_SUCCESS, UPDATE_TRADE_SUCCESS, UPDATE_ACTIVE_DETAILS, ENTER_NEW_DETAILS } from './trades'; 

//Action Types
export const OPEN_DRAWER = 'views/open_drawer';
export const CLOSE_DRAWER = 'views/close_drawer';


//Action Creators
export const openDrawer = () => dispatch => {
    dispatch({type: OPEN_DRAWER})
}

export const closeDrawer = () => dispatch => {
    dispatch({type: CLOSE_DRAWER})
}


//Reducer
const initialState = {
    isDrawerOpen: false
  };

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ENTER_NEW_DETAILS:
        case UPDATE_ACTIVE_DETAILS:
        case OPEN_DRAWER:
            return { ...state, isDrawerOpen: true };
        case UPDATE_TRADE_SUCCESS:
        case NEW_TRADE_SUCCESS:
        case CLOSE_DRAWER:
            return { ...state, isDrawerOpen: false };
        default:
            return state;
    }
}