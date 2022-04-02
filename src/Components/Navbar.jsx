import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/shop.css'

function Navbar() {




  return (
    <div style={{padding:15,backgroundColor:"gray"}}>
  <Link to='/' className='home'>HOME</Link>
    </div>
  )
}

export default Navbar