import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='place-content-evenly flex flex-row gap-4 px-8 py-4 mb-3 w-screen bg-amber-400'>
      <NavLink
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        to="/pastes"
      >
        Pastes
      </NavLink>
    </div>
  )
}

export default Navbar