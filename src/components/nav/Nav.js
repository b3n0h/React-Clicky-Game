import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import pokemon from '../../images/pokemon.png'
import './Nav.css'

const styles = {
  logo: {
    height: 150,
    paddingBottom: 15,
  },
  nav: {
    backgroundColor: 'red',
    padding: 30,
  },
  title: {
    fontSize: 20,
    paddingBottom: 20,
  }
}

function Nav(props) {

  const { classes } = props;

  return (
    <Grid container align='center' justify='center' className={classes.nav} id='nav'>
      <Grid item xs={12} className={classes.title}>
        Pokemon Clicky Game
      </Grid>
      <Grid item xs={12}>
        <img src={pokemon} alt="pokemon logo" className={classes.logo} />
      </Grid>
      <Grid item xs={12}>
        Current Score: {props.score} | High Score: {props.highScore}
      </Grid>
    </Grid>  
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);