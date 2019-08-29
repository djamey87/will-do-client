import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, localUser, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			localUser ? (
				<div>
					<Component {...props} />
				</div>
			) : (
				<Redirect
					to={{
						pathname: '/',
						state: { from: props.location },
					}}
				/>
			)
		}
	/>
);

export default AuthRoute;
