//Action Types
export const UPDATE_FILTER = 'filters/update_filter_option';

//Action Creators
export const updateFilterOption = (newOption, filterName) => dispatch => {
    dispatch({type: UPDATE_FILTER, payload: {option: newOption, filter: filterName}})
}

//Reducer
const initialState = {
    itemsToShow: 20,
    displayIn: 'as paid',
    sortCoins: 'rank',
    sortTrades: 'date',
  };

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_FILTER:
            return { ...state, [action.payload.filter]: action.payload.option}
        default:
            return state;
    }
}

//Selectors
export const getNumberOfItems = (state) => {
    return state.filters.itemsToShow;
  }

export const getDisplayCurrency = (state) => {
    return state.filters.displayIn;
}

export const getCoinSortingKey = (state) => {
    return state.filters.sortCoins;
}

export const getTradeSortingKey = (state) => {
    return state.filters.sortTrades;
}
// ADD SELECTOR TO GET THE CURRENT DISPLAY KEY