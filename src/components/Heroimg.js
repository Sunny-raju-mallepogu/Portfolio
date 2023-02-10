import './HeroimgStyles.css'
import React from 'react'
import workspace from '../assets/workspace.jpg'
import { Link } from 'react-router-dom'
const Heroimg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={workspace}/>
      </div>
      <div className='content'>
        <p>HI, I'M SUNNY RAJU</p>
        <h1>React Developer .</h1>
        <div>
        <Link to='/project' className='btn btn-light'>Projects</Link>
        
        <Link to='/info' className='btn '>My info</Link>
        <Link to='/contact' className='btn btn-light'>Contact</Link>
      </div>
      </div>
      
    </div>
  )
}

export default Heroimg