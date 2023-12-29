import React from 'react'
import "./Navbar.css"
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar () {
  return (
    <div className='navbar'>
        <div className='navbar-wraper'>
                <div className='navbar-logo'>
                    <Image src="/logo2.png" width={90} height={50} alt='' />
                </div>
                <div className='navnar-menu'>
                  <Link  className='list-items' href="/">Home</Link>
                  <Link  className='list-items' href="/userstats">Explore</Link>
                  <Link  className='list-items' href="/assesment">Job Seeker</Link>
                  <Link  className='list-items' href="/assessmentfinal">Recruiter</Link>
                  <Link  className='list-items' href="/dashboard">Consultancy</Link>
                  <Link  className='list-items' href="/interview">Pricing</Link>
                  <Link  className='list-items' href="/">Blogs</Link>
                  <Link  className='list-items' href="/">Contact Us</Link>

                    {/* <li className='list-items'>Home</li> */}
                    {/* <li className='list-items'>Explore</li>
                    <li className='list-items'>Job Seeker</li>
                    <li className='list-items'>Recruiter</li>
                    <li className='list-items'>Consultancy</li>
                    <li className='list-items'>Pricing</li>
                    <li className='list-items'>Blogs</li>
                    <li className='list-items'>Contact Us</li> */}
                </div>
                <div className='navbar-login'>
                    <button className='btn-login'>Login</button>
                    <button className='btn-signup'>Sign up</button>
                </div>
        </div>
    </div>
  )
}
