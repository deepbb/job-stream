import React from 'react'
import "./Dashboard.css"
import Image from 'next/image'
import Link from 'next/link'

export default function Dasboard() {
  return (
    <div className='dashboard'>
        <div className='dashboard-container'>
                 <div className='dashboard-menu'>
                    <div className='menu-cont'>
                        <div style={{paddingTop:10}}>
                            <Link href="/">
                    <Image src="/logo2.png" width={110} height={60} alt='' />
                    </Link>
                         </div>
                         <div style={{paddingTop:10}}>
                    <Image src="/company-logo.png" width={100} height={100} alt='' />
                       </div>
                       <div className='dash-text'>
                        <p className='dash-company'>Wipro</p>
                        <p className='dash-name'>Pradeep B B</p>
                       </div>
                    </div>
                    <div className='dash-tabs'>
                        <div className='tab-wrap'>
                        <Image src="/dash.png" width={15} height={15} alt='' />
                        <p style={{color:'black',fontWeight:'bold'}}>Dashboard</p>
                        </div>
                        <div className='tab-wrap'>
                        <Image src="/manage.png" width={15} height={15} alt='' />
                        <p>Manage Jobs</p>
                        </div>
                        <div className='tab-wrap'>
                        <Image src="/explore.png" width={15} height={15} alt='' />
                        <p>Explore Candidates</p>
                        </div>
                        <div className='tab-wrap'>
                        <Image src="/schedule.png" width={15} height={15} alt='' />
                        <p>Schedule Interview</p>
                        </div>
                    </div>
                    </div>
                 <div className='dashboard-info'>
                        <div className='info-navbar'>
                            <div>
                            <p className='info-name'>Hey, Pradeep!</p>
                            </div>
                            <div className='search-cont'>
                                     <Image src="/dash-bell.png" width={30} height={30} alt='' />
                                        <Image src="/dash-search.png" width={30} height={30} alt='' />
                                     <div className='dash-search'>
                                     <Image src="/candidate.png" width={25} height={25} alt='' />
                                     <p>Pradeep B B | Wipro</p>
                                     <Image src="/chevron-left.png" width={25} height={25} alt='' />
                                    </div>
                                
                            </div>
                        </div>
                        <p className='active'>Active / Online</p>
                        <div className='dash-numbers'>
                                <div>
                                    <p className='cand-heading'>Total Screened Candidates</p>
                                    <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginTop:50,marginLeft:10}}>
                                        <p className='count-cand'>1500</p>
                                        <div className='number-cont'>
                                        <Image src="/down.png" width={15} height={15} alt='' />
                                         <p>24%</p>
                                        </div>
                                    
                                    </div>
                                    <button className='btn-candidate'>know more</button>
                                </div>
                                <div style={{width:1,height:140,backgroundColor:'black',marginTop:30}} />
                                <div>
                                    <p className='cand-heading'>Applied</p>
                                    <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginTop:50,marginLeft:10}}>
                                        <p className='count-cand'>20,300</p>
                                        <div className='number-cont'>
                                        <Image src="/down.png" width={15} height={15} alt='' />
                                         <p>24%</p>
                                        </div>
                                    
                                    </div>
                                    <button className='btn-candidate'>know more</button>
                                </div>
                                <div style={{width:1,height:140,backgroundColor:'black',marginTop:30}} />
                                <div>
                                    <p className='cand-heading'>No.of Positions</p>
                                    <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginTop:50,marginLeft:10}}>
                                        <p className='count-cand'>20,300
                                        </p>
                                        <div className='number-cont'>
                                        <Image src="/down.png" width={15} height={15} alt='' />
                                         <p>24%</p>
                                        </div>
                                    
                                    </div>
                                    <button className='btn-candidate'>know more</button>
                                </div>
                                <div style={{width:1,height:140,backgroundColor:'black',marginTop:30}} />
                                <div>
                                    <p className='cand-heading'>Pending Interviews</p>
                                    <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginTop:50,marginLeft:10}}>
                                        <p className='count-cand'>1500</p>
                                        <div className='number-cont'>
                                        <Image src="/down.png" width={15} height={15} alt='' />
                                         <p>24%</p>
                                        </div>
                                    
                                    </div>
                                    <button className='btn-candidate'>know more</button>
                                </div>
                               
                        </div>
                        <div className='dash-graphs'>
                            <div style={{display:'flex',flexDirection:'column',flex:8}}>
                                <div className='horiz-graph'>
                                    <div className='graph-headings'>
                                        <p style={{fontFamily:'Poppins',fontSize:18,fontWeight:'bold'}}>Total Candidates</p>
                                        <div className='applied'>
                                            <div className='applied-wrap'>
                                            <div style={{width:10,height:10,borderRadius:50,backgroundColor:'#FFB929'}} />
                                            <p>Job Applied</p>
                                            </div>
                                            <div className='applied-wrap'>
                                            <div style={{width:10,height:10,borderRadius:50,backgroundColor:'#006379'}} />
                                            <p>Job Applied</p>
                                            </div>
                                        </div>
                                        <div className='date-input'>
                                            <p>Feb 16 - Jun 23rd, 2022</p>
                                            <div style={{display:'flex',justifyContent:'space-between',marginBottom:5}}>
                                                <p>Last 120 days</p>
                                                <Image src="/chevron-left.png" width={25} height={25} alt='' style={{marginLeft:80}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='inputs-container'>
                                        <div className='input-box'>
                                            <p className='date-heading'>Date range</p>
                                            <div className='date-wrap'>
                                                <p>dd/mm/yy</p>
                                                <Image src="/chevron-left.png" width={20} height={20} alt='' style={{marginLeft:80}} />
                                            </div>
                                        </div>
                                        <div className='input-box'>
                                            <p className='date-heading'>Location</p>
                                            <div className='date-wrap'>
                                                <p>City</p>
                                                <Image src="/chevron-left.png" width={20} height={20} alt='' style={{marginLeft:80}} />
                                            </div>
                                        </div>
                                        <div className='input-box'>
                                            <p className='date-heading'>Position</p>
                                            <div className='date-wrap'>
                                                <p>Job Role</p>
                                                <Image src="/chevron-left.png" width={20} height={20} alt='' style={{marginLeft:80}} />
                                            </div>
                                        </div>
                                        <div className='input-box'>
                                            <p className='date-heading'>Status</p>
                                            <div className='date-wrap'>
                                                <p>ststus</p>
                                                <Image src="/chevron-left.png" width={20} height={20} alt='' style={{marginLeft:80}} />
                                            </div>
                                        </div>
                                </div>
                                <div className='graph-ranges'>
                                        <div className='single-range'>
                                                <p className='number'>100%</p>
                                                <div className='line'></div>
                                        </div>
                                        <div className='single-range'>
                                                <p className='number'>80%</p>
                                                <div className='line'></div>
                                        </div>
                                        <div className='single-range'>
                                                <p className='number'>60%</p>
                                                <div className='line'></div>
                                        </div>
                                        <div className='single-range'>
                                                <p className='number'>40%</p>
                                                <div className='line'></div>
                                        </div>
                                        <div className='single-range'>
                                                <p className='number'>20%</p>
                                                <div className='line'></div>
                                        </div>
                                        <div className='graph-container'>
                                        <div className='gaph-color'>
                                            <div className='color-yellow'></div>
                                            <div className='color-blue'></div>
                                        </div>
                                        <div className='gaph-color'>
                                            <div className='color-yellow'></div>
                                            <div className='color-blue'></div>
                                        </div>
                                        <div className='gaph-color'>
                                            <div className='color-yellow'></div>
                                            <div className='color-blue'></div>
                                        </div>
                                        <div className='gaph-color'>
                                            <div className='color-yellow'></div>
                                            <div className='color-blue'></div>
                                        </div>
                                        <div className='gaph-color'>
                                            <div className='color-yellow'></div>
                                            <div className='color-blue'></div>
                                        </div>
                                        <div className='gaph-color'>
                                            <div className='color-yellow'></div>
                                            <div className='color-blue'></div>
                                        </div>
                                        <div className='gaph-color'>
                                            <div className='color-yellow'></div>
                                            <div className='color-blue'></div>
                                        </div>
                                        <div className='gaph-color'>
                                            <div className='color-yellow'></div>
                                            <div className='color-blue'></div>
                                        </div>
                                        <div className='gaph-color'>
                                            <div className='color-yellow'></div>
                                            <div className='color-blue'></div>
                                        </div>
                                        <div className='gaph-color'>
                                            <div className='color-yellow'></div>
                                            <div className='color-blue'></div>
                                        </div>
                                        <div className='gaph-color'>
                                            <div className='color-yellow'></div>
                                            <div className='color-blue'></div>
                                        </div>
                                        </div>
                                        <div className='single-range'>
                                               
                                                <div className='line-month'>
                                                    <span>Jan</span>
                                                    <span>Feb</span>
                                                    <span>Mar</span>
                                                    <span>Apr</span>
                                                    <span>May</span>
                                                    <span>Jun</span>
                                                    <span>Jul</span>
                                                    <span>Aug</span>
                                                    <span>Sep</span>
                                                    <span>Oct</span>
                                                    <span>Nov</span>
                                                    <span>Dec</span>
                                                </div>
                                        </div>
                                </div>
                                </div>
                               
                                <div className='circular-graph'>
                                <div className='search-graph2'>
                      <div className='graph-circle'>
                      <div className='applied'>
                                            <div className='applied-wrap'>
                                                <span style={{fontSize:12,fontFamily:'Poppins',fontWeight:'bold',marginRight:10}}>Emails</span>
                                            <div style={{width:10,height:10,borderRadius:50,backgroundColor:'#FFB929'}} />
                                            <p style={{fontSize:11,fontFamily:'Poppins'}}>Email Received</p>
                                            </div>
                                            <div className='applied-wrap'>
                                            <div style={{width:10,height:10,borderRadius:50,backgroundColor:'#006379'}} />
                                            <p style={{fontSize:10,fontFamily:'Poppins'}}>Email sent</p>
                                            </div>
                                        </div>
                         <div className="circle-container">
                         <div className="big-circle"></div>
                         <div className="small-circle">
                            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                            <span style={{fontFamily:"Poppins",fontSize:14,fontWeight:'bold'}}>Total</span>
                             <span  style={{fontFamily:"Poppins",fontSize:13,fontWeight:'bold'}}>426</span>
                            </div>
                            
                         </div>
                          </div>
                      </div>
                      <div className='small-dots'>
                        <div className='yello-dot'>

                        </div>
                        <div className='blue-dot'>

                        </div>
                        <div className='white-dot'>

                        </div>
                      </div>
                        
                    </div>
                                </div>
                        </div>
                        <div className='candidate-status'>
                            <div className='candidate-header'>
                                <span>Candidate Status</span>
                                <input type='text' placeholder='' className='candidate-input' />
                                <div className='serch-candidate'>
                                <Image src="/search.svg" width={20} height={20} alt='' />
                                </div>
                            </div>
                            <div className='table-header'>
                                    <span style={{fontFamily:'Poppins',fontSize:12,fontWeight:'bold'}}>Name</span>
                                    <span style={{fontFamily:'Poppins',fontSize:12,fontWeight:'bold'}}>Position Applied</span>
                                    <span style={{fontFamily:'Poppins',fontSize:12,fontWeight:'bold'}}>Applied Date</span>
                                    <span style={{fontFamily:'Poppins',fontSize:12,fontWeight:'bold'}}>Status</span>
                                    <span style={{fontFamily:'Poppins',fontSize:12,fontWeight:'bold'}}>Detaied Info</span>
                            </div>
                            <div style={{height:1,width:'100%',backgroundColor:'#5B5B5B'}}></div>
                            <div className='table-info'>
                                <div className='tab-wrap'>
                                <Image src="/avatar.png" width={25} height={25} alt='' />
                                    <div className='candidate-name'>
                                        <span style={{fontWeight:'bold'}}>Pradeep B B</span>
                                        <span style={{fontFamily:'Poppins',fontSize:11,marginTop:5}}>pradeepbb004@gmail.com</span>
                                    </div>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>Frontend Developer</span>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>21st March 2023</span>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>
                                    Pending Interview
                                    </span>
                                </div>
                                <div style={{display:'flex',alignItems:'center'}}>
                                <Image src="/knowbtn.png" width={100} height={30} alt='' />
                                <div style={{marginLeft:20}}>
                                <Image src="/dotts.png" width={2} height={10} alt='' />
                                </div>
                                </div>
                            </div>
                            <div className='table-info'>
                                <div className='tab-wrap'>
                                <Image src="/avatar.png" width={25} height={25} alt='' />
                                    <div className='candidate-name'>
                                        <span style={{fontWeight:'bold'}}>Pradeep B B</span>
                                        <span style={{fontFamily:'Poppins',fontSize:11,marginTop:5}}>pradeepbb004@gmail.com</span>
                                    </div>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>Frontend Developer</span>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>21st March 2023</span>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>
                                    Pending Interview
                                    </span>
                                </div>
                                <div style={{display:'flex',alignItems:'center'}}>
                                <Image src="/knowbtn.png" width={100} height={30} alt='' />
                                <div style={{marginLeft:20}}>
                                <Image src="/dotts.png" width={2} height={10} alt='' />
                                </div>
                                </div>
                            </div>
                            <div className='table-info'>
                                <div className='tab-wrap'>
                                <Image src="/avatar.png" width={25} height={25} alt='' />
                                    <div className='candidate-name'>
                                        <span style={{fontWeight:'bold'}}>Pradeep B B</span>
                                        <span style={{fontFamily:'Poppins',fontSize:11,marginTop:5}}>pradeepbb004@gmail.com</span>
                                    </div>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>Frontend Developer</span>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>21st March 2023</span>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>
                                    Pending Interview
                                    </span>
                                </div>
                                <div style={{display:'flex',alignItems:'center'}}>
                                <Image src="/knowbtn.png" width={100} height={30} alt='' />
                                <div style={{marginLeft:20}}>
                                <Image src="/dotts.png" width={2} height={10} alt='' />
                                </div>
                                </div>
                            </div>
                            <div className='table-info'>
                                <div className='tab-wrap'>
                                <Image src="/avatar.png" width={25} height={25} alt='' />
                                    <div className='candidate-name'>
                                        <span style={{fontWeight:'bold'}}>Pradeep B B</span>
                                        <span style={{fontFamily:'Poppins',fontSize:11,marginTop:5}}>pradeepbb004@gmail.com</span>
                                    </div>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>Frontend Developer</span>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>21st March 2023</span>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>
                                    Pending Interview
                                    </span>
                                </div>
                                <div style={{display:'flex',alignItems:'center'}}>
                                <Image src="/knowbtn.png" width={100} height={30} alt='' />
                                <div style={{marginLeft:20}}>
                                <Image src="/dotts.png" width={2} height={10} alt='' />
                                </div>
                                </div>
                            </div>
                            <div className='table-info'>
                                <div className='tab-wrap'>
                                <Image src="/avatar.png" width={25} height={25} alt='' />
                                    <div className='candidate-name'>
                                        <span style={{fontWeight:'bold'}}>Pradeep B B</span>
                                        <span style={{fontFamily:'Poppins',fontSize:11,marginTop:5}}>pradeepbb004@gmail.com</span>
                                    </div>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>Frontend Developer</span>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>21st March 2023</span>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>
                                    Pending Interview
                                    </span>
                                </div>
                                <div style={{display:'flex',alignItems:'center'}}>
                                <Image src="/knowbtn.png" width={100} height={30} alt='' />
                                <div style={{marginLeft:20}}>
                                <Image src="/dotts.png" width={2} height={10} alt='' />
                                </div>
                                </div>
                            </div>
                            <div className='table-info'>
                                <div className='tab-wrap'>
                                <Image src="/avatar.png" width={25} height={25} alt='' />
                                    <div className='candidate-name'>
                                        <span style={{fontWeight:'bold'}}>Pradeep B B</span>
                                        <span style={{fontFamily:'Poppins',fontSize:11,marginTop:5}}>pradeepbb004@gmail.com</span>
                                    </div>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>Frontend Developer</span>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>21st March 2023</span>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>
                                    Pending Interview
                                    </span>
                                </div>
                                <div style={{display:'flex',alignItems:'center'}}>
                                <Image src="/knowbtn.png" width={100} height={30} alt='' />
                                <div style={{marginLeft:20}}>
                                <Image src="/dotts.png" width={2} height={10} alt='' />
                                </div>
                                </div>
                            </div>
                            <div className='table-info'>
                                <div className='tab-wrap'>
                                <Image src="/avatar.png" width={25} height={25} alt='' />
                                    <div className='candidate-name'>
                                        <span style={{fontWeight:'bold'}}>Pradeep B B</span>
                                        <span style={{fontFamily:'Poppins',fontSize:11,marginTop:5}}>pradeepbb004@gmail.com</span>
                                    </div>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>Frontend Developer</span>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>21st March 2023</span>
                                </div>
                                <div>
                                    <span style={{fontFamily:'Poppins',fontSize:12}}>
                                    Pending Interview
                                    </span>
                                </div>
                                <div style={{display:'flex',alignItems:'center'}}>
                                <Image src="/knowbtn.png" width={100} height={30} alt='' />
                                <div style={{marginLeft:20}}>
                                <Image src="/dotts.png" width={2} height={10} alt='' />
                                </div>
                                </div>
                            </div>
                        </div>
                     </div>
                     
         </div>
         </div>
  )
}
