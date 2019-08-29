import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/user';
import UserHeader from './UserHeader';

class PostList extends React.Component {
	componentDidMount() {
		// this.props.fetchPostsAndUsers();
		this.props.fetchUsers();
	}

	renderList() {
		return this.props.posts.map(post => {
			return (
				<div className="item" key={post.id}>
					<div className="content">
						<div className="description">
							<h2>{post.title}</h2>
						</div>
						<UserHeader userId={post.userId} />
					</div>
				</div>
			);
		});
	}

	render() {
		return <div className="ui relaxed divided list">{this.renderList()}</div>;
	}
}

const mapStateToProps = state => {
	return { posts: state.posts };
};

export default connect(
	mapStateToProps,
	{ fetchUsers }
)(PostList);
