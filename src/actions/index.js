import _ from 'lodash';
import { createAction } from 'redux-actions';

export const addTask = createAction('ADD_TASK', (todo) => (
    {todo: { ...todo, id: _.uniqueId(), status: 'active' }}
));