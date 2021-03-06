import { useState } from 'react'
import './App.css'
import AddToList from './components/AddToList'
import List from './components/List'

export interface IState {
  people: {
    name: string
    url: string
    age: number
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'LeBron James',
      age: 35,
      url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
      note: 'Allegeric to staying on the same team',
    },
    {
      name: 'Kobe Bryant',
      age: 42,
      url: 'https://img.wprost.pl/img/kobe-bryant/b1/76/7fb1d3ca6621177b39381765b066.jpeg',
    },
  ])

  return (
    <div className='App'>
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  )
}

export default App
