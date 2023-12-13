import React from 'react'
import "./Card.css"
import Image from 'next/image'

export default function Card() {
  return (
    <div className='card'>
        <div className='card1'>
            <div className='job-card1'>
                <p className='job-card-text'>Learn more about</p>
                <p className='job-card-heading'>Job Streamers</p>
                <p className='job-card-paragraph'>Job streamers is a video interviewing platform offering an innovative approch
                    to the traditional job search process. It connects Job seakers with recruiters 
                    by allowing them to hire taleted candidates through our live interviews. 
                    <span>See more</span>
                </p>
            </div>
            <div className='job-card2'>
                <p className='job-card-text'>Know how hiring works</p>
                <p className='job-card-heading'>Recruiters Work</p>
                <div className='recruiters-slider'>
                    <div>
                        <Image src="/recruit.png" height={200} width={350}  alt='' objectFit='contain'/>
                        <p className='recruit-card-paragraph'>Job streamers is a video interviewing platform offering an innovative approch
                    to the traditional job search process. It connects Job seakers with recruiters 
                    by allowing them to hire taleted candidates through our live interviews. 
                    <span>See more</span>
                </p>
                    </div>
                    <div className='rectangle-containers'>
                        <div className='rectangles'>

                        </div>
                        <div className='rectangles'>

                        </div>
                        <div className='rectangles'>

                        </div>
                        <div className='rectangles'>

                        </div>
                    </div>
                </div>
            </div>
            <div className='job-card3'>
            <p className='job-card-text'>Know how hiring works</p>
                <p className='job-card-heading'>Recruiters Work</p>
                <div className='recruiters-slider'>
                    <div>
                        <Image src="/chess.png" height={200} width={350}  alt='' objectFit='contain'/>
                        <p className='recruit-card-paragraph'>Job streamers is a video interviewing platform offering an innovative approch
                    to the traditional job search process. It connects Job seakers with recruiters 
                    by allowing them to hire taleted candidates through our live interviews. 
                    <span>See more</span>
                </p>
                    </div>
                    <div className='rectangle-containers'>
                        <div className='rectangles'>

                        </div>
                        <div className='rectangles'>

                        </div>
                        <div className='rectangles'>

                        </div>
                        <div className='rectangles'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='card2'>
        <div className='job-cardRight1'>
            <p className='job-card-text'>Know how hiring works</p>
                <p className='job-card-heading'>Recruiters Work</p>
                <div className='recruiters-slider'>
                    <div>
                        <Image src="/meeting.png" height={200} width={350}  alt='' objectFit='contain'/>
                        <p className='recruit-card-paragraph'>Job streamers is a video interviewing platform offering an innovative approch
                    to the traditional job search process. It connects Job seakers with recruiters 
                    by allowing them to hire taleted candidates through our live interviews. 
                    <span>See more</span>
                </p>
                    </div>
                    <div className='rectangle-containers'>
                        <div className='rectangles'>

                        </div>
                        <div className='rectangles'>

                        </div>
                        <div className='rectangles'>

                        </div>
                        <div className='rectangles'>

                        </div>
                    </div>
                </div>
        </div>
        <div className='job-cardRight2'>
            <p className='job-card-text'>Know how hiring works</p>
                <p className='job-card-heading'>Recruiters Work</p>
                <div className='recruiters-slider'>
                    <div>
                        <Image src="/consult.png" height={200} width={350}  alt='' objectFit='contain'/>
                        <p className='recruit-card-paragraph'>Job streamers is a video interviewing platform offering an innovative approch
                    to the traditional job search process. It connects Job seakers with recruiters 
                    by allowing them to hire taleted candidates through our live interviews. 
                    <span>See more</span>
                </p>
                    </div>
                    <div className='rectangle-containers'>
                        <div className='rectangles'>

                        </div>
                        <div className='rectangles'>

                        </div>
                        <div className='rectangles'>

                        </div>
                        <div className='rectangles'>

                        </div>
                    </div>
                </div>
        </div>
        <div className='job-card4'>
                <p className='job-card-text'>Learn more about</p>
                <p className='job-card-heading'>Job Streamers</p>
                <p className='job-card-paragraph'>Job streamers is a video interviewing platform offering an innovative approch
                    to the traditional job search process. It connects Job seakers with recruiters 
                    by allowing them to hire taleted candidates through our live interviews. 
                    <span>See more</span>
                </p>
            </div>
        </div>
    </div>
  )
}
