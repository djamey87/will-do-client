import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider, useTheme } from '../lib/ThemeContext';
import history from '../lib/History';
import AuthRoute from '../lib/AuthRoute';

import Header from './Header';
import Login from './Login';
import TaskList from './TaskList';

// actions
import { fetchUserSession } from '../actions/auth';
// import usePersistedState from '../actions/persistedState';

import '../index.scss';

const App = props => {
	const { localUser } = props;
	const [theme, toggleTheme] = useTheme();
	// const [theme, setTheme] = usePersistedState('theme', 'light');
	// default state (private to this component)
	// const [loading, setLoading] = useState(null);

	// this is equivalent to componentDidMount
	useEffect(() => {
		console.log('App mounted');
		props.fetchUserSession();

		// this is equivalent to componentWillUnmount
		return () => {
			console.log('[CreateTaskForm] unmount');
		};
	}, []);

	return localUser === false ? null : (
		<Router history={history}>
			<div className={`theme-${theme}`}>
				<Header />
				<Switch>
					<Route exact path="/" component={Login} />

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
