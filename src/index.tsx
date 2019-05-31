import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';
import App from './App';
import 'beagl/styles.scss';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
  <Router history={history}><App /></Router>,
  document.getElementById('root')
);
