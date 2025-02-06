import React from 'react'
import useFetch from './custom-hook/useFetch'

const Home = () => {

  let {products} = useFetch("https://fakestoreapi.com/products")
  return (
    <div>
        <h1> Home - Total Products = {products.length} </h1>
    </div>
  )
}

export default Home