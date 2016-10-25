import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {Router,browserHistory} from 'react-router';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes';

const store =configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
    {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
