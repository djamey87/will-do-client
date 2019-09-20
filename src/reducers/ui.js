import { SHOW_NEW_TASK_FORM, HIDE_NEW_TASK_FORM, UPDATE_THEME } from '../constants/ui';

const defaultState = {
	showNewTask: false,
	theme: 'light',
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case SHOW_NEW_TASK_FORM:
			console.log(`${action.type} state`, state);
			return {
				...state,
				showNewTask: true,
			};
		case HIDE_NEW_TASK_FORM:
			console.log(`${action.type} state`, state);
			return {
				...state,
				showNewTask: false,
			};
		case UPDATE_THEME:
			console.log(`${action.type} theme`, action.theme);
			const { theme } = action;

			return {
				...state,
				theme,
			};
		default:
			return state;
	}
};
