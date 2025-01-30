import React from 'react'
import Nav from '../Components/Nav'
import CategoryMenu from '../Components/CategoryMenu'
import FoodIteams from '../Components/FoodItems'
import Cart from '../Components/Cart'

function Home() {
  return (
    <>
      <Nav />
      <CategoryMenu />
      <FoodIteams />
      <Cart />
    </>
  )
}

export default Home