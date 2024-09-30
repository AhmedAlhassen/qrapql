
import { gql, useQuery } from '@apollo/client'
import './App.css'


const getAllProducts = gql`
  query {
    getAllProducts {
      id
      name
      description
      price
    }
  }`


function App() {
const {loading, error, data} = useQuery(getAllProducts)

  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
  {data.getAllProducts.map((product) => (
    <div key={product.id}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  ))}

  
      
    </>
  )
}

export default App
