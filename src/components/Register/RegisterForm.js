import React from 'react';

import { Field, reduxForm } from 'redux-form';

let RegisterForm = props => {
	const { handleSubmit } = props;

	return (
		<form onSubmit={handleSubmit} className="ui large form">
			<div className="ui stacked">
				<div className="field">
					<div className="ui left icon input">
						<i className="user icon"></i>
						<Field name="name" placeholder="Full name" component="input" type="text" />
					</div>
				</div>
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
					Register
				</button>
			</div>

			<div className="ui error message"></div>
		</form>
	);
};

RegisterForm = reduxForm({
	// a unique name for the form
	form: 'register',
})(RegisterForm);

export default RegisterForm;
