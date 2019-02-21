//Action Types
export const UPDATE_NUMBER_OF_ITEMS = 'filters/update_number_of_items';
export const UPDATE_DISPLAY_CURRENCY = 'filters/update_display_currency';

//Action Creators
export const updateNumberItems = (itemsToShow) => ({
    type: UPDATE_NUMBER_OF_ITEMS,
    payload: itemsToShow
});

export const updateDisplayCurr = (currency) => ({
    type: UPDATE_DISPLAY_CURRENCY,
    payload: currency
});

//Reducer
const initialState = {
    itemsToShow: 20,
    displayCurr: 'as paid',
    sortBy: 'rank'
  };

  export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_NUMBER_OF_ITEMS:
            return { ...state, itemsToShow: action.payload };
        case UPDATE_DISPLAY_CURRENCY:
            return { ...state, displayCurr: action.payload };
        default:
            return state;
    }
}

//Selectors
export const getNumberOfItems = (state) => {
    return state.filters.itemsToShow;
  }

export const getSortingKey = (state) => {
    return state.filters.sortBy
}
// ADD SELECTOR TO GET THE CURRENT DISPLAY KEY