import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import history from '../../lib/History';

import { register } from '../../actions/auth';

import RegisterForm from './RegisterForm';

let Register = props => {
	const { userRegistered } = props;

	// watch for successful registration to redirect
	useEffect(() => {
		// TODO: implement toastr for success feedback to user
		if (userRegistered === true) {
			history.push('/');
		}
	}, [userRegistered]);

	// ping to users/login
	const onSubmit = values => {
		console.log('onSubmit', values);

		props.register(values);
	};

	return (
		<div className="ui middle aligned center aligned grid">
			<div className="column four wide margin-top-60">
				<h2 className="ui">Register</h2>
				<RegisterForm onSubmit={onSubmit} />

				<div className="margin-top-15">
					<a href="/">Login</a>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return { userRegistered: state.users.userRegistered };
};

Register = connect(
	mapStateToProps,
	{ register }
)(Register);

export default Register;
