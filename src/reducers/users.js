import { LOGIN, LOGOUT, FETCH_USER_SESSION, FETCH_USERS } from '../constants/user';

const defaultState = {
	localUser: false,
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case LOGIN:
			// console.log(`${action.type}`, action);
			return {
				...state,
				localUser: action.payload.user,
			};
		case LOGOUT:
			// console.log(`${action.type}`, action);
			return {
				...state,
				localUser: null,
			};
		case FETCH_USER_SESSION:
			console.log(`${action.type}`, action);
			return {
				...state,
				localUser: action.payload.user,
			};
		case FETCH_USERS:
			return state;
		default:
			return state;
	}
};
