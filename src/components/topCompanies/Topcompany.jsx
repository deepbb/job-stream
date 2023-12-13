import React from 'react'
import "./Topcompany.css"
import Image from 'next/image'

export default function Topcompany() {
  return (
    <div className='top-companies'>
        <button className='topcompany-btn'>Our Top Companies</button>
        <Image src="/amaz.png" width={100} height={50} alt='' objectFit='cover' />
        <Image src="/wip.png" width={100} height={50} objectFit='cover' alt=''  />
        <Image src="/infosys.png" width={100} height={50}objectFit='cover' alt='' />
        <Image src="/deloit.png" width={100} height={50} objectFit='cover' alt=''/>
        <Image src="/cog.png" width={100} height={50} alt='' objectFit='cover' />


    </div>
  )
}
