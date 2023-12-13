import React from 'react'
import "./Herosection.css"
import Image from 'next/image'

export default function Herosection() {
  return (
    <div className='hero-section'>
        <div className='hero-text'>
            <div>
            <h1 className='heading'>Stream to get Hired</h1>
            <h3 className='sub-heading'>Introducing Video interview platform</h3>
            <div className='hero-btns'>
                    <button className='start-btn'>Get Started</button>
                    <button className='contact-btn'>Contact Sales</button>
                </div>
                </div>
        </div>
        <div className='hero-image'>
            <Image src="/Group.png" width={500} height={300} objectFit='cover' alt='' />
        </div>
    </div>
  )
}
