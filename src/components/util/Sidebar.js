import React from 'react'
import '../css/Sidebar.css'
import Category from './sidebar/Category';

const Sidebar = ({ handleChange }) => {
  return (
    <div className='sidebar-container'>
        <Category handleChange={handleChange} />
    </div>
  )
}

export default Sidebar;