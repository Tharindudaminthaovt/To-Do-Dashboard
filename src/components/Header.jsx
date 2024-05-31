import React from 'react'
import { BsFillBellFill,BsPersonCircle,BsJustify, BsMenuDown, BsArrowDown, BsArrowsExpand, BsChevronExpand, BsChevronBarDown, BsChevronCompactDown, BsChevronDown } from 'react-icons/bs'


const Header = () => {
  return (
    <header className='header'>
        <div className="menu-icon">
            <BsJustify className="icon"/>
        </div>
        <div className="header-left">
        <h4>Dashboard</h4>
        </div>
        <div className="header-right">
            <BsFillBellFill className='icon' />
            <BsPersonCircle className='icon'/>
            <BsChevronDown className='icon'/>
        </div>
        
    </header>
  )
}

export default Header