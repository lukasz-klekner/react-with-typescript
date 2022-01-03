interface IProps {
  people: {
    name: string
    url: string
    age: number
    note?: string
  }[]
}

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map(({ url, name, age, note }) => {
      return (
        <li className='List'>
          <div className='List-header'>
            <img className='List-img' src={url} />
            <h2>{name}</h2>
          </div>
          <p>{age} years old</p>
          <p className='List-note'>{note}</p>
        </li>
      )
    })
  }

  return <ul>{renderList()}</ul>
}

export default List
