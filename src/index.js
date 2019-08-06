import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'


// Создаем reducer с пустым объектом в качестве начального состояния.
const initialState = {};
function reducer(state = initialState, action) {
	switch (action.type) {
		// В ответ на action SET_USER изменяем state.
		case "SET_USER":
			return {
				...state,
				user: action.user
			};
		default:
			return state;
	}
}

// Создаем store с reducer'ом в качестве аргумента.
const store = createStore(reducer);

// Dispatch'им action для того чтоб задать user.
store.dispatch({
	type: "SET_USER",
	user: {
		avatar: "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
		name: "Dave",
		followers: 1234,
		following: 123
	}
});

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
