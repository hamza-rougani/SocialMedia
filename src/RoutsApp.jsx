import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Guest from './Layouts/Guest'
import NotfoundPage from './components/NotfoundPage'
import Home from './views/Home/Home'
import Comunity from './views/PersonalPage/Comunity'
import ShowPost from './views/PersonalPage/ShowPost'
import CreatPost from './views/PersonalPage/CreatPost'
function RoutsApp() {
  return (
    <div className='RoutsApp'>
        <Routes>
         <Route path='/' element={<Guest/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/community' element={<Comunity/>}/>
            <Route path='/show' element={<ShowPost/>}/>
            <Route path='/create' element={<CreatPost/>}/>
            <Route path='*' element={<NotfoundPage/>}/>
         </Route>
        </Routes>
    </div>
  )
}

export default RoutsApp