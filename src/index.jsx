import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route } from 'react-router-dom';
import browserHistory from 'history/createBrowserHistory'
import reducers from './reducers/index';
import App from './components/App';

const history = browserHistory();

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

render(
    <Provider store={store}>
      <Router history={ history }>
          <Route path="/" component={ App }/>
      </Router>
    </Provider>,
    document.getElementById('root'),
);

