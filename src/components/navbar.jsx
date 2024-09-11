import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
    <span className = 'logo'>CONVOWAVE</span>
    <div className = 'user'>
      <img src = "https://images.app.goo.gl/J5ZK6CCZnTLmBE1m8" ></img>
      <span>Mukund</span>
      <button>Log Out</button>
    </div>
    </div>
  )
}

export default Navbar