import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import LoginContainer from './components/Login';
import App from './App'
import { Provider } from 'react-redux';
import store  from './store/index';


render(
  <Provider store={store}>
   
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={ <LoginContainer />} />
        <Route path="*" element={ <LoginContainer /> } />
        <Route exact path="/home" element={ <App />} />
      </Routes>
    </BrowserRouter>

  </Provider>,
  document.getElementById('root')
);

