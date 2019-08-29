import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
	componentDidMount() {}

	render() {
		return `Login Page`;
	}
}

const mapStateToProps = state => {
	return { posts: state.posts };
};

export default connect(
	mapStateToProps,
	null
)(Login);
