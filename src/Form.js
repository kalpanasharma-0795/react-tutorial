import React, { useState } from 'react'

function Form(props) {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const submitForm = () => {
    props.handleSubmit({name: name, job: job})
    setName('')
    setJob('')
  }

  return (
    <form className='form-horizontal'>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        value={name}
        className='form-control'
        onChange={event => setName(event.target.value)} />
      <br />
      <label htmlFor='job'>Job</label>
      <input
        type='text'
        name='job'
        id='job'
        value={job}
        className='form-control'
        onChange={event => setJob(event.target.value)} />
      <br />
      <input 
        type='button'
        name='Submit'
        value='Submit'
        className='btn btn-success'
        onClick={submitForm} />
    </form>
  )
}

export default Form
