import React, { Component } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import giraffinuname from '../giraffinuname.png';

const accordionList = [
  {
    "question": "What is an NFT",
    "text": "NFT is rich bich ez pizi"
  },
  {
    "question": "What is GIRAFFINU",
    "text": "NFT is rich bich ez pizi"
  },
  {
    "question": "What is Crypto.com",
    "text": "NFT is rich bich ez pizi"
  },
  {
    "question": "What is jesus",
    "text": "NFT is rich bich ez pizi"
  }
]

class Faq extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: ""
    }
  }

  handleChange = (expanded) => {
    this.setState({ "expanded": expanded });
  }

  render() {
    return (
      <div id="faq" style={{ backgroundColor: "#282c34", color: "white" }}>
        {accordionList.map((elem,id) =>
          <Accordion style={{ backgroundColor: "#282c34", color:"white"}}
            expanded={this.state.expanded === 'panel'+id} 
            onChange={() => this.handleChange('panel'+id)}>
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {elem.question} 
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {elem.text}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )}
      </div>
    );
  }
}

export default Faq;
