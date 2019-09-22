// import _ from 'lodash';
import todo from '../apis/todo';

import { REGISTER, LOGIN, LOGOUT, FETCH_USER_SESSION } from '../constants/auth';

export const register = ({ name, email, password }) => async dispatch => {
	const response = await todo.post(`/users`, { name, email, password });

	console.log(`users register ${JSON.stringify(response.data)}`);

	dispatch({ type: REGISTER, payload: response.data });
};

export const login = ({ email, password }) => async dispatch => {
	const response = await todo.post(`/users/login`, { user: { email, password } });

	// console.log(`users login ${JSON.stringify(response.data)}`);

	dispatch({ type: LOGIN, payload: response.data });
};

export const logout = () => async dispatch => {
	const response = await todo.get(`/users/logout`);

	console.log(`users logout ${JSON.stringify(response.data)}`);

	dispatch({ type: LOGOUT, payload: response.data });
};

// get the locally signed in user
export const fetchUserSession = () => async dispatch => {
	let response;

	try {
		response = await todo.get(`/users/currentSession`);
	} catch (error) {
		response = { data: { user: null } };
	}

	console.log(`user session ${JSON.stringify(response.data)}`);

	dispatch({ type: FETCH_USER_SESSION, payload: response.data });
};
