import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { createTask, fetchTasks } from '../../actions/task';

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

	// validate body of form, and push to server
	onSubmit = values => {
		console.log('onSubmit', values);

		this.props.createTask(values);
		// this.props.login({ email: 'djamey87@gmail.com', password: 'daveisgreat' });
	};

	renderList(tasks) {
		console.log('renderList', tasks);
		return tasks.map(task => {
			return (
				<div className="item" key={task._id}>
					<div className="content">
						<div className="description">
							<h2>{task.title}</h2>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		console.log('[TaskList.render]', this.props.allTasks);
		return (
			<Fragment>
				<CreateTaskForm onSubmit={this.onSubmit} />

				{this.props.allTasks && this.props.allTasks.length > 0 && (
					<div className="ui relaxed divided list">{this.renderList(this.props.allTasks)}</div>
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
	{ createTask, fetchTasks }
)(TaskList);
