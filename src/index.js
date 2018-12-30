import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch,Redirect,Link} from 'react-router-dom';
import './index.css';
import Admin from './admin';

import Index from './client/index';
import Page1 from './client/page1';
import Page2 from './client/page2';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Router>
		<Admin>
			<Switch>
				<Route exact path="/" component={Index} />
				<Route path="/page1" component={Page1}>
					<Route path="/page1/page2" component={Page2} />
				</Route>
			</Switch>
		</Admin>
	</Router>, 
	document.getElementById('root')
);
serviceWorker.unregister();
