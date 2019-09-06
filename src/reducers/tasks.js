import { CREATE_TASK, FETCH_TASKS } from '../constants/task';

const defaultState = {
	allTasks: [],
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_TASKS:
			console.log(`${action.type}`, action.payload.tasks);
			console.log(`${action.type} state`, state);
			return {
				...state,
				allTasks: action.payload.tasks,
			};
		case CREATE_TASK:
			console.log(`${action.type} state`, state);

			return {
				...state,
				allTasks: [action.newTask, ...state.allTasks],
			};
		default:
			return state;
	}
};
