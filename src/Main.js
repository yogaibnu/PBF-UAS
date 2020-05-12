import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import App from './App'
import './main.css'
import Home from '../src/content/home'
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><a href="/">Diary Note</a></li>
            <li><a href="/app">Get Started</a></li>
          </ul>
          <div className="content">
          <Route path='/' component={Home} />
          <Route path='/app' component={App} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;