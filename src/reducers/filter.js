const CHANGE_FILTER = "CHANGE_FILTER";
const SEARCH = "SEARCH";
const initialState = {
    filterBy:"no_sorting",
    searchParam:''
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return {...state, searchParam: action.payload}
        case CHANGE_FILTER:
            return {...state,filterBy:action.payload}
        default:
            return state;
    }
}