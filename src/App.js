import React from 'react'
import Sidebar from './layout/sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import { Home, Login } from './pages/index'

import './style.scss'

const App = () => {
  return (
    <div className='main__layout'>
      <div className='sidebar__container'>
        <Sidebar />
      </div>
      <Routes>
        <Route element={<Layout type='login__page' />} >
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route element={<Layout />}>
          <Route  path='/home' element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App