import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';

const PageList = () => {

	const pages = [
		{
			href: 'signup',
			component: SignIn
		},
		{
			href: 'signin',
			component: SignUp
		}
	];

	return (
		<Router>
			<div>
				<Route exact={true} path="/" render={() => (
					<ul className="page-list">
						{pages.map(page => <li key={page.href}><Link to={page.href}>{page.href}</Link></li>)}
					</ul>
				)}/>
				{pages.map(page => <Route path={'/'+page.href} component={page.component}/>)}
			</div>
		</Router>
	);

};

export default PageList;