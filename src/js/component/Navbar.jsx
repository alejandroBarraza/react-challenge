import React, { useState } from 'react'

export const Navbar = ({ logo, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='navbar-dark bg-dark'>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <a className='navbar-brand' href='#'>
            {logo}
          </a>
          <button className='navbar-toggler' type='button' onClick={toggleMenu}>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          >
            <ul className={`navbar-nav ${isMenuOpen ? '' : 'ms-auto'}`}>
              {children}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}
