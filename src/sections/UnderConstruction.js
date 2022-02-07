import React, { Component } from 'react';
import logo from '../logocolor.png';
import twitter from '../twitter.png';
import instagram from '../‌instagram.png';
import tiktok from '../tiktok.png';
import discord from '../discord.png';
import banda from '../banda.png';

import Grid from '@mui/material/Grid';
import construct from '../underconstruct.jpg';

class UnderConstruction extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#ffd838", minHeight: "100vh", color: "black" }}>
        <Grid container spacing={2} >
          <Grid item xs={12}>
            <div  className="scroll"  style={{ backgroundImage: 'url(' + banda + ')', height: "36px" }}></div>
          </Grid>
          <Grid item xs={12}>
            <img src={logo} height={90} width={90} />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} style={{ paddingTop: "50px" }}>

              <Grid item xs={12} md={6}>
                <img src={construct} style={{ maxWidth: "300px", width: "100%", height: "auto" }} />
              </Grid>
              <Grid item xs={12} md={6} style={{ fontWeight: "bold", fontSize: "xxx-large", margin: "auto" }}>
                SITE UNDER CONSTRUCTION
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            Want to know MORE? follow us on social media
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} style={{ paddingTop: "50px" }}>
              <Grid item xs={4} md={4}>
              </Grid>

              <Grid item xs={1} md={1}>
                <a
                  className="social-icon" è
                  href="https://twitter.com/giraffinu?t=b3ypbDWcz69PY8PYyipU2Q&s=09"
                  target="_blank"
                ><img src={twitter} className="social-icon" /></a>
              </Grid>
              <Grid item xs={1} md={1}>
                <a
                  className="social-icon"
                  href="https://instagram.com/giraffinu?utm_medium=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                ><img src={instagram} className="social-icon" /></a>
              </Grid>
              <Grid item xs={1} md={1}>
                <a
                  className="social-icon"
                  href="https://vm.tiktok.com/ZMLLbq6Hj/"
                  target="_blank"
                  rel="noopener noreferrer"
                ><img src={tiktok} className="social-icon" /></a>
              </Grid>
              <Grid item xs={1} md={1}>
                <a
                  className="social-icon"
                  href="https://twitter.com/giraffinu?t=b3ypbDWcz69PY8PYyipU2Q&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                ><img src={discord} className="social-icon" /></a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div className="scroll" style={{ backgroundImage: 'url(' + banda + ')', height: "36px", marginTop:"8px" }}></div>
          </Grid>

        </Grid>
      </div>
    );
  }
}

export default UnderConstruction;
