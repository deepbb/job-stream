import React from 'react'
import "./Userstat.css"
import Profile from '@/components/profile/Profile'
import Filter from '@/components/filters/Filter'
import Analytics from '@/components/analytics/Analytics'
import Navbar from '@/components/navbar/Navbar'

export default function UserStats() {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div style={{backgroundColor:'#FFFFFF'}}>
        <Profile />
        <div className='analytics-container'>
          <div className='filter-wrap'>
          <Filter />
          </div>
          <div className='analytic-wrap'>
          <Analytics />
          </div>
        </div>
    </div>
    </>
  )
}
