import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import { CREATE_TASK } from '../constants/task';

import tasks from './tasks';
import users from './users';
import ui from './ui';

export default combineReducers({
	tasks: tasks,
	users: users,
	ui: ui,

	// handle form submissions
	form: formReducer.plugin({
		createTask: (state, action) => {
			// <------ 'account' is name of form given to reduxForm()
			switch (action.type) {
				case CREATE_TASK:
					return undefined; // <--- blow away form data
				default:
					return state;
			}
		},
	}),
});
