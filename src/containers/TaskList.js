import { connect } from 'react-redux';
import ToDoForm from '../components/TaskList';
import * as actions from '../actions/';

const mapStateToProps = (state) => ({
  todos: Object.values(state.todos),
  filter: state.filter
});

export default connect(
    mapStateToProps,
    actions
)(ToDoForm);