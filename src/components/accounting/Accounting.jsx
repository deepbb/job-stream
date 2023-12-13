import React from 'react'
import "./Accounting.css"
import Image from 'next/image'

export default function Accounting() {
  return (
    <div className='accounting'>
        <div className='account-wrapper'>
        <div className='account-text1'>
            <div>
            <h1 className='category-heading'>Look Forward to These categories!</h1>
            </div>
            <div style={{width:'40%',marginRight:100}}>
             <h1 className='category-heading-second'>Waiting for you to explore</h1>
            </div>
                
        </div>
        <div className='account-image'>
            <div className='image-holder1'>
            </div>
            <div className='image-holder2'>
            </div>
            <div className='image-holder3'>
            </div>
            <div className='image-holder'>
                <div style={{marginTop:40}}>
                     <Image src="/book.png" width={190} height={200} alt='' />
                </div>
                <div className='account-logo'>
                     <Image src="/accounting.png" width={19} height={20} alt='' />
                     <p className='accountig-text'>Accounting</p>
                </div>
                <p className='job-text'>200 + job openings</p>
            </div>
        </div>
        <div className='account-text2'>
        <div style={{marginLeft:70}}>
            <h1 className='category-heading-account'>Accounting</h1>
            </div>
            <div style={{width:'70%',marginLeft:70,fontFamily:'Poppins',color:'#006379',fontSize:13,fontWeight:'bold'}}>
             <p className=''>Accounting is a category that covers various types of jobs related to managing and reporting financial data of an organization</p>
             <button className='account-btn'>See more  <span>&#8594;</span> </button>
            </div>
        </div>
        </div>
    </div>
  )
}
