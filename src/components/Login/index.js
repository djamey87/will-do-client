import React from 'react';
import { connect } from 'react-redux';
import history from '../../lib/History';

import { login } from '../../actions/auth';

import LoginForm from './LoginForm';

class Login extends React.Component {
	componentDidMount() {
		this.checkLoginStatus();
	}

	componentDidUpdate(prevProps) {
		console.log('componentDidUpdate', prevProps, this.props);

		if (this.props.loggedIn !== prevProps.loggedIn) {
			this.checkLoginStatus();
		}
	}

	checkLoginStatus = () => {
		if (this.props.loggedIn) {
			history.push('/tasks');
		}
	};

	// ping to users/login
	onSubmit = values => {
		console.log('onSubmit', values);

		this.props.login(values);
		// this.props.login({ email: 'djamey87@gmail.com', password: 'daveisgreat' });
	};

	render() {
		return (
			<div className="ui middle aligned center aligned grid">
				<div className="column four wide margin-top-60">
					<h2 className="ui">Log in</h2>
					<LoginForm onSubmit={this.onSubmit} />

					<div className="margin-top-15">
						<a href="/register">Not got an account?</a>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { loggedIn: state.users.localUser };
};

Login = connect(
	mapStateToProps,
	{ login }
)(Login);

export default Login;
