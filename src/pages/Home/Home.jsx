import React from 'react'
import Slider from './components/Slider'
import BeerCarousel from './components/BeerCarousel'
import Cards from './components/Cards'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'
import HomeEventCards from './components/HomeEventCards'

const Home = () => {
  return (
    <>
      <Slider/>
      <BeerCarousel/>
      <Cards/>
      <HomeEventCards/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Home