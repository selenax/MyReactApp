import 'semantic-ui-css/semantic.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import AppWithRouter from './components/App.jsx';
import reducers from './reducers';
// import * as serviceWorker from './serviceWorker'

//reduxThunk dispatch all actions to reducers causing them to instantly recalcuate app statte
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppWithRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
