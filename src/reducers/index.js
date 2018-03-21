import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions/';

const todos = handleActions({
  [actions.addTask](state, { payload: { todo } }) {
    return { ...state, [todo.id]: todo };
  }
}, {});

export default combineReducers({
  todos,
  form: formReducer
})
