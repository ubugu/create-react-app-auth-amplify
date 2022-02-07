import React, { Component } from 'react';

import left from '../left.png';
import right from '../right.png';
import giraffinuname from '../giraffinuname.png';
import giraffScroll from '../giraffScroll.gif';
import blue from '../Blue.PNG';

import Grid from '@mui/material/Grid';

class Main extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#282c34", color: "white", backgroundImage: 'url(' + blue + ')', backgroundSize: "cover" }}>
        <img src={giraffinuname} height={350} width={500} />
        <img src={giraffScroll} style={{maxWidth:"500px", minWidth:"10px", width:"100%", height:"auto"}}  />
        <div>
          Giraffinu is a 10k edition randomly generated NFT.
          Each edition is unique with differents trait, from the pinapple body to the so cool Giraffinu glasses.
        </div>

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
        <div >
          <Grid container spacing={2}>
            <Grid item xs={6} style={{ textAlign: "left" }}>
              <img src={left} style={{maxWidth:"500px", width:"100%", height:"auto"}} 
               />
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              <img src={right} style={{maxWidth:"500px", width:"100%", height:"auto"}} 
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Main;
