import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const AppBarComponent = (props: any) => {
  const { classes } = props;
  return (
    <AppBar position='static' className={classes.appBackground}>
      <Toolbar>
        <Grid item xs={6}>
          <Typography variant='h6'>Devconnector</Typography>
        </Grid>
        <Grid
          container
          xs={6}
          alignItems='flex-start'
          justify='flex-end'
          direction='row'
        >
          <Button color='inherit'>Developers</Button>
          <Button color='inherit'>Register</Button>
          <Button color='inherit'>Login</Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const styles = () => {
  return {
    appBackground: {
      backgroundColor: '#1d3557',
    },
  };
};

export default withStyles(styles)(AppBarComponent);
