import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AppBarComponent = (props: any) => {
  const classes = styles();
  return (
    <AppBar position='static' className={classes.appBackground}>
      <Toolbar>
        <Grid container>
          <Link to='/' className={classes.linkColor}>
            <Typography variant='h6'>Devconnector</Typography>
          </Link>
        </Grid>
        <Grid
          container
          alignItems='flex-start'
          justify='flex-end'
          direction='row'
        >
          <Link to='/' className={classes.linkColor}>
            <Typography>Developers</Typography>
          </Link>
          <Link to='/register' className={classes.linkColor}>
            <Typography>Register</Typography>
          </Link>
          <Link to='/login' className={classes.linkColor}>
            <Typography>Login</Typography>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const styles = makeStyles((theme) => ({
  appBackground: {
    backgroundColor: theme.palette.primary.main,
  },
  linkColor: {
    color: 'white',
    margin: '0 10px',
    textDecoration: 'none',
  },
}));

export default AppBarComponent;
