import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

import Search from './containers/Search';
import TodoList from './containers/TodoList';

const store = createStore(reducer);

ReactDOM.render((
	<Provider store={store}>
		<div>
			<Search/>
			<TodoList/>
		</div>
	</Provider>
), document.getElementById('todos-list'));