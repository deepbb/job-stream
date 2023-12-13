import React from 'react'
import "./Navbar.css"
import Image from 'next/image'

export default function Navbar () {
  return (
    <div className='navbar'>
        <div className='navbar-wraper'>
                <div className='navbar-logo'>
                    <Image src="/logo2.png" width={90} height={50} alt='' />
                </div>
                <div className='navnar-menu'>
                    <li className='list-items'>Home</li>
                    <li className='list-items'>Explore</li>
                    <li className='list-items'>Job Seeker</li>
                    <li className='list-items'>Recruiter</li>
                    <li className='list-items'>Consultancy</li>
                    <li className='list-items'>Pricing</li>
                    <li className='list-items'>Blogs</li>
                    <li className='list-items'>Contact Us</li>
                </div>
                <div className='navbar-login'>
                    <button className='btn-login'>Login</button>
                    <button className='btn-signup'>Sign up</button>
                </div>
        </div>
    </div>
  )
}
