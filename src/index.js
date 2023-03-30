import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, createBrowserRouter } from "react-router-dom";

import App from './App';
import * as serviceWorker from './serviceWorker';
import { Login } from './components/login';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"Login",
    element:<Login/>,
  },
]
);

ReactDOM.render(
  < BrowserRouter>
    <App />
    <login />
  </ BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
