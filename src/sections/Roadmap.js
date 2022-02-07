import React, { Component } from 'react';
import MarsBack from '../MarsBack.png';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';

import planet1 from "../planet1.png";
import planet2 from "../planet2.png";
import planet3 from "../planet3.png";
import planet4 from "../planet4.png";
import planet5 from "../planet5.png";
import planet6 from "../planet6.png";
import rocket from "../rocket.png";
import trail from "../trail.png";

const BackgroundHead = {
  backgroundImage: 'url(' + MarsBack + ')',
  minHeight: '600px',
  backgroundColor: "#282c34",
  padding: "35px",
  backgroundSize: "cover"
}

const timlineItems = [
  {
    "planet": planet1,
    "title": "CREATION",
    "description": "we will drop cose",
    "done":true
  },
  {
    "planet": planet2,
    "title": "FREE GIVEAWAY",
    "description": "we will drop cose",
    "done":true
  },
  {
    "planet": planet3,
    "title": "DROP ON Crypto.com",
    "description": "we will drop cose",
    "current":true,
    "done":false
  },
  {
    "planet": planet4,
    "title": "MERCHANDISE",
    "description": "we will drop cose",
    "done":false
  },
  {
    "planet": planet5,
    "title": "DAO Group community",
    "description": "we will drop cose",
    "done":false
  },
  {
    "planet": planet6,
    "title": "GIRAFFINU GAME",
    "description": "we will drop cose",
    "done":false
  }
]

class Roadmap extends Component {
  render() {
    return (
      <div id="roadmap" style={BackgroundHead}>
        <div id="roadmapModal">
          ROADMAPPE
          <Timeline position="alternate">
            {timlineItems.map(element =>
              <TimelineItem>
                <TimelineSeparator>
                    <img className="pfp" src={element.planet} height={50} width={50} />
                    {element.current ?
                        <img className="rocket" src={rocket} height={50} width={50} minHeight={100} /> 
                        : element.done? 
                        <img className="rocket" src={trail} height={100} width={50} minHeight={100} /> 
                        : <TimelineConnector  style={{height:100}}/>}                                       
                </TimelineSeparator>
                <TimelineContent>{element.title} - {element.description}</TimelineContent>
              </TimelineItem>
            )}
          </Timeline>
        </div>
      </div>
    );
  }
}
export default Roadmap;
