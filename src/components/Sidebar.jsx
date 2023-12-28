import React from 'react'

function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className='headS'>
        <div className='logo'>
            <img src='https://i.pinimg.com/originals/e3/8b/e7/e38be79999727417cb74d7b551541ac8.jpg' alt="" />
        </div>
        <div className='info'>
            <h3>HAMZA ROUGANI</h3>
            <span>Developer full stack</span>
        </div>
        </div>
        <div className='search'>
        <i class='bx bx-search'></i>
            <input type='text' placeholder="Search..." />
        </div>
        <ul>
        
        <li id='check'><i class='bx bx-user-circle'></i> Profile</li>
        <li><i class='bx bx-desktop'></i>Posts</li>
        <li><i class='bx bx-bookmark'></i> Saves</li>
        <li><i class='bx bx-bell'></i> Notification</li>
        <li><i class='bx bx-user-plus'></i> Friends</li>
        <li><i class='bx bx-server'></i> Servers</li>

        </ul>
        <ul>
            <li><i class='bx bx-log-out-circle'></i> Logout</li>
        </ul>
    </div>
  )
}

export default Sidebar