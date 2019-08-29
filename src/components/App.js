import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../lib/History';
import AuthRoute from '../lib/AuthRoute';

// TODO: router implementation
import Login from './Login';
import PostList from './PostList';

// actions
import { fetchUserSession } from '../actions/user';

import '../index.scss';

class App extends React.Component {
	componentDidMount() {
		this.props.fetchUserSession();
	}
	componentDidUpdate() {
		console.log('componentDidUpdate', this.props);
	}

	render() {
		return (
			<Router history={history}>
				<div>
					<Switch>
						<Route exact path="/" component={Login} />

						<AuthRoute path="/tasks" component={PostList} localUser={this.props.localUser} />
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
