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

import Roadmap from './sections/Roadmap';
import Pfp from './sections/Pfp';
import Main from './sections/Main';
import Story from './sections/Story';
import Faq from './sections/Faq';

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header" style={{backgroundColor: "#282c34"}}>
          <Grid container spacing={2} >
            <Grid item xs={2}>
              <img src={logo} height={90} width={90} />
            </Grid>
            <Grid item xs={8}>
              <Grid container spacing={2} style={{ marginTop: "20px" }}>
              <Grid item xs={12} md={3} className="header-btn">
                  <a className="header-btn"
                    href="#story"
                  >
                    Story
                  </a>
                </Grid>
                <Grid item xs={12} md={3} className="header-btn">
                  <a className="header-btn"
                    href="#team"
                  >
                    Team
                  </a>
                </Grid>
                <Grid item xs={12} md={3} className="header-btn">
                  <a className="header-btn"
                    href="#roadmap"
                  >
                    Roadmap
                  </a>
                </Grid>
                <Grid item xs={12} md={3} className="header-btn">
                  <a className="header-btn"
                    href="#faq"
                  >
                    Faq
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Grid container spacing={2} style={{ paddingTop: "50px" }}>
                <Grid item xs={12} md={3}>
                  <a
                    className="social-icon" è
                    href="https://twitter.com/giraffinu?t=b3ypbDWcz69PY8PYyipU2Q&s=09"
                    target="_blank"
                  ><img src={twitter} className="social-icon" /></a>
                </Grid>
                <Grid item xs={12} md={3}>
                  <a
                    className="social-icon"
                    href="https://instagram.com/giraffinu?utm_medium=copy_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  ><img src={instagram} className="social-icon" /></a>
                </Grid>
                <Grid item xs={12} md={3}>
                  <a
                    className="social-icon"
                    href="https://vm.tiktok.com/ZMLLbq6Hj/"
                    target="_blank"
                    rel="noopener noreferrer"
                  ><img src={tiktok} className="social-icon" /></a>
                </Grid>
                <Grid item xs={12} md={3}>
                  <a
                    className="social-icon"
                    href="https://twitter.com/giraffinu?t=b3ypbDWcz69PY8PYyipU2Q&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                  ><img src={discord} className="social-icon" /></a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Main></Main>
        <Story></Story>
        <Pfp></Pfp>
        <Roadmap></Roadmap>
        <Faq></Faq>
      </div >
    );
  }
}

export default App;
