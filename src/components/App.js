import React from 'react';
import { Router, Route, Link, Redirect, Switch } from 'react-router-dom';

import history from '../lib/History';
// TODO: router implementation

import Login from './Login';

const App = () => {
	return (
		<Router history={history}>
			<div>
				<Switch>
					<Route exact path="/" component={Login} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
