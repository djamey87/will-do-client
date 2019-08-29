import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import todo from '../apis/todo';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());

	_.chain(getState().posts)
		.map('userId')
		.uniq()
		.forEach(id => dispatch(fetchUser(id)))
		.value();
};

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');

	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// get the locally signed in user
export const fetchUserSession = () => async dispatch => {
	const response = await todo.get(`/users/currentSession`);

	console.log(`users ${JSON.stringify(response.data)}`);

	dispatch({ type: 'FETCH_USER_SESSION', payload: response.data });
};

export const fetchUser = id => async dispatch => {
	const response = await jsonPlaceholder.get(`/users/${id}`);

	dispatch({ type: 'FETCH_USER', payload: response.data });
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
