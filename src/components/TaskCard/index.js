import React from 'react';

import './index.scss';

const TaskCard = props => {
	const { task } = props;

	return (
		<div className="task-card ui card">
			<div className="content">
				<div className="header">{task.title}</div>
			</div>
			<div className="content">
				<div className="ui small feed">
					<div className="event">
						<div className="content">
							<div className="summary">{task.content}</div>
						</div>
					</div>
				</div>
			</div>
			<div className="extra content">
				<button
					className="ui button"
					onClick={() => {
						this.onDelete(task);
					}}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default TaskCard;
