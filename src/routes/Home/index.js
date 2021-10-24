import React from 'react';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import Content from 'templates/Content';
import Transition from 'components/Transition';

export default function Home() {
  return (
    <Transition in component={Grow}>
      <Content fixed>
          <h3>Welcome to your coding course platform!</h3>
        <Typography variant="h6">
          The Platform is an Urban Entrepreneurship and Innovation center run by the Tel Aviv Municipality in Neve Shaanan.
          <br />
          The Platform offers works space, lectures, courses and consultations to entreprenuers and social innovators and strives to create a community of local entrepreneurs and innovators.
          <br />
          Such as this Full stack course made by:
          Presentense, ARDC and Haratsif
          <br />
          <br />
          You can see the syllabus down here or see other sections by opening the
          navigation!
          <br />
          <br />
          Have a great time coding!
        </Typography>
      </Content>
    </Transition>
  );
}