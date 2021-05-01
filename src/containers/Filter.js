import * as filterActions from "../actions/filterAction"
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import Filter from "../components/Filter";


const mapStateToProps = ({filter}) => ({ //state
    filterBy:filter.filterBy,
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions,dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);