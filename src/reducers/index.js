import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
import * as actions from '../actions/';

const todos = handleActions({
  [actions.addTask](state, { payload: { todo }}) {
    return { ...state, [todo.id]: todo };
  },
  [actions.removeTask](state, { payload: { id } }){
    return _.omit(state, id);
  },
  [actions.changeStatus](state, { payload: { id } }){
    const newStatus = state[id].status === 'active' ? 'done' : 'active';
    const task = { ...state[id], status: newStatus };
    return { ...state, [id]: task};
  }
}, {});

export default combineReducers({
  todos,
  form: formReducer
})
