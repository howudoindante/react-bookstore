const initialState = {
    items: [],
}

const ADD_BOOK_TO_CART = "ADD_BOOK_TO_CART";
const REMOVE_BOOK_FROM_CART = "REMOVE_BOOK_FROM_CART";
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK_TO_CART:
            return {...state, items:[...state.items , action.payload]}
        case REMOVE_BOOK_FROM_CART:
            return {...state,items:state.items.filter(item=>item.id!==action.payload)}
        default:
            return state;
    }
}