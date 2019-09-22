import React from 'react';
import { Field, reduxForm } from 'redux-form';

let CreateTaskForm = props => {
	const { handleSubmit } = props;
	const { hideForm } = props;

	return (
		<div className="ui middle aligned center aligned grid task-form">
			<div className="column four wide task-form-container drop-shadow">
				<h2 className="">Create a new task</h2>
				<form onSubmit={handleSubmit} className="ui large form">
					<div className="ui stacked">
						<div className="field">
							<div className="ui input">
								<Field name="title" placeholder="Title" component="input" type="text" />
							</div>
						</div>
						<div className="field">
							<div className="ui input">
								<Field name="content" placeholder="Description" component="input" type="text" />
							</div>
						</div>

						<button type="submit" className="ui fluid large primary button">
							Create
						</button>

						<button
							type="button"
							className="ui fluid button secondary margin-top-15"
							onClick={() => {
								hideForm();
							}}>
							Cancel
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
