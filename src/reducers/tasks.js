// import _ from 'lodash';
import { CREATE_TASK, FETCH_TASKS, DELETE_TASK } from '../constants/task';

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

		case DELETE_TASK:
			// TODO: if task id is found in the list, then remove
			console.log(`${action.type} state`, state);

			const { deletedTaskId } = action;

			// remove the specified task from the list (note, its already removed on the back end at this points)
			const updatedTaskList = state.allTasks.filter(task => String(task._id) !== String(deletedTaskId));

			return {
				...state,
				allTasks: updatedTaskList,
			};
		default:
			return state;
	}
};
