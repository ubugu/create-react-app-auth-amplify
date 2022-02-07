import React, { Component } from 'react';

import left from '../left.png';
import right from '../right.png';
import giraffinuname from '../giraffinuname.png';
import giraffScroll from '../giraffScroll.gif';
import blue from '../Blue.PNG';
import special from '../17.png';

import Grid from '@mui/material/Grid';

class Story extends Component {
  render() {
    return (
      <div id="story">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div style={{}}>
              <img src={special} style={{maxWidth:"350px", width:"100%", height:"auto"}} />
            </div>
          </Grid>
          <Grid item xs={8}>
            <div style={{}}>
              STORY
                In the wild forest of africa, a misterious animal is hiding between the branches and the leaves...
                there was once a small yellow giraffe that wanted to conquer the world with its beauty and charm, but with only
                a plane simple color and no fancy accessory it was an hard task to achieve. So one day, this little giraffe
                encounter the magical Crypto wizard that wanted to help this cute animal;
                "If thee want to truly become a fabolous animal that no one can avoid love, thee shall use the power
                of the randomatic algorithm to achieve greateness and surpass every animal in the world!".
                And so... the GIRAFFINU was born! Hundreds, thousands of mystical animal with the most beautifull traits ever seen;
                fancy hats, shining dresses, beautifull teeth.. and don't forget the pinapple giraffe, the ultimate tropical long neck!
                This is only the beginning for the new king of all the animals, the world will be at his feets and i don't know if
                the other planet can be safe.... it could Even reach Mars!
                #SPREADTHEGIRAFFE
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Story;
