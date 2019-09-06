// import _ from 'lodash';
import todo from '../apis/todo';

import { FETCH_USERS } from '../constants/user';

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

export const fetchUsers = () => async dispatch => {
	const response = await todo.get(`/users`);

	console.log(`users ${JSON.stringify(response.data)}`);

	dispatch({ type: FETCH_USERS, payload: response.data });
};

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
