import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead className='thead-dark'>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Action</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button className='btn btn-danger' onClick={() => props.removeCharacter(index)}>Remove</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const characters = this.props.characterData
    const removeCharacter = this.props.removeCharacter

    return (
      <table className='table table-hover'>
        <TableHeader />
        <TableBody characterData={characters} removeCharacter={removeCharacter} />
      </table>
    )
  }
}

export default Table
