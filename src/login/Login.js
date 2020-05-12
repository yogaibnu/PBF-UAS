import React, { Component } from "react"
import "./login.css"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import App from '../App'

const firebase = require('firebase');

class Login extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="app-container">
        {this.state.isSignedIn ? (
        <span>
          <App />
        </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
        <p align="center">Login to continue</p>
        <p align="center">
          <a href="/">Back</a>
        </p>
      </div>
    )
  }
}

export default Login