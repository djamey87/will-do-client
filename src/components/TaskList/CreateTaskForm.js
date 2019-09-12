import React, { useEffect, useState } from 'react';

import { Field, reduxForm } from 'redux-form';

let CreateTaskForm = props => {
	const { handleSubmit } = props;
	const [showForm, setShowForm] = useState(false);

	// this is equivalent to componentDidMount
	useEffect(() => {
		console.log('[CreateTaskForm] mount', showForm);

		// this is equivalent to componentWillUnmount
		return () => {
			console.log('[CreateTaskForm] unmount');
		};
	}, []);

	return (
		<div className="ui middle aligned center aligned grid task-form">
			{!showForm ? (
				<div className="column four wide">
					<button
						type="button"
						className="ui fluid large teal submit button"
						onClick={() => {
							setShowForm(true);
						}}>
						Add Task
					</button>
				</div>
			) : (
				<div className="column four wide">
					<h2 className="ui teal image header">
						<div className="content">Create a new task</div>
					</h2>
					<form onSubmit={handleSubmit} className="ui large form">
						<div className="ui stacked segment">
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

							<button type="submit" className="ui fluid large teal submit button">
								Create
							</button>

							<button
								type="button"
								className="ui fluid submit button margin-top-15"
								onClick={() => {
									setShowForm(false);
								}}>
								Cancel
							</button>
						</div>

						<div className="ui error message"></div>
					</form>
				</div>
			)}
		</div>
	);
};

CreateTaskForm = reduxForm({
	// a unique name for the form
	form: 'createTask',
})(CreateTaskForm);

export default CreateTaskForm;
