import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftBar from '../Bars/LeftBar/LeftBar'
import RightBar from '../Bars/RightBar/RightBar'
import HomeHeader from '../Header/HomeHeader'

function HomeLayout() {
  return (
      <div>
          <HomeHeader />
          <div style={{ display: 'flex' }}>
              <LeftBar />
              <Outlet />
              <RightBar/>
          </div>
    </div>
  )
}

export default HomeLayout