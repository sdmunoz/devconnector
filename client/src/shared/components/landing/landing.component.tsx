import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Landing = (props: any) => {
  const classes = styles();
  return (
    <Container>
      <Grid item className={classes.gridCenter}>
        <Typography variant='h2' gutterBottom align='center'>
          Devconnector
        </Typography>
      </Grid>
      <Grid item className={classes.gridCenter}>
        <Button
          color='primary'
          variant='contained'
          className={classes.buttonMargin}
        >
          Signup
        </Button>
        <Button color='secondary' variant='contained'>
          Login
        </Button>
      </Grid>
    </Container>
  );
};

const styles = makeStyles(() => ({
  gridCenter: {
    textAlign: 'center',
  },
  buttonMargin: {
    marginRight: 10,
  },
}));

export default Landing;
