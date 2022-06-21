import { gql, useQuery } from '@apollo/client';
import {client} from './lib/apollo';

const GET_LESSONS_QUERY = gql`
query{
  lessons{
    id
    title
  }
}
`
function App() {
  const {data} = useQuery(GET_LESSONS_QUERY)
  console.log(data)
  return (
  <h1 className="">oi</h1>
  )
}

export default App
