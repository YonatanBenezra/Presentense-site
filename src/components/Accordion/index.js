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
          <Typography component={'span'} className={classes.heading}>HTML&CSS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography component={'span'} className={classes.heading}>HTML</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={'span'}>
                  <A href='https://www.codecademy.com/learn/learn-html/modules/learn-html-elements/cheatsheet'
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
                <Typography component={'span'} className={classes.heading}>CSS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={'span'}>
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
          <Typography component={'span'} className={classes.heading}>Git/hub</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <AccordionDetails>
              <Typography component={'span'}>
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
          <Typography component={'span'} className={classes.heading}>Javascript</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography component={'span'} className={classes.heading}>Basics</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={'span'}>
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
                <Typography component={'span'} className={classes.heading}>Intermediate</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={'span'}>
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
          <Typography component={'span'} className={classes.heading}>Server-Side</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
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
          <Typography component={'span'} className={classes.heading}>React</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography component={'span'} className={classes.heading}>Basics</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={'span'}>
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
                <Typography component={'span'} className={classes.heading}>Intermediate</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={'span'}>
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
          <Typography component={'span'} className={classes.heading}>Mongoose</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
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
          <Typography component={'span'} className={classes.heading}>Mobx</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
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
          <Typography component={'span'} className={classes.heading}>Winner of the Final project!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            You will have to wait to find out! (I am betting on you)
          </Typography>
        </AccordionDetails>
      </Accordion>


      {/* Exercises */}
      <h1>Exercises</h1> 
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component={'span'} className={classes.heading}>HTML</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography component={'span'} className={classes.heading}>Basic</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={'span'}>
                  <A href='https://www.w3schools.com/html/exercise.asp?filename=exercise_html_attributes1'
                    target="_blank" rel="noopener noreferrer">
                    W3 HTML exercises
                  </A>
                  <br />
                  <A href='https://www.testdome.com/tests/html-css-online-test/13'
                    target="_blank" rel="noopener noreferrer">
                    Test dome exercises
                  </A>
                  <br />
                  <A href='http://codewithme.us/miami/exercises.shtml'
                    target="_blank" rel="noopener noreferrer">
                    Code with me exercises(Presentations don't work)
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
                <Typography component={'span'} className={classes.heading}>Intermediate</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={'span'}>
                <A href='http://howtocodeinhtml.com/chapter4.html'
                    target="_blank" rel="noopener noreferrer">
                    How-to-code-in-html blogpost exercise
                  </A>
                  <br />
                  <A href='https://www.sitepoint.com/10-typical-html-interview-exercises/'
                    target="_blank" rel="noopener noreferrer">
                    Sitepoint-10 typical html interview exercises
                  </A>
                  <br />
                  <A href='http://www.naturalprogramming.com/for_students/web/html_css_javascript_exercises.pdf'
                    target="_blank" rel="noopener noreferrer">
                    Naturalprogramming (PDF)
                  </A>
                  <br />
                  <A href='https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5'
                    target="_blank" rel="noopener noreferrer">
                    Free code camp
                  </A>
                  <br />
                  <A href='https://codepen.io/jorgecardoso/post/0-basics-html-css-javascript'
                    target="_blank" rel="noopener noreferrer">
                    Codepen html,css,JS exercises
                  </A>
                  <br />
                  <A href='https://en.wikiversity.org/wiki/Web_Design/CSS_challenges'
                    target="_blank" rel="noopener noreferrer">
                    Wikiversity
                  </A>
                  <br />
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography component={'span'} className={classes.heading}>Advanced</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={'span'}>
                  <A href='https://draftin.com/documents/499936?token=fgK6zU_Ojo65goYklgWfn2_V9v2lKSJD64_8ta2tSzjqnBp16_kEUfsFP8OBWGZCsZUtzCMbo3M5HGWeIMO7lO0'
                    target="_blank" rel="noopener noreferrer">
                    Draftin advanced css exercises
                  </A>
                  <br />
                  <A href='https://www.sitepoint.com/challenge-1-recreate-gif-css/'
                    target="_blank" rel="noopener noreferrer">
                    Create a gif in html and CSS
                  </A>
                  <br />
                  <A href='https://codeinthedarkspokane.com/'
                    target="_blank" rel="noopener noreferrer">
                    Code in the dark competition
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
          <Typography component={'span'} className={classes.heading}>CSS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <AccordionDetails>
              <Typography component={'span'}>
                <A href='http://flexboxfroggy.com/'
                  target="_blank" rel="noopener noreferrer">
                  Flex box froggy
                  </A>
                  <br />
                  <A href='https://100dayscss.com/'
                  target="_blank" rel="noopener noreferrer">
                  100daysCss
                  </A>
                  <br />
                  <A href='https://web.fe.up.pt/~arestivo/page/exercises/css/'
                  target="_blank" rel="noopener noreferrer">
                  Web Fe Up - css exercise
                  </A>
                  <br />
                  <A href='https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5'
                  target="_blank" rel="noopener noreferrer">
                  Fee code camp 
                  </A>
                  <A href='https://codepen.io/jorgecardoso/post/0-basics-html-css-javascript'
                  target="_blank" rel="noopener noreferrer">
                  Codepen html, css, JS exercises
                  </A>
                  <br />
                  <A href='http://www.flexboxdefense.com/'
                  target="_blank" rel="noopener noreferrer">
                  Flex box defense 
                  </A>
                  <br />
                  <A href='https://www.sitepoint.com/challenge-1-recreate-gif-css/'
                  target="_blank" rel="noopener noreferrer">
                  Create a gif challenge
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
          <Typography component={'span'} className={classes.heading}>Javascript</Typography>
        </AccordionSummary>
        <AccordionDetails>
                <Typography component={'span'}>
                  <A href='https://www.w3schools.com/js/js_exercises.asp'
                    target="_blank" rel="noopener noreferrer">
                    W3schools js exercises
                  </A>
                  <br />
                  <A href='https://edabit.com/challenges/javascriptp'
                    target="_blank" rel="noopener noreferrer">
                    Edabit exercises by levels
                  </A>
                  <br />
                  <A href='https://codepen.io/jorgecardoso/post/0-basics-html-css-javascript'
                    target="_blank" rel="noopener noreferrer">
                    Codepen html,css,JS exercises
                  </A>
                  <br />
                  <A href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'
                    target="_blank" rel="noopener noreferrer">
                    Freecodecamp JS exercises
                  </A>
                  <br />
                  <A href='https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php'
                    target="_blank" rel="noopener noreferrer">
                    150 js exercises
                  </A>
                  <br />
                  <A href='https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php'
                    target="_blank" rel="noopener noreferrer">
                    Functions
                  </A>
                  <br />
                  <A href='https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php'
                    target="_blank" rel="noopener noreferrer">
                    Conditional statements
                  </A>
                  <br />
                  <A href='https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php'
                    target="_blank" rel="noopener noreferrer">
                    Arrays
                  </A>
                  <br />
                  <A href='https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php'
                    target="_blank" rel="noopener noreferrer">
                    Searching and sorting
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
          <Typography component={'span'} className={classes.heading}>Server-Side</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
                  <A href='https://github.com/leanjs/express-exercises'
                    target="_blank" rel="noopener noreferrer">
                    Express - in README
                  </A>
                  <br />
                  <A href='https://dev.to/islamabad50/express-js-boilerplate-cheatsheet-127p'
                    target="_blank" rel="noopener noreferrer">
                    Express-mongodb-video explanation
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
          <Typography component={'span'} className={classes.heading}>React</Typography>
        </AccordionSummary>
        <AccordionDetails>
                <Typography component={'span'}>
                  <A href='https://www.breatheco.de/interactive-exercise/react-exercises'
                    target="_blank" rel="noopener noreferrer">
                    React classes with testing
                  </A>
                  <br />
                  <A href='https://www.breatheco.de/interactive-exercise/react-exercises'
                    target="_blank" rel="noopener noreferrer">
                    React projects
                  </A>
                  <br />
                  <A href='https://scotch.io/courses/10-react-challenges-beginner'
                    target="_blank" rel="noopener noreferrer">
                    Scotch.io exercises
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
          <Typography component={'span'} className={classes.heading}>Mobx</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
                  <A href='https://mobx.js.org/configuration.html'
                    target="_blank" rel="noopener noreferrer">
                    Configuration project
                  </A>
                  <br />
                  <A href='https://mobx.js.org/actions.html'
                    target="_blank" rel="noopener noreferrer">
                    actions example project
                  </A>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}