import React from 'react'
import "./Realtime.css"
import Image from 'next/image'

export default function Realtime() {
  return (
    <div className='realtime'>
        <div className='realtime-text'>
            <div className='realtime-title'>
                <h1 className='realtime-heading'>A Real Time Hiring Platform</h1>
                <p className='realtime-subheading'>The Quickest and most effective way to get hired by Top companies</p>
            </div>
            <div className='realtime-containers'>
            <div className='verticle-line'>
                <div className='pointing-line'></div>
                <div className='pointing-line1'></div>
                <div className='pointing-line2'></div>
                <div className='pointing-line3'></div>
            </div>
            <div className='realtime-details'>
                <div className='realtime-logo'>
                        <Image src="/laptop.svg" width={30} height={30} alt='' />
                        <p style={{fontFamily:'Poppins',fontSize:22,marginLeft:10,marginTop:0,marginBottom:2}}>Live interviews</p>
                </div>
                <div>
                <p className='realtime-para'>Lorem ipsum dolor sit amet, Sed excepturi asperiores illum nam et impedit repellat, similique  doloremque consectetur necessitatibus. Ex placeat amet optio nulla.</p>
                </div>
                <div className='realtime-logo'>
                        <Image src="/laptop.svg" width={30} height={30} alt='' />
                        <p style={{fontFamily:'Poppins',fontSize:22,marginLeft:10,marginTop:0,marginBottom:2}}>Live interviews</p>
                </div>
                <div>
                <p className='realtime-para'>Lorem ipsum dolor sit amet, Sed excepturi asperiores illum nam et impedit repellat, similique  doloremque consectetur necessitatibus. Ex placeat amet optio nulla.</p>
                </div>
                <div className='realtime-logo'>
                        <Image src="/laptop.svg" width={30} height={30} alt='' />
                        <p style={{fontFamily:'Poppins',fontSize:22,marginLeft:10,marginTop:0,marginBottom:2}}>Live interviews</p>
                </div>
                <div>
                <p className='realtime-para'>Lorem ipsum dolor sit amet, Sed excepturi asperiores illum nam et impedit repellat, similique  doloremque consectetur necessitatibus. Ex placeat amet optio nulla.</p>
                </div>
                <div className='realtime-logo'>
                        <Image src="/laptop.svg" width={30} height={30} alt='' />
                        <p style={{fontFamily:'Poppins',fontSize:22,marginLeft:10,marginTop:0,marginBottom:2}}>Live interviews</p>
                </div>
                <div>
                <p className='realtime-para'>Lorem ipsum dolor sit amet, Sed excepturi asperiores illum nam et impedit repellat, similique  doloremque consectetur necessitatibus. Ex placeat amet optio nulla.</p>
                </div>
            </div>
        </div>
        </div>
       
        <div className='realtime-image'>
            <Image src="/realtime.png" height={450} width={550} alt='' />
        </div>
    </div>
  )
}
