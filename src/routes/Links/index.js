import React from 'react';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import Content from 'templates/Content';
import Transition from 'components/Transition';
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