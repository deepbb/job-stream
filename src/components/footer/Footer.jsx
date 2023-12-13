import React from 'react'
import "./Footer.css"
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='footer-wraper'>
        <div className='footer-containers'>
                <div className='job-streamers'>
                    <p className='job-stream-text'>Job Streamers</p>
                    <div className='horizobtal-line'></div>
                    <p className='footer-para'>Job streamers is a powerfull tool for both job seekers and 
                    employers in todays's competitive job market. Its user-friendly interface and advanced features
                    make it a popular choice for those who want to simplify job search process and fine the best talent.
                    </p>
                </div>
                <div className='quick-link'>
                <p className='job-stream-text'>Quick Links</p>
                <div className='horizobtal-line'></div>
                <div className='links'>
                    <div className='link-logo'>
                        <Image src="/arrow.svg" width={10} height={10} alt='' />
                        <p className='link-text'>Home</p>
                    </div>
                    <div className='link-logo'>
                        <Image src="/arrow.svg" width={10} height={10} alt='' />
                        <p className='link-text'>About Us</p>
                    </div>
                    <div className='link-logo'>
                        <Image src="/arrow.svg" width={10} height={10} alt='' />
                        <p className='link-text'>Our Story</p>
                    </div>
                    <div className='link-logo'>
                        <Image src="/arrow.svg" width={10} height={10} alt='' />
                        <p className='link-text'>Empmloyers Profile Form</p>
                    </div>
                    <div className='link-logo'>
                        <Image src="/arrow.svg" width={10} height={10} alt='' />
                        <p className='link-text'>What Do We Do</p>
                    </div>
                </div>
                </div>
                <div className='quick-link'>
                <p className='job-stream-text'>Quick Links</p>
                <div className='horizobtal-line'></div>
                <div className='links'>
                    <div className='link-logo'>
                        <Image src="/arrow.svg" width={10} height={10} alt='' />
                        <p className='link-text'>Home</p>
                    </div>
                    <div className='link-logo'>
                        <Image src="/arrow.svg" width={10} height={10} alt='' />
                        <p className='link-text'>About Us</p>
                    </div>
                    <div className='link-logo'>
                        <Image src="/arrow.svg" width={10} height={10} alt='' />
                        <p className='link-text'>Our Story</p>
                    </div>
                    <div className='link-logo'>
                        <Image src="/arrow.svg" width={10} height={10} alt='' />
                        <p className='link-text'>Empmloyers Profile Form</p>
                    </div>
                    <div className='link-logo'>
                        <Image src="/arrow.svg" width={10} height={10} alt='' />
                        <p className='link-text'>What Do We Do</p>
                    </div>
                </div>
                </div>
                <div className='quick-link'>
                <p className='job-stream-text'>Get in Touch</p>
                <div className='horizobtal-line'></div>
                <div className='links'>
                    <div className='link-logo'>
                        <Image src="/phone.svg" width={10} height={10} alt='' />
                        <p className='link-text'>9591405749</p>
                    </div>
                    <div className='link-logo'>
                        <Image src="/mail.svg" width={10} height={10} alt='' />
                        <p className='link-text'>info@jobstreamers.com</p>
                    </div>
                    <div className='link-logo'>
                        <Image src="/location.svg" width={10} height={10} alt='' />
                        <p className='link-text'>Bangalore Karnataka India</p>
                    </div>
                    <div className='social-icons'>
                    <Image src="/facebook.svg" width={30} height={30} alt='' />
                    <Image src="/twitter.svg" width={30} height={30} alt='' />
                    <Image src="/insta.svg" width={30} height={30} alt='' />
                    </div>
                </div>
                </div>
        </div>
        <div className='footer-line'>
            <p className='footer-line-text'>2023 Job Streams. All Rights Reserved</p>
            <p className='footer-line-text'>Developed by AWT</p>
        </div>
    </div>
  )
}
