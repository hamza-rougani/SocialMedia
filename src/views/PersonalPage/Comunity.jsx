import React from 'react'
import Posts from './Posts'
import Users from './Users'
import Categories from './Categories'
function Comunity() {
  return (
    <div className='container'>
        <Users/>
        <div className='fakediv'></div>
        <Posts/>
        <div className='fakediv'></div>
        <Categories/>
        </div>
  )
}

export default Comunity