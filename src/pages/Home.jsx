import React from 'react'
import Carousel from '../components/Carousel'
import { ProductsProvider } from '../context/ProductsContext'

const Home = () => {
  return (
    <>
      <ProductsProvider>
        <Carousel />
      </ProductsProvider>
    </>
  )
}

export default Home
