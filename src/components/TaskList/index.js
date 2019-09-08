import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { createTask, fetchTasks, deleteTask } from '../../actions/task';

import CreateTaskForm from './CreateTaskForm';

// TODO:
// 1. redux form for creating a task
// 2. drag and drop listing of tasks
// 3. carousel for different lists

class TaskList extends React.Component {
	componentDidMount() {
		this.props.fetchTasks();
	}

	// renderList() {
	// 	return this.props.posts.map(post => {
	// 		return (
	// 			<div className="item" key={post.id}>
	// 				<div className="content">
	// 					<div className="description">
	// 						<h2>{post.title}</h2>
	// 					</div>
	// 					<UserHeader userId={post.userId} />
	// 				</div>
	// 			</div>
	// 		);
	// 	});
	// }

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
		console.log('renderList', tasks);
		return tasks.map(task => {
			return (
				<div className="ui card" key={task._id}>
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
					<div className="ui middle aligned center aligned grid">
						<div className="ui column four wide">{this.renderList(this.props.allTasks)}</div>
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
