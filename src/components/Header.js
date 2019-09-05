import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import avatarImg from '../images/placeholder.png'; // with import

// actions
import { logout } from '../actions/user';

class Header extends React.Component {
	render() {
		const { user } = this.props;

		if (!user) {
			return null;
		}

		return (
			<Fragment>
				<div className="ui secondary menu">
					<a className="item active">Tasks</a>
					<a className="item disabled">Users</a>
					<div className="right menu">
						<div className="item">
							<div className="ui icon input" data-children-count="1">
								<input type="text" placeholder="Search..." />
								<i className="search link icon"></i>
							</div>
						</div>
						<div className="item">
							<img className="ui avatar image" src={avatarImg} />
							<span>{user.name}</span>
						</div>
						<a className="item" onClick={this.props.logout}>
							Logout
						</a>
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
