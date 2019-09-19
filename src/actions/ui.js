import { SHOW_NEW_TASK_FORM, HIDE_NEW_TASK_FORM } from '../constants/ui';

export const toggleNewTaskForm = visibility => async dispatch => {
	console.log('[toggleNewTaskForm]', visibility);

	if (visibility) {
		dispatch({ type: SHOW_NEW_TASK_FORM });
	} else {
		dispatch({ type: HIDE_NEW_TASK_FORM });
	}
};
