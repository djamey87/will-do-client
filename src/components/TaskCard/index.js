import React from 'react';
import { connect } from 'react-redux';

import { deleteTask } from '../../actions/task';

import './index.scss';

const TaskCard = props => {
	const { task } = props;

	const onDelete = ({ _id }) => {
		console.log('onDelete', _id);

		props.deleteTask(_id);
	};

	return (
		<div className="task-card ui card">
			<div className="content">
				<h3 className="card-header">
					{task.title}{' '}
					<span
						className="delete-button"
						onClick={() => {
							onDelete(task);
						}}>
						<i className="close icon"></i>
					</span>
				</h3>
			</div>
			{task.content && (
				<div className="content">
					<div className="ui small feed">
						<p>{task.content}</p>
					</div>
				</div>
			)}
		</div>
	);
};

// export default TaskCard;
// const mapStateToProps = state => ({
// 	localUser: state.users.localUser,
// });

export default connect(
	null,
	{
		deleteTask,
	}
)(TaskCard);
