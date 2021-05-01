import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import * as cartActions from "../actions/cartAction";
import BookCard from "../components/BookCard";


const mapStateToProps = ({cart},{id}) => ({//state
    countOfSameBooks:cart.items.reduce((count,item)=>count+(item.id === id?1:0),0)
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);