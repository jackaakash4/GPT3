import React from 'react'
import './Navbar.css'
//{import { RiMenu3Line, RiCloseLine} from 'react-icons'}
import logo from '../../assets/logo.svg'

function Navbar() {
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt='Logo' />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>This is GPT3</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case Study</a></p>
          <p><a href='#blog'>LIbrary</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type='button' >Sign Up</button>
      </div>
      

    </div>
  )
}

export default Navbar