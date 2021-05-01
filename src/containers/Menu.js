import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import Menu from "../components/Menu";
import * as cartActions from "../actions/cartAction";
import uniqBy from "lodash/uniqBy"


const getTotal = (cartItems) => {
    return cartItems.reduce((total,item) => total+=item.price,0)
}


const mapStateToProps = ({cart}) => ({//state
    cart:uniqBy(cart.items , item => item.id),
    total: getTotal(cart.items),
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);