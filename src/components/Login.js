import React from 'react';
import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form';

class Login extends React.Component {
	componentDidMount() {}

	// ping to users/login
	onSubmit = () => {
		console.log('onSubmit');
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<label>
					<Field name="sex" component="input" type="radio" value="male" /> Male
				</label>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return { posts: state.posts };
};

Login = reduxForm({
	// a unique name for the form
	form: 'login',
})(Login);

Login = connect(
	mapStateToProps,
	null
)(Login);

export default Login;
