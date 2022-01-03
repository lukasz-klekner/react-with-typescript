import { IState as IProps } from '../App'

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map(({ url, name, age, note }, index) => {
      return (
        <li className='List' key={index}>
          <div className='List-header'>
            <img className='List-img' src={url} alt={`${name}`} />
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
