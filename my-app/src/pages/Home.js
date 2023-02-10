import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import Nav from '../components/Nav'
import Cards from '../components/Card'

const Home = () => {
  return (<div>
  <Nav />
  <div className='home'>
    <div className='head'>Let's Water the Plants
    <img src="https://cdn.discordapp.com/attachments/942709647641550870/1073424235034316871/drops.png" alt="home" />
    </div>
    <Cards />
  </div>
  </div>
   
  )
}

export default Home