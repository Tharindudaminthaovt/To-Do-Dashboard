import React from 'react'
import { BsCart3,BsGrid1X2Fill } from 'react-icons/bs'


const Sidebar = () => {
  return (
    <aside id='sidebar'>
        <div className="sidebar-title">
            <div className="sidebar-brand">
               <h3 className="icon_header">Acmy Solutions</h3>
            </div>
            <span className="icon close_icon">X</span>
            </div>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="#">
                        <BsGrid1X2Fill className="icon list"/>Dashboard
                    </a>
                </li>
            </ul>
        
    </aside>
  )
}

export default Sidebar