import React from 'react'
import "./Join.css"
import Image from 'next/image'

export default function Joinus() {
  return (
    <div className='join'>
        <div className='join-image'>
                 <Image src="/Group.png" width={500} height={300} objectFit='cover' alt='' />
        </div>
        <div className='join-texts'>
            <p className='join-text'>Join Us</p>
            <h1 className='join-heading'>Connect with 65,000+ recruiters </h1>
             <h1 className='join-heading2'>by joining Interview Stream</h1>
            <p className='join-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Beatae magni inventore ducimus numquam ratione nisi cupiditate, 
            amet explicabo officia sit eligendi quod, reprehenderit debitis 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi 
            laudantium ex a ut iure. Voluptatum tempora beatae, repudiandae animi 
            at molestias voluptatibus dolorum omnis nobis!</p>
            <button className='join-btn'>Get Started</button>
        </div>
    </div>
  )
}
