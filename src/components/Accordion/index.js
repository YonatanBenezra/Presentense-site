import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import A from 'components/A'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>HTML&CSS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>HTML</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <A href='https://doc-0s-14-docs.googleusercontent.com/docs/securesc/ufap1a5muoj2cniu7hkqoump2ahpm9lv/vg9c2aj152valpfjqe21cfhki726ornm/1613909775000/09318552211301867237/09318552211301867237/1SQ6yGsTzoxjfkDQGaGiGJ5ezFoBTFCGh?e=download&authuser=0&nonce=jsqo7lg1r1ao2&user=09318552211301867237&hash=n4t8keau9beuf48hnbrjgnj868jedd3v'
                    target="_blank" rel="noopener noreferrer">
                    HTML basics cheatsheet
                  </A>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>CSS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <A href='https://devhints.io/css'
                    target="_blank" rel="noopener noreferrer">
                    CSS basics cheatsheet
                  </A>
                  <br />
                  <A href='https://www.codecademy.com/learn/learn-css/modules/learn-css-display-positioning/cheatsheet'
                    target="_blank" rel="noopener noreferrer">
                    CSS positioning
                  </A>
                  <br />
                  <A href='https://www.codecademy.com/learn/learn-css/modules/learn-css-box-model/cheatsheet'
                    target="_blank" rel="noopener noreferrer">
                    CSS box model
                  </A>
                  <br />
                  <A href='https://grid.malven.co/'
                    target="_blank" rel="noopener noreferrer">
                    CSS Grid
                  </A>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Git/hub</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <AccordionDetails>
              <Typography>
                <A href='https://doc-0s-14-docs.googleusercontent.com/docs/securesc/ufap1a5muoj2cniu7hkqoump2ahpm9lv/vg9c2aj152valpfjqe21cfhki726ornm/1613909775000/09318552211301867237/09318552211301867237/1SQ6yGsTzoxjfkDQGaGiGJ5ezFoBTFCGh?e=download&authuser=0&nonce=jsqo7lg1r1ao2&user=09318552211301867237&hash=n4t8keau9beuf48hnbrjgnj868jedd3v'
                  target="_blank" rel="noopener noreferrer">
                  Github cheatsheet
                  </A>
              </Typography>
            </AccordionDetails>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Javascript</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Basics</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <A href='https://doc-0k-14-docs.googleusercontent.com/docs/securesc/ufap1a5muoj2cniu7hkqoump2ahpm9lv/8nsk4c0disqip9733kni0m8daqrf2a5e/1613912025000/09318552211301867237/09318552211301867237/1oqgVIbQ8U93hZl9q_nnwdG7CJe_anvY8?e=download&authuser=0&nonce=1qothtvb9jnf0&user=09318552211301867237&hash=2u4l6kt9irfjjdum5i535f2ad02sg3u8'
                    target="_blank" rel="noopener noreferrer">
                    Introduction
                  </A>
                  <br />
                  <A href='https://www.dofactory.com/javascript/loops'
                    target="_blank" rel="noopener noreferrer">
                    Loops
                  </A>
                  <br />
                  <A href='https://devhints.io/js-array'
                    target="_blank" rel="noopener noreferrer">
                    Arrays
                  </A>
                  <br />
                  <A href='https://www.bitdegree.org/learn/javascript-cheat-sheet'
                    target="_blank" rel="noopener noreferrer">
                    Functions
                  </A>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion disabled>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Intermediate</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {/* <A href='https://doc-0k-14-docs.googleusercontent.com/docs/securesc/ufap1a5muoj2cniu7hkqoump2ahpm9lv/8nsk4c0disqip9733kni0m8daqrf2a5e/1613912025000/09318552211301867237/09318552211301867237/1oqgVIbQ8U93hZl9q_nnwdG7CJe_anvY8?e=download&authuser=0&nonce=1qothtvb9jnf0&user=09318552211301867237&hash=2u4l6kt9irfjjdum5i535f2ad02sg3u8'
                    target="_blank" rel="noopener noreferrer">
                    Scope
                  </A>
                  <br />
                  <A href='https://www.dofactory.com/javascript/loops'
                    target="_blank" rel="noopener noreferrer">
                    This
                  </A>
                  <br />
                  <A href='https://devhints.io/js-array'
                    target="_blank" rel="noopener noreferrer">
                    Callbacks
                  </A>
                  <br />
                  <A href='https://www.bitdegree.org/learn/javascript-cheat-sheet'
                    target="_blank" rel="noopener noreferrer">
                    Closures
                  </A>
                  <br />
                  <A href='https://www.bitdegree.org/learn/javascript-cheat-sheet'
                    target="_blank" rel="noopener noreferrer">
                    Modules
                  </A>
                  <br />
                  <A href='https://www.bitdegree.org/learn/javascript-cheat-sheet'
                    target="_blank" rel="noopener noreferrer">
                    Promises
                  </A>
                  <br />
                  <A href='https://www.bitdegree.org/learn/javascript-cheat-sheet'
                    target="_blank" rel="noopener noreferrer">
                    Async
                  </A> */}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Server-Side</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                  <A href='https://devhints.io/npm'
                    target="_blank" rel="noopener noreferrer">
                    npm
                  </A>
                  <br />
                  <A href='https://dev.to/islamabad50/express-js-boilerplate-cheatsheet-127p'
                    target="_blank" rel="noopener noreferrer">
                    Express boilerplate
                  </A>
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>React</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Basics</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <A href='https://www.html.cn/dev/react.html'
                    target="_blank" rel="noopener noreferrer">
                    React classes
                  </A>
                  <br />
                  <A href='https://react-hooks-cheatsheet.com/useeffect'
                    target="_blank" rel="noopener noreferrer">
                    Hooks
                  </A>
                  <br />
                  <A href='https://devhints.io/js-array'
                    target="_blank" rel="noopener noreferrer">
                    Arrays
                  </A>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion disabled>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Intermediate</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {/* <A href='https://doc-0k-14-docs.googleusercontent.com/docs/securesc/ufap1a5muoj2cniu7hkqoump2ahpm9lv/8nsk4c0disqip9733kni0m8daqrf2a5e/1613912025000/09318552211301867237/09318552211301867237/1oqgVIbQ8U93hZl9q_nnwdG7CJe_anvY8?e=download&authuser=0&nonce=1qothtvb9jnf0&user=09318552211301867237&hash=2u4l6kt9irfjjdum5i535f2ad02sg3u8'
                    target="_blank" rel="noopener noreferrer">
                    Events, Set State
                  </A>
                  <br />
                  <A href='https://www.dofactory.com/javascript/loops'
                    target="_blank" rel="noopener noreferrer">
                    This
                  </A>
                  <br />
                  <A href='https://devhints.io/js-array'
                    target="_blank" rel="noopener noreferrer">
                    Callbacks
                  </A>
                  <br />
                  <A href='https://www.bitdegree.org/learn/javascript-cheat-sheet'
                    target="_blank" rel="noopener noreferrer">
                    Closures
                  </A>
                  <br />
                  <A href='https://www.bitdegree.org/learn/javascript-cheat-sheet'
                    target="_blank" rel="noopener noreferrer">
                    Modules
                  </A>
                  <br />
                  <A href='https://www.bitdegree.org/learn/javascript-cheat-sheet'
                    target="_blank" rel="noopener noreferrer">
                    Promises
                  </A>
                  <br />
                  <A href='https://www.bitdegree.org/learn/javascript-cheat-sheet'
                    target="_blank" rel="noopener noreferrer">
                    Async
                  </A> */}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Mongoose</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                  <A href='https://devdocs.io/mongoose/'
                    target="_blank" rel="noopener noreferrer">
                    Cheat sheet
                  </A>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Mobx</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                  <A href='https://mobx-react.js.org/recipes-migration'
                    target="_blank" rel="noopener noreferrer">
                    Cheat sheet
                  </A>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Winner of the Final project!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You will have to wait to find out! (I am betting on you)
          </Typography>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}