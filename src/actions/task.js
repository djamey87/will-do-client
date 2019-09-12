// import _ from 'lodash';
import todo from '../apis/todo';

import { CREATE_TASK, FETCH_TASKS, DELETE_TASK } from '../constants/task';

// gotta create that shiz
export const createTask = ({ title, content }) => async dispatch => {
	const response = await todo.post(`/tasks`, { title, content });

	console.log(`tasks ${JSON.stringify(response.data)}`);

	// if there is an issue saving, do nothing, else add the post body to the tasks list

	dispatch({ type: CREATE_TASK, newTask: response.data.task });
};

// TODO: fetch by status
export const fetchTasks = ({ status }) => async dispatch => {
	const response = await todo.get(`/tasks${status ? '?status=' + status : ''}`);

	console.log(`fetchTasks status: "${status}" ${JSON.stringify(response.data.tasks.length)}`);

	dispatch({ type: FETCH_TASKS, payload: response.data });
};

export const deleteTask = _id => async dispatch => {
	let response;

	try {
		response = await todo.delete(`/tasks/${_id}`);
	} catch (err) {
		console.warn(`issue deleting task with _id ${_id}`);

		// TODO: dispatch to an errors store?
		return;
	}

	console.log(`deleteTask ${JSON.stringify(response.data)}`);

	dispatch({ type: DELETE_TASK, deletedTaskId: _id });
};
