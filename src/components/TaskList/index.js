import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import history from '../../lib/History';

import { createTask, fetchTasks, deleteTask } from '../../actions/task';
import { toggleNewTaskForm } from '../../actions/ui';

import CreateTaskForm from './CreateTaskForm';
import TaskCard from '../TaskCard';

import './index.scss';

// TODO:
// [X] redux form for creating a task

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
			return <TaskCard task={task} key={task._id} />;
		});
	};

	render() {
		console.log('[TaskList.render]', this.props.allTasks);
		return (
			<Fragment>
				{!this.props.showNewTask ? null : (
					<CreateTaskForm onSubmit={this.onSubmit} hideForm={() => this.props.toggleNewTaskForm(false)} />
				)}
				{this.props.allTasks && this.props.allTasks.length > 0 && (
					<div className="ui centered grid task-list">
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
	return { allTasks: state.tasks.allTasks, showNewTask: state.ui.showNewTask };
};

export default connect(
	mapStateToProps,
	{ createTask, fetchTasks, deleteTask, toggleNewTaskForm }
)(TaskList);
