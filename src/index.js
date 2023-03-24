import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './global.css';

import { Provider } from 'react-redux';
import { reducers } from './redux/reducers';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { GoogleOAuthProvider } from '@react-oauth/google';

const CLIENT_ID = `638836561956-9q7t9ndh779bmdod54l3pkjkqfve7abs.apps.googleusercontent.com`;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
