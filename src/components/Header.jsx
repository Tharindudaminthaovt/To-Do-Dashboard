import React from 'react'
import { BsFillBellFill, BsJustify, BsChevronDown } from 'react-icons/bs'
import profile3 from '../assets/header-pic.png'

const Header = () => {
  return (
    <header className='header'>
      <div className="menu-icon">
        <BsJustify className="icon" />
      </div>
      <div className="header-left">
        <h4>Dashboard</h4>
      </div>
      <div className="header-right">
        <BsFillBellFill className='icon' />
        <div className="header-profile-icon">
          <img src={profile3} alt="profile image" />
        </div>
        <BsChevronDown className='icon' />
      </div>

    </header>
  )
}

export default Header