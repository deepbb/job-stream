"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/navbar/Navbar'
import Homescroll from '@/components/homeScroll/Homescroll'
import Herosection from '@/components/herosection/Herosection'
import Topcompany from '@/components/topCompanies/Topcompany';
import VideoInterview from '@/components/videointerview/VideoInterview';
import Hire from '@/components/hire/Hire';
import Accounting from '@/components/accounting/Accounting';
import Card from '@/components/cards/Card';
import Realtime from '@/components/realtime/Realtime';
import Joinus from '@/components/joinus/Joinus';
import Explore from '@/components/explore/Explore';
import Footer from '@/components/footer/Footer';
export default function Home() {

  const sliderRef = useRef(null);
  const scrollAmount = 100;
  
  return (
    <div>
       <Navbar />
       <Homescroll />
       <Herosection />
       <Topcompany />
       <VideoInterview />
       <Hire />
       <Accounting />
       <Card />
       <Realtime />
       <Joinus />
       <Explore />
       <Footer />

    </div>
  )
}
