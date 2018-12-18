import React, { Component } from 'react'
import Nav from './components/nav'
import Content from './components/content'
import pokemon from './pokemon.json'
import Grid from '@material-ui/core/Grid';

class App extends Component {

  state = {
    pokemon,
    alreadySelected: [],
    highScore: 0,
    score: 0
  }

  onSelect = id => {
    console.log(id)
    this.state.alreadySelected.push(id)
    console.log(this.state.alreadySelected)
  }

  render() {
    return (
      <>
        <Nav />
        <Grid container spacing={16}>
          {this.state.pokemon.map(p =>
            <Content
              onSelect={this.onSelect}
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