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
				<div class="ui card">
					<div class="content">
						<div class="header">{task.title}</div>
					</div>
					<div class="content">
						<div class="ui small feed">
							<div class="event">
								<div class="content">
									<div class="summary">{task.content}</div>
								</div>
							</div>
						</div>
					</div>
					<div class="extra content">
						<button class="ui button">Start</button>
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
	{ createTask, fetchTasks }
)(TaskList);
