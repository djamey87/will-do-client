import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
	posts: postsReducer,
	users: usersReducer,
	form: formReducer,
});
