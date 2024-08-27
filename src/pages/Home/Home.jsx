import React from 'react'
import Slider from '../Home/components/Slider'
import BeerCarousel from './components/BeerCarousel'
import Cards from './components/Cards'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'
import HomeEventCards from './components/HomeEventCards'
import Navbar from'../../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar/>
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