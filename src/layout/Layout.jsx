import React from 'react'
import Header from './header/Header'

import { Outlet } from 'react-router-dom'

const Layout = ({ type }) => {
  return (
    <div className='main__content'>
      <Header type={type} />
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout