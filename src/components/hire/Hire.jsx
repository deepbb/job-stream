import React from 'react'
import "./Hire.css"
import Image from 'next/image'

export default function Hire() {
  return (
    <div className='hire'>
        <div className='hire-details'>
                 <h3 className='hire-heading'>Get Hire in 5 Easy Steps</h3>
                 <p className='hire-paragraph'>Get the leading hiring platform, that&apos;s proven to enhance every steps of hiring process </p>
                 <div className='hiring-steps'>
                        <div className='hiring-sections'>
                            <div className='account-wrap'>
                                <Image src="/Account.png" width={30} height={30} alt='' />
                                <p className='account-para'>Create Account</p>
                            </div>
                        </div>
                        <div className='hiring-sections'>
                            <div className='section-para'>
                                 <p className='account-section'>It allows job seekers to create profile that showcase their skills, experiance,and qualifications to potential employers </p>   
                            </div>
                        </div>
                        <div className='hiring-sections'>
                        <div className='section-para-new'>
                                 <p className='account-section'>It allows job seekers to create profile that showcase their skills,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s </p>   
                            </div>
                        </div>
                        <div className='hiring-sections-wrap'>
                        <div className='account-wrap-two'>
                                <Image src="/upload.svg" width={30} height={30} alt='' />
                                <p className='account-para'>Create Account</p>
                            </div>
                        </div>
                        <div className='hiring-sections'>
                        <div className='account-wrap-three'>
                                <Image src="/search.svg" width={30} height={30} alt='' />
                                <p className='account-para'>Create Account</p>
                            </div>
                        </div>
                        <div className='hiring-sections'>
                        <div className='section-para'>
                                 <p className='account-section'>It allows job seekers to create profile that showcase their skills, experiance,and qualifications to potential employers </p>   
                            </div>
                        </div>
                        <div className='hiring-sections'>
                        <div className='section-para-new'>
                                 <p className='account-section'>It allows job seekers to create profile that showcase their skills, experiance,and qualifications to potential employers </p>   
                            </div>
                        </div>
                        <div className='hiring-sections-wrap'>
                        <div className='account-wrap-four'>
                                <Image src="/laptop.svg" width={30} height={30} alt='' />
                                <p className='account-para'>Create Account</p>
                            </div>
                        </div>
                        <div className='hiring-sections'>
                        <div className='account-wrap-five'>
                                <Image src="/star.svg" width={30} height={30} alt='' />
                                <p className='account-para'>Create Account</p>
                            </div>
                        </div>
                        <div className='hiring-sections'>
                        <div className='section-para'>
                                 <p className='account-section'>It allows job seekers to create profile that showcase their skills, experiance,and qualifications to potential employers </p>   
                            </div>
                        </div>
                 </div>
        </div>
        <div className='hire-stats'>
                <div className='user-stats'>
                        <div className='top-heading'>
                            <h3 className='user-heading'>ACTIVE USERS</h3>
                            <h3 className='user-heading'>(World-wide)</h3>
                        </div>
                        <h1 className='number'>4,033,189,345</h1>
                        <div className='recruiters-stats'>
                        <div className='active-recruiters'>
                                <p className='recruiters-text'>Recruiters Online</p>
                                <p className='recruiters-number-one'>3,33,728,022</p>
                        </div>
                        <div className='active-recruiters'>
                                 <p className='recruiters-text'>Recruiters Online</p>
                                <p className='recruiters-number-two'>3,33,728,022</p>
                        </div>
                        <div className='active-recruiters'>
                        <p className='recruiters-text'>Recruiters Online</p>
                                <p className='recruiters-number'>3,33,728,022</p>
                        </div>
                        <div className='active-recruiters'>
                        <p className='recruiters-text'>Recruiters Online</p>
                                <p className='recruiters-number'>3,33,728,022</p>
                        </div>
                        <div className='active-recruiters'>
                        <p className='recruiters-text'>Recruiters Online</p>
                                <p className='recruiters-number'>3,33,728,022</p>
                        </div>
                        <div className='active-recruiters'>
                        <p className='recruiters-text'>Recruiters Online</p>
                                <p className='recruiters-number'>3,33,728,022</p>
                        </div>
                </div>
                </div>
                
                <div className='sponser'>
                    <p style={{alignSelf:'flex-start',fontFamily:'Poppins',fontWeight:'600',fontSize:18}}>Partnered By</p>
                    <Image src="/path.png" width={350} height={350} alt='' />
                </div>
        </div>
    </div>
  )
}
