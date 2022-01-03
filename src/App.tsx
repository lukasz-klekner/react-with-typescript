import { useState } from 'react'
import './App.css'
import List from './components/List'

interface IState {
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
      url: 'https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg',
    },
  ])

  return (
    <div className='App'>
      <h1>People invited to my party</h1>
      <List people={people} />
    </div>
  )
}

export default App
