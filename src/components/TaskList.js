import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/user';
import Header from './Header';

class TaskList extends React.Component {
	componentDidMount() {
		// this.props.fetchPostsAndUsers();
		this.props.fetchUsers();
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

	renderList() {
		return (
			<div className="item">
				<div className="content">
					<div className="description">
						<h2>Test</h2>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<Fragment>
				<Header />
				<div className="ui relaxed divided list">{this.renderList()}</div>;
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return { posts: state.posts };
};

export default connect(
	mapStateToProps,
	{ fetchUsers }
)(TaskList);
