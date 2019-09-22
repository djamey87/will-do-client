import React from 'react';
import { connect } from 'react-redux';
import avatarImg from '../../assets/images/placeholder.png'; // with import

// actions
import { logout } from '../../actions/auth';
import { toggleNewTaskForm } from '../../actions/ui';
// import { usePersistedState } from '../../actions/persistedState';
import { useTheme } from '../../lib/ThemeContext';

import './index.scss';

// TODO:
// 1. user / avatar drop down to show logout button
// 2. deleted task section
// 3. public tasks?

const Header = props => {
	const { user } = props;
	const [theme, toggleTheme] = useTheme();
	// const [theme, setTheme] = usePersistedState('theme', 'light');

	// useEffect(() => {}, [theme]);

	if (!user) {
		return (
			<div className="top-navigation ui secondary menu">
				<a className="logo logo-font" href="/">
					will-do
				</a>

				<div className="right menu">{/*<a className="item active" href="/tasks">
						Login
					</a>*/}</div>
			</div>
		);
	}

	return (
		<div className="top-navigation ui secondary menu">
			<a className="logo logo-font" href="/">
				will-do
			</a>

			<div className="item">
				<button
					type="button"
					className="ui fluid large primary submit button"
					onClick={() => {
						props.toggleNewTaskForm(true);
						console.warn('this should be updating!');
					}}>
					Add Task
				</button>
			</div>

			<div className="right menu">
				{/*<div className="item">
					<div className="ui icon input" data-children-count="1">
						<input type="text" placeholder="Search..." value="status:active" />
						<i className="search link icon"></i>
					</div>
				</div>*/}
				<div className="ui simple dropdown item">
					<span className="margin-right-15">{user.name}</span>
					<img className="ui avatar image" src={avatarImg} alt={`${user.name} profile`} />
					<i className="dropdown icon"></i>
					<div className="menu user-menu">
						<div className="item" onClick={toggleTheme}>
							{theme === 'dark' ? 'Light mode' : 'Dark mode'}
						</div>

						<a className="item" href="/deletedTasks">
							Deleted Tasks
						</a>
						<div className="item" onClick={props.logout}>
							Logout
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.users.localUser,
		showNewTask: state.ui.showNewTask,
	};
};

export default connect(
	mapStateToProps,
	{ logout, toggleNewTaskForm }
)(Header);
// export default Header;
