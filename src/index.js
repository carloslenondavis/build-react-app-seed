// #region load dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// #endregion
// #region load components
import App from './components/containers/App';
import store from './common/store';
// #endregion
// #region load styles
import './index.scss';
// #endregion

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
