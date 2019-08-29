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
			<div className="ui middle aligned center aligned grid">
				<div className="column four wide margin-top-60">
					<h2 className="ui teal image header">
						<div className="content">Log-in to your account</div>
					</h2>
					<form onSubmit={this.onSubmit} className="ui large form">
						<div className="ui stacked segment">
							<div className="field">
								<div className="ui left icon input">
									<i className="user icon"></i>
									<Field name="email" placeholder="E-mail address" component="input" type="text" />
								</div>
							</div>
							<div className="field">
								<div className="ui left icon input">
									<i className="lock icon"></i>
									<Field name="email" placeholder="Password" component="input" type="password" />
								</div>
							</div>
							<div className="ui fluid large teal submit button">Login</div>
						</div>

						<div className="ui error message"></div>
					</form>
				</div>
			</div>
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
