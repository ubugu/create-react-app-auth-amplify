import React, { Component } from 'react';
import logo from './giraffScroll.gif';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
			GIRAFFINU
          </h1>
          <p>
            The best NFT 10k edition is coming to your house!
			          <a
            className="App-link"
            href="https://derpcentral.weebly.com/troll-page.html"
            target="_blank"
            rel="noopener noreferrer"
          >Buy now </a>- Only 10000000$ each one
          </p>
        </header>
      </div>
    );
  }
}

export default App;
