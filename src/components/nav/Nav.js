import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import pokemon from '../../images/pokemon.png'
import './Nav.css'

const styles = {
  logo: {
    height: 150,
  },
  nav: {
    backgroundColor: 'red',
  }
}

function Nav(props) {

  const { classes } = props;

  return (
    <Grid container alignItems='center' justify='center' className={classes.nav} id='nav'>
      <Grid item>
        Pokemon Clicky Game
      </Grid>
      <Grid item>
        <img src={pokemon} alt="pokemon logo" className={classes.logo} />
      </Grid>
      <Grid item>
        Current Score: {props.score} | High Score: {props.highScore}
      </Grid>
    </Grid>  
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);