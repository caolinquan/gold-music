import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
		rootReducer,
		applyMiddleware(sagaMiddleware),
	);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store= {store} >
		<BrowserRouter>
			<App />	
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
