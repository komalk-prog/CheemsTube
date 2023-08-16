import React from 'react'
import SideBar from './common/SideBar'
import { Outlet } from 'react-router-dom'
import Head from './common/Head'

const Body = () => {
  return (
    <div className='Body'>
    <Head/>
    <SideBar/>
    <Outlet/>
    </div>
  )
}

export default Body;