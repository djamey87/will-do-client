import React from 'react';

import { Field, reduxForm } from 'redux-form';

let CreateTaskForm = props => {
	const { handleSubmit } = props;

	return (
		<div className="ui middle aligned center aligned grid">
			<div className="column four wide margin-top-60">
				<h2 className="ui teal image header">
					<div className="content">Log-in to your account</div>
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
						<button type="submit" className="ui fluid large teal submit button">
							Login
						</button>
					</div>

					<div className="ui error message"></div>
				</form>
			</div>
		</div>
	);
};

CreateTaskForm = reduxForm({
	// a unique name for the form
	form: 'createTask',
})(CreateTaskForm);

export default CreateTaskForm;
