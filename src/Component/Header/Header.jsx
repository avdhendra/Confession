import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { ReactComponent as ConfessLogo } from '../../assests/ConfessLogo.svg'
function Header() {
  return (

          <Link className="logo-container" to="/">
              <ConfessLogo />
          </Link>
     
  )
}

export default Header