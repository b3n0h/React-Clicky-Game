import React, { Component } from 'react'
import Nav from './components/nav'
import Content from './components/content'
import Footer from './components/footer'
import pokemon from './pokemon.json'
import Grid from '@material-ui/core/Grid';

class App extends Component {

  state = {
    pokemon
  }

  render() {
    return (
      <>
        <Nav />
        <Grid container justify="space-around"
          alignContent="center">
        {this.state.pokemon.map(p => 
        <Content
        key={p.id}
        id={p.id}
        name={p.image}
        image={p.image}
        />
        )}
        </Grid>
      </>
    )
  }
}

export default App