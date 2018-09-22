import React, { Component } from 'react';
import LambdaDemo from './LambdaDemo';
import logo from './logomark.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to Netlify with Lambda Functions
          </h1>
        </header>
        <LambdaDemo />
        <div>
          Based on tutorial about deploying a fullstack Apollo app with your API
          using Netlify Functions on AWS Lambda.
          <br />
          <a
            href="https://blog.apollographql.com/deploy-a-fullstack-apollo-app-with-netlify-45a7dfd51b0b"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find it here
          </a>
        </div>
      </div>
    );
  }
}

export default App;
