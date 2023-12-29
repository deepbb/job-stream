import Image from 'next/image'
import React from 'react'
import "./Profile.css"

export default function ProfileAssessment() {
  return (
    <div className='profile-assess'>
    <div className='wrap-image'>
         <Image src="/background.png" width={1290} height={450} className='profile-image' alt='' />
         <div className='position'>
            <div className='profile-wraper'>
                <div className='profile-image'>
                    <div className='profile-section'>
                        <Image src="/profile.jpeg" width={100} height={100} style={{borderRadius:50,margin:10}} alt='' />
                        <p className='basic-info'>Current CTC:<span style={{fontWeight:'bold'}}>8.5 LPA</span></p>
                        <p className='basic-info'>Expected CTC:<span style={{fontWeight:'bold'}}>10.5.5 LPA</span></p>
                        <p className='basic-info'>Notice Period:<span style={{fontWeight:'bold'}}>2 mon</span></p>
                        <p className='basic-info'>Location :<span style={{fontWeight:'bold'}}>Bangalore</span></p>
                    </div>
                </div>
                <div className='profile-headings'>
                    <h1 className='profile-name'>Hello Pradeep B B</h1>
                    <p className='profile-position'>Applied Position: Frontend Developer</p>
                   
                    </div>
                </div>
            </div>
         </div>
    </div>
    
  )
}
