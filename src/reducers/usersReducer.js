export default (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN':
			console.log('LOGIN', action);
			return {
				...state,
				localUser: action.payload.user,
			};
		case 'FETCH_USER_SESSION':
			console.log('FETCH_USER_SESSION', action);
			return {
				...state,
				localUser: action.payload.user,
			};
		case 'FETCH_USERS':
			return state;
		default:
			return state;
	}
};
