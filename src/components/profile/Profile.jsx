import React from 'react'
import "./Profile.css"
import Image from 'next/image'

function Profile() {
  return (
    <div className='profile'>
        <div className='wrap-image'>
             <Image src="/background.png" width={1290} height={660} className='profile-image' />
             <div className='position'>
                <div className='profile-wraper'>
                    <div className='profile-image'>
                        <div className='profile-section'>
                            <Image src="/profile.jpeg" width={100} height={100} style={{borderRadius:50,margin:10}} alt='' />
                            <p className='basic-info'>Current CTC:<span style={{fontWeight:'bold'}}>8.5 LPA</span></p>
                            <p className='basic-info'>Expected CTC:<span style={{fontWeight:'bold'}}>10.5.5 LPA</span></p>
                            <p className='basic-info'>Notice Period:<span style={{fontWeight:'bold'}}>2 mon</span></p>
                            <p className='basic-info'>Location :<span style={{fontWeight:'bold'}}>Bangalore</span></p>
                        </div>
                    </div>
                    <div className='profile-headings'>
                        <h1 className='profile-name'>Hello Pradeep B B</h1>
                        <p className='profile-position'>Applied Position: Frontend Developer</p>
                        <p className='profile-description'>Pradeep is talanted and experienced Frontend Developer with passion for creating visually stunning
                            and user friendly mobile apps, with a proven track record of delivering exceptional design solutions,
                            Pradeep posessess a deep understanding of user-centered design principles and keen eye for aesthetics .
                        </p>
                        <p className='profile-match'>Congratulations! Your Profile has matched around <span style={{fontSize:30,fontWeight:'bolder'}}>96%</span> with the results</p>
                        <div className='keywords'>
                            <p>Keywords :</p>
                            <button>Design</button>
                            <button>Research</button>
                            <button>React</button>
                            <button>React Native</button>

                        </div>
                        <div className='profile-statistics'>
                                <div className='stats-heading'>
                                    <h2>Get your stats!</h2>
                                    <div>
                                    <input className='profile-input' placeholder='Enter your search location' />
                                    <button>search</button>
                                    </div>
                                </div>
                                <div className='profile-logos'>
                                    <div className='stat-card'>
                                        <div className='logo-background'>
                                            <Image src="/current.png" width={30} height={30} alt='' />
                                        </div>
                                        <div className='logo-texts'>
                                            <p className='logo-head'>Current Openings</p>
                                            <p className='logo-head2'>123 Abc</p>
                                        </div>
                                    </div>
                                    <div className='stat-card'>
                                    <div className='logo-background'>
                                            <Image src="/hand.png" width={30} height={30} alt='' />
                                        </div>
                                        <div className='logo-texts'>
                                            <p className='logo-head'>Current Openings</p>
                                            <p className='logo-head2'>123 Abc</p>
                                        </div>
                                    </div>
                                    <div className='stat-card'>
                                    <div className='logo-background'>
                                            <Image src="/number.png" width={30} height={30} alt='' />
                                        </div>
                                        <div className='logo-texts'>
                                            <p className='logo-head'>Current Openings</p>
                                            <p className='logo-head2'>123 Abc</p>
                                        </div>
                                    </div>
                                    <div className='stat-card'>
                                    <div className='logo-background'>
                                            <Image src="/location.png" width={30} height={30} alt='' />
                                        </div>
                                        <div className='logo-texts'>
                                            <p className='logo-head'>Current Openings</p>
                                            <p className='logo-head2'> </p>
                                        </div>
                                    </div>
                                    <div className='stat-card'>
                                    <div className='logo-background'>
                                            <Image src="/note.png" width={30} height={30} alt='' />
                                        </div>
                                        <div className='logo-texts'>
                                            <p className='logo-head'>Current Openings</p>
                                            <p className='logo-head2'> </p>
                                        </div>
                                    </div>

                                </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
        
    </div>
  )
}

export default Profile