import React, { Component } from 'react';
import ubugu from '../Ubugu.png';
import tass from '../Tass.png';
import alexa from '../Alexa.png';
import pulpina from '../Pulpina.png';
import blu from '../pfpblu.png';

import Grid from '@mui/material/Grid';


const profiles = [
  {
    "img": tass,
    "name": "TASS",
    "description": "sono una marionetta"
  },
  {
    "img": ubugu,
    "name": "UBUGU",
    "description": "combooooooooooooooo"
  },
  {
    "img": alexa,
    "name": "ALEXA",
    "description": "ssijmeon"
  },
  {
    "img": pulpina,
    "name": "PULPINA",
    "description": "papa mi hai rotto tutta la casa"
  }
]


class Pfp extends Component {
  render() {
    return (
      <div id="team" style={{ padding: "15px" }}>
        TEAM
        <Grid container spacing={2} style={{ padding: "15px" }}>
          {profiles.map((elem) =>
            <Grid item xs={12} sm={12} md={6} lg={6} style={{ padding: "15px" }}>
              <div className="pfpdetail">
                <Grid container spacing={2} style={{ padding: "0px" }} >
                  <Grid item xs={5} style={{ padding: "0px" }}>
                    <img className="pfp" src={elem.img} style={{ maxWidth: "300px", width: "100%", height: "auto" }} />
                  </Grid>
                  <Grid item xs={7}>
                    <p style={{ fontSize: "2em" }}>{elem.name}</p>
                    <p>{elem.description}</p>
                  </Grid>
                </Grid>

              </div>
            </Grid>
          )}
        </Grid>

      </div>

    );
  }
}

export default Pfp;
