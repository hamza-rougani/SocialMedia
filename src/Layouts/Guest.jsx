import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import GoUp from '../components/GoUp'
function Guest() {
  return (
    <div className='Guest'>
        <Header/>
        <div className='fakeHeader'></div>
        <Outlet/>
        <GoUp/>
        <Footer/>
    </div>
  )
}

export default Guest