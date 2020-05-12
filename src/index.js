import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
// import Login from './Login'
import Main from './Main'
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp(
  {
    apiKey: "AIzaSyAp5kAMnmwY0zFq6GiQ5FfCK6pIKhhq-Vk",
    authDomain: "pbf-uas.firebaseapp.com",
    databaseURL: "https://pbf-uas.firebaseio.com",
    projectId: "pbf-uas",
    storageBucket: "pbf-uas.appspot.com",
    messagingSenderId: "978105850074",
    appId: "1:978105850074:web:2c849def7c0100e38a6de3"
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path='/' component={Main} />
      <Route path='/app' component={App} />
    </Router>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
