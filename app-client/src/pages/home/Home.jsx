import React from 'react'
import Container from '../../components/container/Container'
import ContainerItem from '../../components/containerItem/ContainerItem'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Mail from '../../components/mail/Mail'
import Navbar from '../../components/navbar/Navbar'
import './home.css'

const Home = () => {
  return (
      <div className="home">
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <h2 className='homeTitle'>Browse by property type</h2>
            <Container/>
          <h2 className='homeTitle'>Homes guests love</h2>
            <ContainerItem/>
            <Mail/>
            <Footer/>
        </div>
      </div>
  )
}

export default Home