// import _ from 'lodash';
import todo from '../apis/todo';

import { CREATE_TASK, FETCH_TASKS } from '../constants/task';

// gotta create that shiz
export const createTask = ({ title, content }) => async dispatch => {
	const response = await todo.post(`/tasks`, { title, content });

	console.log(`tasks ${JSON.stringify(response.data)}`);

	// if there is an issue saving, do nothing, else add the post body to the tasks list

	dispatch({ type: CREATE_TASK, newTask: response.data.task });
};

export const fetchTasks = () => async dispatch => {
	const response = await todo.get(`/tasks`);

	console.log(`fetchTasks ${JSON.stringify(response.data.tasks)}`);

	dispatch({ type: FETCH_TASKS, payload: response.data });
};
