import React from 'react'
import "./Analytics.css"
import Image from 'next/image'

export default function Analytics() {
  return (
    <div className='analytics'>
      <div className='analytic-search'>
        <div className='input-one'>
          <Image src="/location-analytic.svg" width={15} height={15} alt='' />
          <input placeholder='Job Category, Keyword, Company' className='input-element-one' />
          <div className='input-two'>
            <div style={{display:'flex',alignItems:'center',width:'100%'}}> 
            <Image src="/search-location.svg" width={15} height={15} alt='' />
              <input placeholder='Your Location' className='input-element-two' />
            </div>
            <div>
            <button className='analytic-btn'>search</button>
            </div>
         </div>
        </div>
       
      </div>
       <h1 className='analytics-heading'>Explore Optimal <span style={{color:'#FFB929',fontWeight:'bold'}}>Employement</span> <span style={{color:'#006379',fontWeight:'bold'}}>Oppurtunities</span></h1>
       <p className='analytics-sub-heading'>Discover the best job openings that align with your strengths and interests</p>

       <div className='graphs'>
          <div className='graph-data'>
          <div className='input-graph'>
            <div style={{display:'flex',alignItems:'center',width:'100%'}}> 
            <Image src="/search-location.svg" width={15} height={15} alt='' />
              <input placeholder='Your Location' className='input-element-two' />
            </div>
            <div>
            <button className='analytic-btn'>search</button>
            </div>
         </div>
         <div className='companies-count'>
                <div className='cmpanies-btn'>
                  <p className='total'>total companies</p>
                  <p className='num'>260</p>
                </div>
                <div className='cmpanies-btn'>
                  <p className='total'>No. of Locations</p>
                  <p className='num'>260</p>
                </div>
                <div className='cmpanies-btn'>
                  <p className='total'>Gender Ratio</p>
                  <p className='num'>260</p>
                </div>
                <div className='cmpanies-btn'>
                  <p className='total'>Fresher Jobs</p>
                  <p className='num'>260</p>
                </div>
                <div className='cmpanies-btn'>
                  <p className='total'>Experienced Jobs</p>
                  <p className='num'>260</p>
                </div>
            </div>
            <div className='graph-info'>
              <div className='search-stats'>
                  <div className='search-container'>
                    <p className='search-text'>Search stastics</p>
                    <div className='search-graph'>
                      <div className='straight-line'></div>
                      <div className='straight-line-graph-container'>
                      <div className='straight-line-graph'></div>
                    <div className='straight-line-graph'></div>
                    <div className='straight-line-graph'></div>
                    <div className='straight-line-graph'></div>
                    <div className='straight-line-graph'></div>
                    <div className='straight-line-graph'></div>
                    <div className='straight-line-graph'></div>
                    <div className='straight-line-graph'></div>
                    <div className='straight-line-graph'></div>
                    <div className='straight-line-graph'></div>
                      </div>
                   
                     
                    </div>
                   
                    <div className='horiz-line'>
                    </div>
                  </div>
                
              </div>
              <div className='search-analytics'>
              <p className='search-text2'>Search Analytics</p>
                    <div className='search-graph2'>
                      <div className='graph-circle'>
                      <div>
                         <div className="circle-container">
                         <div className="big-circle"></div>
                         <div className="small-circle"></div>
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
            <div className='search-results'>
              <div className='search-result-container'>
              <p className='search-resluts-heading'>Search Results</p>
                <hr style={{marginBottom:0,marginTop:0}} />
                <div className='search-logo-container'>
                    <div className='logo-wraps'>
                        <div className='logo-holder'>
                            <Image src="/google.png" width={20} height={20} />
                        </div>
                        <div className='text-wraps'>
                            <p className='company'>Google</p>
                            <p className='role'>Frontend Developer</p>
                        </div>
                    </div>
                    <div className='company-location'>
                          <p>Bangalore</p>
                          <p>More info</p>
                    </div>
                </div>
                <div className='search-logo-container'>
                    <div className='logo-wraps'>
                        <div className='logo-holder'>
                            <Image src="/google.png" width={20} height={20} />
                        </div>
                        <div className='text-wraps'>
                            <p className='company'>Google</p>
                            <p className='role'>Frontend Developer</p>
                        </div>
                    </div>
                    <div className='company-location'>
                          <p>Bangalore</p>
                          <p>More info</p>
                    </div>
                </div>
                <div className='search-logo-container'>
                    <div className='logo-wraps'>
                        <div className='logo-holder'>
                            <Image src="/google.png" width={20} height={20} />
                        </div>
                        <div className='text-wraps'>
                            <p className='company'>Google</p>
                            <p className='role'>Frontend Developer</p>
                        </div>
                    </div>
                    <div className='company-location'>
                          <p>Bangalore</p>
                          <p>More info</p>
                    </div>
                </div>
                <div className='search-logo-container'>
                    <div className='logo-wraps'>
                        <div className='logo-holder'>
                            <Image src="/google.png" width={20} height={20} />
                        </div>
                        <div className='text-wraps'>
                            <p className='company'>Google</p>
                            <p className='role'>Frontend Developer</p>
                        </div>
                    </div>
                    <div className='company-location'>
                          <p>Bangalore</p>
                          <p>More info</p>
                    </div>
                </div>
                <div className='search-logo-container'>
                    <div className='logo-wraps'>
                        <div className='logo-holder'>
                            <Image src="/google.png" width={20} height={20} />
                        </div>
                        <div className='text-wraps'>
                            <p className='company'>Google</p>
                            <p className='role'>Frontend Developer</p>
                        </div>
                    </div>
                    <div className='company-location'>
                          <p>Bangalore</p>
                          <p>More info</p>
                    </div>
                </div>
                <div className='view-all'>
                    View all Jobs
                </div>
              </div>
                
            </div>
          </div>
          <div className='map'>
             <div className='map-labels'>
                <div className='btn-map'>Near by Candidates</div>
                <div className='btn-map'>Near by Candidates</div>
                <div  className='btn-map'>Near by Candidates</div>
                <div  className='btn-map'>Near by Candidates</div>
                <div  className='btn-map'>Near by Candidates</div>
             </div>
             <div className='map-wraper'>
                  <Image src="/mapp.jpeg" width={530} height={590} alt='' />
             </div>
          </div>
       </div>
       <div className='live-jobs'>
          <div className='live-heading'>
            <p className='search-text2'>Live Jobs</p>
            <p className='relate'>Related Candidates</p>
          </div>
          <div>
          <div style={{height:1,width:300,backgroundColor:'#808080'}} />
          <div style={{height:4,width:50,backgroundColor:'#FFB929'}}></div>
          </div>
       </div>
       <div className='company-cards'>
          <div className='company-live'>
            <Image src="/wiproimg.png" width={250} height={120} objectFit='contain' />
            <div className='btn-container'>
            <button className='vide-btn'>
            <Image src="/video.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#006379'}}>Video-intro</p>
            </button>
            <button className='join-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Join Live</p>
            </button>
            </div>
            <button className='career-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Career Consultation</p>
            </button>
          </div>
          <div className='company-live'>
            <Image src="/wiproimg.png" width={250} height={120} objectFit='contain' />
            <div className='btn-container'>
            <button className='vide-btn'>
            <Image src="/video.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#006379'}}>Video-intro</p>
            </button>
            <button className='join-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Join Live</p>
            </button>
            </div>
            <button className='career-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Career Consultation</p>
            </button>
          </div>
          <div className='company-live'>
            <Image src="/wiproimg.png" width={250} height={120} objectFit='contain' />
            <div className='btn-container'>
            <button className='vide-btn'>
            <Image src="/video.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#006379'}}>Video-intro</p>
            </button>
            <button className='join-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Join Live</p>
            </button>
            </div>
            <button className='career-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Career Consultation</p>
            </button>
          </div>
          <div className='company-live'>
            <Image src="/wiproimg.png" width={250} height={120} objectFit='contain' />
            <div className='btn-container'>
            <button className='vide-btn'>
            <Image src="/video.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#006379'}}>Video-intro</p>
            </button>
            <button className='join-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Join Live</p>
            </button>
            </div>
            <button className='career-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Career Consultation</p>
            </button>
          </div>
          <div className='company-live'>
            <Image src="/wiproimg.png" width={250} height={120} objectFit='contain' />
            <div className='btn-container'>
            <button className='vide-btn'>
            <Image src="/video.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#006379'}}>Video-intro</p>
            </button>
            <button className='join-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Join Live</p>
            </button>
            </div>
            <button className='career-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Career Consultation</p>
            </button>
          </div>
          <div className='company-live'>
            <Image src="/wiproimg.png" width={250} height={120} objectFit='contain' />
            <div className='btn-container'>
            <button className='vide-btn'>
            <Image src="/video.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#006379'}}>Video-intro</p>
            </button>
            <button className='join-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Join Live</p>
            </button>
            </div>
            <button className='career-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Career Consultation</p>
            </button>
          </div>
          <div className='company-live'>
            <Image src="/wiproimg.png" width={250} height={120} objectFit='contain' />
            <div className='btn-container'>
            <button className='vide-btn'>
            <Image src="/video.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#006379'}}>Video-intro</p>
            </button>
            <button className='join-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Join Live</p>
            </button>
            </div>
            <button className='career-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Career Consultation</p>
            </button>
          </div>
          <div className='company-live'>
            <Image src="/wiproimg.png" width={250} height={120} objectFit='contain' />
            <div className='btn-container'>
            <button className='vide-btn'>
            <Image src="/video.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#006379'}}>Video-intro</p>
            </button>
            <button className='join-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Join Live</p>
            </button>
            </div>
            <button className='career-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Career Consultation</p>
            </button>
          </div>
       </div>
       <div className='live-jobs'>
          <div className='live-heading'>
            <p className='search-text2'>Live Jobs</p>
            <p className='relate'>Related Candidates</p>
          </div>
          <div>
          <div style={{height:1,width:300,backgroundColor:'#808080'}} />
          <div style={{height:4,width:50,backgroundColor:'#FFB929'}}></div>
          </div>
       </div>
       <div className='company-cards'>
          <div className='company-live'>
            <Image src="/wiproimg.png" width={250} height={120} objectFit='contain' />
            <div className='btn-container'>
            <button className='vide-btn'>
            <Image src="/video.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#006379'}}>Video-intro</p>
            </button>
            <button className='join-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Join Live</p>
            </button>
            </div>
            <button className='career-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Career Consultation</p>
            </button>
          </div>
          <div className='company-live'>
            <Image src="/wiproimg.png" width={250} height={120} objectFit='contain' />
            <div className='btn-container'>
            <button className='vide-btn'>
            <Image src="/video.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#006379'}}>Video-intro</p>
            </button>
            <button className='join-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Join Live</p>
            </button>
            </div>
            <button className='career-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Career Consultation</p>
            </button>
          </div>
          <div className='company-live'>
            <Image src="/wiproimg.png" width={250} height={120} objectFit='contain' />
            <div className='btn-container'>
            <button className='vide-btn'>
            <Image src="/video.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#006379'}}>Video-intro</p>
            </button>
            <button className='join-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Join Live</p>
            </button>
            </div>
            <button className='career-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Career Consultation</p>
            </button>
          </div>
          <div className='company-live'>
            <Image src="/wiproimg.png" width={250} height={120} objectFit='contain' />
            <div className='btn-container'>
            <button className='vide-btn'>
            <Image src="/video.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#006379'}}>Video-intro</p>
            </button>
            <button className='join-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Join Live</p>
            </button>
            </div>
            <button className='career-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Career Consultation</p>
            </button>
          </div>
          <div className='company-live'>
            <Image src="/wiproimg.png" width={250} height={120} objectFit='contain' />
            <div className='btn-container'>
            <button className='vide-btn'>
            <Image src="/video.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#006379'}}>Video-intro</p>
            </button>
            <button className='join-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Join Live</p>
            </button>
            </div>
            <button className='career-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Career Consultation</p>
            </button>
          </div>
          <div className='company-live'>
            <Image src="/wiproimg.png" width={250} height={120} objectFit='contain' />
            <div className='btn-container'>
            <button className='vide-btn'>
            <Image src="/video.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#006379'}}>Video-intro</p>
            </button>
            <button className='join-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Join Live</p>
            </button>
            </div>
            <button className='career-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Career Consultation</p>
            </button>
          </div>
          <div className='company-live'>
            <Image src="/wiproimg.png" width={250} height={120} objectFit='contain' />
            <div className='btn-container'>
            <button className='vide-btn'>
            <Image src="/video.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#006379'}}>Video-intro</p>
            </button>
            <button className='join-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Join Live</p>
            </button>
            </div>
            <button className='career-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Career Consultation</p>
            </button>
          </div>
          <div className='company-live'>
            <Image src="/wiproimg.png" width={250} height={120} objectFit='contain' />
            <div className='btn-container'>
            <button className='vide-btn'>
            <Image src="/video.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#006379'}}>Video-intro</p>
            </button>
            <button className='join-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Join Live</p>
            </button>
            </div>
            <button className='career-btn'>
            <Image src="/live.svg" width={15} height={15} objectFit='contain' />
            <p style={{fontSize:10,fontFamily:'Poppins',color:'#FFB929'}}>Career Consultation</p>
            </button>
          </div>
       </div>

    </div>
  )
}
