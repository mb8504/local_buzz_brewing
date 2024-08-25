import React from 'react'
import Slider from './components/Slider'
import BeerCarousel from './components/BeerCarousel'
import Cards from './components/Cards'

const Home = () => {
  return (
    <>
      <Slider/>
      <BeerCarousel/>
      <Cards/>
    </>
  )
}

export default Home