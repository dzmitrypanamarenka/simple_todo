import _ from 'lodash';
import { createAction } from 'redux-actions';

export const addTask = createAction('ADD_TASK', (todo) => (
    {todo: { ...todo, id: _.uniqueId(), status: 'active' }}
));
export const removeTask = createAction('REMOVE_TASK', id => ({ id }));
// export const applyFilter = createAction('APPLY_FILTER', filter => ({ filter }));
export const changeStatus = createAction('CHANGE_STATUS', id => ({ id }));