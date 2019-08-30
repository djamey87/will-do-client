import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
	render() {
		const { user } = this.props;

		if (!user) {
			return null;
		}

		return <div className="header">{user.name}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	return { user: state.users.localUser };
};

export default connect(mapStateToProps)(Header);
