interface IProps {
  people: {
    name: string
    url: string
    age: number
    note?: string
  }[]
}

const List: React.FC<IProps> = ({ people }) => <div>i AM a list</div>

export default List
