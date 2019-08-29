import React from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/user';

import LoginForm from './LoginForm';

class Login extends React.Component {
	componentDidMount() {}

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
	return { posts: state.posts };
};

Login = connect(
	mapStateToProps,
	{ login }
)(Login);

export default Login;
