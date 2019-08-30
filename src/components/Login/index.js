import React from 'react';
import { connect } from 'react-redux';
import history from '../../lib/History';

import { login } from '../../actions/user';

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

		// this.props.login(values);
		this.props.login({ email: 'djamey87@gmail.com', password: 'daveisgreat' });
	};

	render() {
		return <LoginForm onSubmit={this.onSubmit} />;
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
