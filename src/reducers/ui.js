const defaultState = {
	showNewTask: false,
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case 'SHOW_NEW_TASK_FORM':
			console.log(`${action.type} state`, state);
			return {
				...state,
				showNewTask: true,
			};
		case 'HIDE_NEW_TASK_FORM':
			console.log(`${action.type} state`, state);
			return {
				...state,
				showNewTask: false,
			};
		default:
			return state;
	}
};
