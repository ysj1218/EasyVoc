import React, {Component} from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { View as CommonWrapper } from '../components/CommonWrapper/';
import { View as Index} from '../pages/index/';
import { View as Detail} from '../pages/detail/';
import { View as List} from '../pages/list/';
import { View as HeaderDetail} from '../pages/headernavdetail/';
import { Provider } from 'react-redux';
import store from './store';
import style from './app.mcss';

export default class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<div className={style['wrapper']}>
					<Router history={browserHistory}>
						<Route path="/" component={CommonWrapper}>
							<IndexRoute component={Index}></IndexRoute>
							<Route path='detail/:id' component={Detail}></Route>
							<Route path='list/:id' component={List}></Route>
							<Route path='headerdetail/:id' component={HeaderDetail}></Route>
						</Route>
					</Router>
				</div>
			</Provider>
		)
	}

}