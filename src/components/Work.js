import React from 'react'
import WorkCard from './WorkCard'
import './WorkCardStyles.css'
import WorkCardData from '../components/WorkCardData'
const Work = () => {
  return (
    <div>
        <div className='work-container'>
         <div className='project-heading'>
        <div className='project-container'>
            {
                WorkCardData.map((val,index)=>{
                    return(
                        <WorkCard key={index} 
                        imgsrc={val.imgsrc}
                        title={val.text}
                        view={val.view}
                        />
                    )
                })
            }
        </div>
         </div>
        </div>
    </div>
  )
}

export default Work