// import _ from 'lodash';
import todo from '../apis/todo';

// example of action chaining
// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
// 	await dispatch(fetchPosts());
//
// 	_.chain(getState().posts)
// 		.map('userId')
// 		.uniq()
// 		.forEach(id => dispatch(fetchUser(id)))
// 		.value();
// };

export const login = ({ email, password }) => async dispatch => {
	console.log(`users login ${email} ${password}`);

	// const response = await todo.post(`/users/login`, { email, password });
	const response = await todo.post(`/users/login`, { user: { email, password } });

	console.log(`users login ${JSON.stringify(response.data)}`);

	dispatch({ type: 'LOGIN', payload: response.data });
};

export const logout = () => async dispatch => {
	const response = await todo.get(`/users/logout`);

	console.log(`users logout ${JSON.stringify(response.data)}`);

	dispatch({ type: 'LOGOUT', payload: response.data });
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

	dispatch({ type: 'FETCH_USER_SESSION', payload: response.data });
};

export const fetchUsers = () => async dispatch => {
	const response = await todo.get(`/users`);

	console.log(`users ${JSON.stringify(response.data)}`);

	dispatch({ type: 'FETCH_USERS', payload: response.data });
};

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
