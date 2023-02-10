import React from 'react'
import './MyinfoStyles.css'
import { Link } from 'react-router-dom'
const Myinfo = () => {
  return (
    <div>
         <div className='pricing'>
     <div className='card-container'>
     <div className='card'>
     <h3>Front-End Skills</h3>
     <span className='bar'></span>
     <p className='btc'>Intermediate</p>
     <p>HTML5</p>
     <p>CSS3</p>
     <p>JAVASCRIPT</p>
     <p>REACTJS</p>
     <Link to='/contact' className='btn btn-new'>Contact Me</Link>
     </div>
     <div className='card'>
     <h3>CSS frameworks
        
     </h3>
     <span className='bar'></span>
     <p className='btc'>Intermediate</p>
     <p>Bootstrap5</p>
     <p>Ant Designs</p>
     <p>Material Ui</p>
     <p>Chakra Ui</p>
     <Link to='/contact' className='btn btn-new'>Contact Me</Link>
     </div>
     <div className='card'>
     <h3>IDE EDITORS</h3>
     <span className='bar'></span>
     <p className='btc'>Professional</p>
     <p>Notepad++</p>
     <p>Vscode</p>
     <p>Sublime</p>
     <p>Atom</p>
     <Link to='/contact' className='btn btn-new'>Contact Me</Link>
     </div>
     </div>
    </div>
    </div>
  )
}

export default Myinfo