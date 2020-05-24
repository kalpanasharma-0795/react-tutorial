import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    characters: []
  }

  removeCharacter = (index) => {
    const characters = this.state.characters

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character]
    })
  }

  render() {
    const characters = this.state.characters

    return (
      <div className="container">
        <h1 className='mt-5'><strong>React Tutorial</strong></h1>
        <br />
        <p>Add a team member with a name and a job</p>

        <Table characterData={characters} removeCharacter={this.removeCharacter} />

        <h2 className='mt-5 mb-3'><strong>Add New</strong></h2>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App
