import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead className='thead-dark'>
      <tr>
        <th>Name</th>
        <th>Job</th>
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
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const characters = this.props.characterData

    return (
      <table className='table table-hover'>
        <TableHeader />
        <TableBody characterData={characters} />
      </table>
    )
  }
}

export default Table
