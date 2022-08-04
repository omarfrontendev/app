import React from 'react'

import './header.module.scss'

const Header = ({ type }) => {

  if(type === 'login__page') {
    return (
      <h1>Header Login Page</h1>
    )
  }

  return (
    <div>Header</div>
  )
}

export default Header