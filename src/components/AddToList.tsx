import { useState } from 'react'
import { IState as Props } from '../App'

interface IProps {
  people: Props['people']
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
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

  const handleClick = () => {
    if (!input.age || !input.name || !input.url) return

    setPeople([
      ...people,
      {
        name: input.name,
        url: input.url,
        age: parseInt(input.age),
        note: input.note,
      },
    ])

    setInput({
      name: '',
      url: '',
      age: '',
      note: '',
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
      <button className='AddToList-button' onClick={handleClick}>
        Add to list
      </button>
    </div>
  )
}

export default AddToList
