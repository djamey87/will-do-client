import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../lib/History';
import AuthRoute from '../lib/AuthRoute';

import Header from './Header';
import Login from './Login';
import TaskList from './TaskList';

// actions
import { fetchUserSession } from '../actions/auth';

import '../index.scss';

class App extends React.Component {
	// default state (private to this component)
	state = {
		loading: true,
	};

	componentDidMount() {
		console.log('componentDidMount', this.props.localUser);
		this.props.fetchUserSession();
	}
	componentDidUpdate(prevProps) {
		console.log('componentDidUpdate', prevProps, this.props);

		if (this.props.localUser !== prevProps.localUser) {
			this.setState({ loading: false });
		}
	}

	render() {
		return this.state.loading ? null : (
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route exact path="/" component={Login} />

						<AuthRoute path="/tasks" component={TaskList} localUser={this.props.localUser} />
						<AuthRoute path="/deletedTasks" component={TaskList} localUser={this.props.localUser} />
					</Switch>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = state => ({
	localUser: state.users.localUser,
});

export default connect(
	mapStateToProps,
	{
		fetchUserSession,
	}
)(App);
