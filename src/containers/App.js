import {setBooks} from "../actions/booksAction";
import {addBook} from "../actions/cartAction";
import * as booksActions from "../actions/booksAction"
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import App from "../components/App"
import orderBy from "lodash/orderBy.js"


const sortBy = (items, typeOfSort) => {
    switch (typeOfSort) {
        case "no_sorting":
            return items
        case "name_up":
            return orderBy(items, 'title', 'asc');
        case "author_up":
            return orderBy(items, 'author', 'asc');
        case "price_up":
            return orderBy(items, 'price', 'asc');
        case "price_down":
            return orderBy(items, 'price', 'desc');
        case "rating_down":
            return orderBy(items, 'rating', 'desc');
        default:
            return items
    }
}

const findBook = (books, name) => {
    return books? books.filter(item => item.title.toLowerCase().indexOf(name.toLowerCase()) >= 0
        || item.author.toLowerCase().indexOf(name.toLowerCase()) >= 0) : books
}

const mapStateToProps = ({books, cart, filter}) => ({ //state
    books: sortBy(findBook(books.items, filter.searchParam),filter.filterBy),
    isReady: books.isReady,
    cartItem: cart.items
});
const mapDispatchToProps = dispatch => ({
    // setBooks: books => dispatch(setBooks(books)),
    // addBook: book => dispatch(addBook(book))
    ...bindActionCreators(booksActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);