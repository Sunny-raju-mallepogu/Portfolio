import React from 'react'
import Navbar from "../components/Navbar";

import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2';

import Myinfo from '../components/Myinfo';
const Info = () => {
  return (
    <div>
         <Navbar/>
      <Heroimg2 heading='HI IAM SUNNY.' text='IAM LOOKING FOR JOB ON REACT DEVELOPER '/>
      
      <Myinfo/>
      <Footer/>
    </div>
  )
}

export default Info