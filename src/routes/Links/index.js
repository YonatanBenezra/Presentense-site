import React from 'react';
import { Link } from 'react-router-dom';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Keyboard, { Cursor } from 'react-mk';
import Content from 'templates/Content';
import Transition from 'components/Transition';
import A from 'components/A';
import DetailedAccordion from 'components/Accordion/index';

export default function Links() {
  return (
    <Transition in component={Grow}>
      <Content fixed>
        <Typography variant="h5">
          CheatSheets:
          <DetailedAccordion />

        </Typography>
      </Content>
    </Transition>
  );
}