import {booksReducer} from "./books"
import {cartReducer} from "./cart"
import {combineReducers} from "redux";
import {filterReducer} from "./filter";

export default combineReducers({
        books:booksReducer,//из-за этого возвращается 2 books
        cart:cartReducer,
        filter: filterReducer
})

