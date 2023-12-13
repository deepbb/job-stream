import React from 'react'
import "./VideoInterview.css"
import Image from 'next/image'

export default function VideoInterview() {
  return (
    <div className='videos'>
        <div className='video-text'>
            <h3 className='video-heading'>Video Interviews</h3>
            <h1 className='main-heading'>Get Your <span style={{color:'#FFB929'}}>Core Job</span> in <span style={{color:'#006379'}}>Real Time!</span></h1>
            <p className='video-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non, amet deleniti harum quod quo eveniet error assumenda, deserunt, officiis officia nemo repellendus culpa illo earum quae debitis quibusdam aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius eligendi totam odio reprehenderit a ut autem laborum repudiandae facilis odit necessitatibus aliquid, dignissimos dolore vitae. Repellat fugit laborum illo!.</p>
            <button className='start-btn'>Get Started</button>
        </div>
        <div className='video-image'>
            <Image src="/video-new.png" width={400} height={250} alt='' objectFit='cover' />
        </div>
    </div>
  )
}
