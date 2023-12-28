import React from 'react'

function Header() {
  return (
    <header>
        <ul className='ul'>
            <li className='li'>
                <div className='logo'>
                    <img src={`${import.meta.env.VITE_URL_BASE}/Images/education-png-1.png`} alt="logo" />
                    
                </div>
                <h3>RouganiED</h3>
            </li>
            <li className='li search'>
              <input type="text" placeholder='what do you looking for ...'/>
              <button id='btnS'><i className='bx bx-search'></i></button>
            </li>
        </ul>
        <ul className='ul ul2'>
          <li className='li'><span>Explore</span><i class='bx bx-chevron-down' ></i></li>
          <li className='li'><span>Categories</span><i class='bx bx-chevron-down' ></i></li>
          
          <li className='li'><i class='bx bx-mobile-alt'></i><span>Contact us</span></li>
          <li className='li'><i class='bx bx-question-mark' ></i><span>About</span></li>
            <li className='li mode'><i class='bx bxs-brightness-half'></i></li>
            <li className='li'><button className='reg'>Signup</button></li>
            <li className='li'><button className='join'>Join</button></li>
        </ul>
    </header>
  )
}

export default Header