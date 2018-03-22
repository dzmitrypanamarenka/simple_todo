import { connect } from 'react-redux';
import Filters from '../components/Filters';
import * as actions from '../actions/';

export default connect(
    null,
    actions
)(Filters);