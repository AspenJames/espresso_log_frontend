import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const history = createBrowserHistory();
const rMiddleware = routerMiddleware(history)

const middlewares = applyMiddleware(rMiddleware, thunk);

const store = createStore(rootReducer(history), composeWithDevTools(middlewares)); 

ReactDOM.render((
  <Provider store={store}>
    <App history={history} />
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
