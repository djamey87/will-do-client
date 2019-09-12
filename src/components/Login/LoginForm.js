import React from 'react';

import { Field, reduxForm } from 'redux-form';

let LoginForm = props => {
	const { handleSubmit } = props;

	return (
		<div className="ui middle aligned center aligned grid">
			<div className="column four wide margin-top-60">
				<h2 className="ui header">
					<div className="content">Log in</div>
				</h2>
				<form onSubmit={handleSubmit} className="ui large form">
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
								<Field name="password" placeholder="Password" component="input" type="password" />
							</div>
						</div>
						<button type="submit" className="ui fluid large primary submit button">
							Login
						</button>
					</div>

					<div className="ui error message"></div>
				</form>
			</div>
		</div>
	);
};

LoginForm = reduxForm({
	// a unique name for the form
	form: 'login',
})(LoginForm);

export default LoginForm;
