import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav>
            <NavLink to="./">Login</NavLink>
            <NavLink to="./profile">Profile</NavLink>
        </nav>
       
        <Outlet/>
    </div>
  )
}
