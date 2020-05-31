import React, { useState } from 'react'
import Table from './Table'
import Form from './Form'

function App() {
  const [characters, setCharacters] = useState([]);

  const removeCharacter = (index) => {
    setCharacters(
      characters.filter((character, i) => {
        return i !== index
      })
    )
  }

  return (
    <div className="container">
      <h1 className='mt-5'><strong>React Tutorial</strong></h1>
      <br />
      <p>Add a team member with a name and a job</p>

      <Table characterData={characters} removeCharacter={removeCharacter} />

      <h2 className='mt-5 mb-3'><strong>Add New</strong></h2>
      <Form handleSubmit={(character) => {setCharacters([...characters, character])}} />
    </div>
  )
}

export default App
