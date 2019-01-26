import axios from 'axios';

//Action Types
export const FETCH_USER = 'users/fetch_user';

//Action Creators
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/auth/current_user');
    
    dispatch({type: FETCH_USER, payload: res.data});
};

//Reducer
export default function reducer(state = null, action) {
    switch(action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}