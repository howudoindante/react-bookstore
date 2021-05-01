const initialState = {
    items: null,
    isReady:false,
    //если больше чем только books  в объекте мы пишем ...state
}
const SET_BOOK = "SET_BOOK";
const SET_IS_READY = "SET_IS_READY";
export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOK:
            return {...state, items: action.payload,isReady:true}
        case SET_IS_READY:
            return {...state,isReady:action.payload}
        default:
            return state;
    }
}

