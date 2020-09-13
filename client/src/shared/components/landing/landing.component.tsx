import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

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
        <Link to='/register' className={classes.buttonMargin}>
          Signup
        </Link>
        <Link to='/login'>Login</Link>
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
