import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const Landing = (props: any) => {
  //   const classes = styles();
  return (
    <Container>
      <Typography variant='h2' gutterBottom align='center'>
        Devconnector
      </Typography>
      <Button color='primary' variant='contained'>
        Signup
      </Button>
      <Button color='secondary' variant='contained'>
        Login
      </Button>
    </Container>
  );
};

// const styles = makeStyles(() => ({}));

export default Landing;
