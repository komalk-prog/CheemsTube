import React from 'react'
import SideBar from './common/SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='Body'>
    <SideBar/>
    <Outlet/>
    </div>
  )
}

export default Body;