import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import { useTheme } from '../lib/ThemeContext';
import history from '../lib/History';
import AuthRoute from '../lib/AuthRoute';

import Header from './Header';
import Login from './Login';
import Register from './Register';
import TaskList from './TaskList';

// actions
import { fetchUserSession } from '../actions/auth';
// import usePersistedState from '../actions/persistedState';

import '../index.scss';

const App = props => {
	const { localUser } = props;
	const [theme, toggleTheme] = useTheme();

	// this is equivalent to componentDidMount
	useEffect(() => {
		console.log('App mounted');
		props.fetchUserSession();

		// this is equivalent to componentWillUnmount
		return () => {
			console.log('[CreateTaskForm] unmount');
		};
	}, []);

	// watch for theme changes and apply classname to the body tag
	useEffect(() => {
		// should maybe replace with regex, to avoid overriding any other classes attached to the body
		document.body.className = `theme-${theme}`;
	}, [theme]);

	return localUser === false ? null : (
		<Router history={history}>
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Login} />
					<Route exact path="/register" component={Register} />

					<AuthRoute path="/tasks" component={TaskList} localUser={localUser} />
					<AuthRoute path="/deletedTasks" component={TaskList} localUser={localUser} />
				</Switch>
			</div>
		</Router>
	);
};

const mapStateToProps = state => ({
	localUser: state.users.localUser,
});

export default connect(
	mapStateToProps,
	{
		fetchUserSession,
	}
)(App);
