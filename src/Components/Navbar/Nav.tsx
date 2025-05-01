// import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className='flex gap-3'>
        <Link to='/'>Home</Link>
        <Link to='/newArrivals'>New Arrivals</Link>
      </div>
    </>
  )
}

export default Nav
