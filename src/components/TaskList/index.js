import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import history from '../../lib/History';

import { createTask, fetchTasks, deleteTask } from '../../actions/task';

import CreateTaskForm from './CreateTaskForm';
import './index.scss';

// TODO:
// 1. redux form for creating a task
// 2. drag and drop listing of tasks
// 3. carousel for different lists

class TaskList extends React.Component {
	static defaultProps = {
		taskStatus: 'active',
	};

	componentDidMount() {
		let status = this.props.taskStatus;

		// TODO: query the url to determine the status needed for retrieval
		console.log(
			'[TaskList.componentDidMount]',
			history.location.pathname,
			history.location.pathname.indexOf('delete')
		);

		if (history.location.pathname.indexOf('delete') !== -1) {
			status = 'deleted';
		}

		console.log('[TaskList.componentDidMount]', status);

		this.props.fetchTasks({ status });
	}

	componentDidUpdate(prevProps) {
		console.log('[TaskList.componentDidUpdate]', prevProps, this.props);
		// this.scrollToBottom();
	}

	onDelete = ({ _id }) => {
		console.log('onDelete', _id);

		this.props.deleteTask(_id);
	};

	// validate body of form, and push to server
	onSubmit = values => {
		console.log('onSubmit', values);

		this.props.createTask(values);
		// this.props.login({ email: 'djamey87@gmail.com', password: 'daveisgreat' });
	};

	renderList = tasks => {
		// console.log('renderList', tasks);
		return tasks.map(task => {
			return (
				<div className="task-card ui card" key={task._id}>
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
						<button className="ui button">Start</button>
					</div>
				</div>
			);
		});
	};

	render() {
		console.log('[TaskList.render]', this.props.allTasks);
		return (
			<Fragment>
				<CreateTaskForm onSubmit={this.onSubmit} />
				{this.props.allTasks && this.props.allTasks.length > 0 && (
					<div className="ui centered grid">
						<div className="fourteen wide phone eight wide computer six wide tablet column">
							{this.renderList(this.props.allTasks)}
						</div>
					</div>
				)}
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return { allTasks: state.tasks.allTasks };
};

export default connect(
	mapStateToProps,
	{ createTask, fetchTasks, deleteTask }
)(TaskList);
