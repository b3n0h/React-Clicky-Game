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
    if (this.state.alreadySelected.indexOf(id) === -1) {
      this.state.alreadySelected.push(id)
      this.setState({score: this.state.score + 1})
      this.state.score >= this.state.highScore ? this.setState({highScore: this.state.highScore + 1}) : this.setState({highScore: this.state.highScore})
      const pokemon = this.state.pokemon.sort(() => 0.5 - Math.random())
      this.setState({ pokemon })
    } else {
      this.setState({score: 0, alreadySelected: []})
      this.state.pokemon.sort(() => 0.5 - Math.random())
    }
  }

  render() {
    return (
      <>
        <Nav 
        score={this.state.score}
        highScore={this.state.highScore}
        />
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