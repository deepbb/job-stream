import React from 'react'
import "./Explore.css"
import Image from 'next/image'

export default function Explore() {
  return (
    <div className='explore'>
        <div className='explore-headings'>
            <h1 className='explore-heading'>Look Forward to New Experiences!</h1>
            <h1 className='explore-heading'>Waiting for you to explore</h1>
        </div>
        <div className='explore-cards'>
            <div className='explore-logo-containers'>
                <div className='explore-logo'>
                    <Image src="/explore.svg" width={60} height={60} alt='' />
                </div>
                <div className='explore-texts'>
                    <p className='explore-para1'>Get Better Chances</p>
                    <p className='explore-para2'>Apply and look forward to amazing chances</p>
                </div>
            </div>
            <div>
            <div className='explore-logo-containers'>
                <div className='explore-logo'>
                    <Image src="/explore.svg" width={60} height={60} alt='' />
                </div>
                <div className='explore-texts'>
                    <p className='explore-para1'>Get Better Chances</p>
                    <p className='explore-para2'>Apply and look forward to amazing chances</p>
                </div>
            </div>
            </div>
            <div>
            <div className='explore-logo-containers'>
                <div className='explore-logo'>
                    <Image src="/explore.svg" width={60} height={60} alt='' />
                </div>
                <div className='explore-texts'>
                    <p className='explore-para1'>Get Better Chances</p>
                    <p className='explore-para2'>Apply and look forward to amazing chances</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
