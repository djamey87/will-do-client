import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import tasks from './tasks';
import users from './users';

export default combineReducers({
	tasks: tasks,
	users: users,
	form: formReducer,
});
