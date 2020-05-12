import React, { Component } from "react";
import App from '../App'
import { Route, HashRouter } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <HashRouter>
                <Route path='/app' component={App} />
                <div classname="content">
                    <center>
                        <h1>WELCOME!</h1>
                        <p>This web is designed for you who loved write anything. It's called e-notebook.</p>
                        <p>What are you waiting for?</p>
                        <p>Write anything you want!</p>
                        <p>Design By: Yoga Ibnudinata</p>
                    </center>
                </div>
                    
            </HashRouter>
        );
    }
}

export default Home;