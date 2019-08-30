import React from 'react';
import { connect } from 'react-redux';

// actions
import { logout } from '../actions/user';

class Header extends React.Component {
	render() {
		const { user } = this.props;

		if (!user) {
			return null;
		}

		return (
			<div className="header">
				{user.name} <button onClick={this.props.logout}>Logout</button>
			</div>
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
