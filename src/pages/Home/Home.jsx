import React from 'react'
import Slider from './components/Slider'
import BeerCarousel from './components/BeerCarousel'
import Cards from './components/Cards'
import Newsletter from '../../components/Newsletter'

const Home = () => {
  return (
    <>
      <Slider/>
      <BeerCarousel/>
      <Cards/>
      <Newsletter/>
    </>
  )
}

export default Home