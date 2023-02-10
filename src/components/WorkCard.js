import './WorkCardStyles.css'

import React from 'react'
import img3 from '../assets/img3.jpg'
import { NavLink } from 'react-router-dom'
const WorkCard = () => {
  return (
    <div className='wor-container'>
    <h1 className='prject-heading'>Projects</h1>
    <div className='project-container'>
     <div className='project-card'>
    <img src={img3}/>
    <h2 className='project-title'>Project-Title</h2>
    <div className='pro-details'>
        <p>This is text</p>
        <div className='pro-btns'>
        <NavLink to='url.com' className='btn'>View</NavLink>
        <NavLink to='url.com' className='btn'>Source</NavLink>
        </div>
    </div>
     </div>
    </div>
    </div>
  )
}

export default WorkCard