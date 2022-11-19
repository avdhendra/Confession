import React from 'react'
import { ReactComponent as ConfessLogo } from '../../assests/ConfessLogo.svg'
import "./HomeHeader.scss"
function HomeHeader() {
  return (
      <div className='Home_Header'>
          <div className='logo'>
              <div className='confess_logo'>
                  <ConfessLogo className='confess'/>
              </div>
              <input type="text" placeholder='Search Confessions' className='search_input'/>
          </div>
    </div>
  )
}

export default HomeHeader