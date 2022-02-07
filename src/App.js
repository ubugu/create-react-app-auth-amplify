import React, { Component } from 'react';
import logo from './logocolor.png';
import twitter from './twitter.png';
import instagram from './‌instagram.png';
import tiktok from './tiktok.png';
import discord from './discord.png';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import Grid from '@mui/material/Grid';

import UnderConstruction from './sections/UnderConstruction';


Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: "#282c34"}}>
          <UnderConstruction></UnderConstruction>       
      </div >
    );
  }
}

export default App;
