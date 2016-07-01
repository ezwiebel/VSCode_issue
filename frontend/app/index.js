import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';

import App from './containers/App';
import Element from './containers/Element';
import ElementPlaceholder from './components/ElementPlaceholder';
import { requestElements } from './actions/elements';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

const routes = (
  <Route path="/" component={App}>
    <IndexRedirect to={"/level1"} />
    <Route path="/:level" onEnter={(nextState) => store.dispatch(requestElements(nextState.params.level))}>
      <IndexRoute component={ElementPlaceholder} />
      <Route path="elements/:id" component={Element} />
    </Route>
  </Route>
);

history.push('/level1');

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
