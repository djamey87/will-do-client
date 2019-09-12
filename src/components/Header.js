import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import avatarImg from '../assets/images/placeholder.png'; // with import

// actions
import { logout } from '../actions/auth';

// TODO:
// 1. user / avatar drop down to show logout button
// 2. deleted task section
// 3. public tasks?

class Header extends React.Component {
	render() {
		const { user } = this.props;

		if (!user) {
			return null;
		}

		return (
			<Fragment>
				<div className="top-navigation ui secondary menu">
					<a className="item active">Tasks</a>
					{/*<a className="item disabled">Users</a>*/}
					<div className="right menu">
						<div className="item">
							{/*<div className="ui icon input" data-children-count="1">
								<input type="text" placeholder="Search..." />
								<i className="search link icon"></i>
							</div>*/}
						</div>
						<div className="ui simple dropdown item">
							<img className="ui avatar image" src={avatarImg} alt={`${user.name} profile`} />
							<span>{user.name}</span>
							<i className="dropdown icon"></i>
							<div className="menu user-menu">
								<a className="item" href="/deletedTasks">
									Deleted Tasks
								</a>
								<div className="item" onClick={this.props.logout}>
									Logout
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { user: state.users.localUser };
};

export default connect(
	mapStateToProps,
	{ logout }
)(Header);
