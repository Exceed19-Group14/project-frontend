import React from 'react'
import '../styles/Card.css'

const Cards = ({ id, date, image, moist, temp, light}) => {
  return (
    <div className='card'>
      <h1>ID: {id}</h1>
      <img src={image} alt="plant" />
      <div className='det'>Date: {date}</div>
      <div className='det'>Moisture: {moist}</div>
      <div className='det'>Temperature: {temp}</div>
      <div className='det'>Light: {light}</div>
      </div>
  )
}

export default Cards