import './FooterStyles.css'

import React from 'react'
import { FaHome,FaPhone ,FaEmail, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
<div className='footer-container'>
    <div className='left'>
        <div className='location'>
          <FaHome size={20} style={{color:'#fff',marginRight:'2rem'}}/>
          <div>
            <p>123 Housing Soceity</p>
            <p>Andhra Pradesh</p>
          </div>
        </div>
        <div className='phone'>
            <h4><FaPhone size={20} style={{color:'#fff',marginRight:'2rem'}}/>
        9000-727-551</h4>
        
        </div>
        <div className='email'>
        <h4><FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}}/>
        mallepogusunny123@gmail.com</h4>
        </div>
    </div>
    <div className='right'>
        <h4>About the company</h4>
        <p>This is me Sunny Raju . CEO & Founder of Techsoft etc . I enjoy discussing new challenegs and designs</p>
        <div className='social'>
        <FaFacebook size={20} style={{color:'#fff',marginRight:'2rem'}}/>
        <FaTwitter size={20} style={{color:'#fff',marginRight:'2rem'}}/>
        <FaLinkedin size={20} style={{color:'#fff',marginRight:'2rem'}}/> 
        </div>
    </div>
</div>
    </div>
  )
}

export default Footer