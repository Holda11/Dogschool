import React from 'react'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import BasicNews from '../components/Novinky/BasicNews'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <BasicNews/>
    <Newsletter/> 
    
    </>
  )
}

export default Home