import { connect } from 'react-redux';
import ToDoForm from '../components/ToDoForm';
import * as actions from '../actions/';

const mapStateToProps = (state) => ({
  todos: Object.values(state.todos)
});

export default connect(
    mapStateToProps,
    actions
)(ToDoForm);