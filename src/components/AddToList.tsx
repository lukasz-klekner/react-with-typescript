import { useState } from 'react'

const AddToList = () => {
  const [input, setInput] = useState({
    name: '',
    url: '',
    age: '',
    note: '',
  })

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })
  }
  return (
    <div className='AddToList'>
      <input
        type='text'
        className='AddToList-input'
        placeholder='Name'
        name='name'
        value={input.name}
        onChange={handleChange}
      />
      <input
        type='text'
        className='AddToList-input'
        placeholder='Age'
        name='age'
        value={input.age}
        onChange={handleChange}
      />
      <input
        type='text'
        className='AddToList-input'
        placeholder='Url'
        name='url'
        value={input.url}
        onChange={handleChange}
      />
      <textarea
        className='AddToList-input'
        placeholder='Note'
        name='note'
        onChange={handleChange}
        value={input.note}
      />
    </div>
  )
}

export default AddToList
