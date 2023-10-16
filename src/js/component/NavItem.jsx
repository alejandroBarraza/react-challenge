import React from 'react'

export const NavItem = () => {
  return (
    <>
      <li className='nav-item'>
        <a className='nav-link' href='/'>
          Home
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='/about'>
          About
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='/services'>
          Services
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='/contact'>
          Contact
        </a>
      </li>
    </>
  )
}
