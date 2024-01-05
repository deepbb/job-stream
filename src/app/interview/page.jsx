"use client"
import React, { useState } from 'react'
import "./Interview.css"
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import ChatPage from '@/components/chatpage/Chatpage'
import { io } from "socket.io-client";

export default function Interview() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuopen,setisMenuOpen] = useState(false)
 const [showChat, setShowChat] = useState(false);
  const [userName, setUserName] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [roomId, setroomId] = useState("");
  const [menuName,setMenuname] = useState("Chat")

  var socket;
  socket = io("http://localhost:3001");

  console.log(userName);

  const handleJoin = () => {
    if (userName !== "" && roomId !== "") {
      console.log(userName, "userName", roomId, "roomId");
      socket.emit("join_room", roomId);
      setShowSpinner(true);
      // You can remove this setTimeout and add your own logic
      setTimeout(() => {
        setShowChat(true);
        setShowSpinner(false);
      }, 4000);
    } else {
      alert("Please fill in Username and Room Id");
    }
  };
  

    const [activeContainer, setActiveContainer] = useState('container1');

    const changeContainer = (containerId,value) => {
      setActiveContainer(containerId);
      console.log(value);
      setMenuname(value)
    };

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
      console.log("clecked");
    };

    const handleOpen = ()=> {
        console.log("clicked");
        setisMenuOpen(!isMenuopen)
    }
  return (
    <div className='interview'>
        <div className='navbar-interview'>
         <div className='navbar-wraper'>
                <div className='navbar-logo'>
                    <Image src="/logo2.png" width={90} height={50} alt='' />
                </div>
                <div className='navnar-menu'>
                <Link  className='list-items' href="/">Home</Link>
                  <Link  className='list-items' href="/userstats">Explore</Link>
                  <Link  className='list-items' href="/assesment">Job Seeker</Link>
                  <Link  className='list-items' href="/assessmentfinal">Recruiter</Link>
                  <Link  className='list-items' href="/dashboard">Consultancy</Link>
                  <Link  className='list-items' href="/interview">Pricing</Link>
                  <Link  className='list-items' href="/">Blogs</Link>
                  <Link  className='list-items' href="/">Contact Us</Link>
                </div>
                <div className='navbar-login'>
                  <div className='interview-profile'>
                  <Image src="/candidate.png" width={30} height={30} alt='' />
                  <span>Pradeep B B</span>
                  </div>
                </div>
        </div>
        </div>
        <div className='heading-information'>
            <div className='interview-person'>
                    <div>
                    <Image src="/interview-person.png" width={30} height={30} alt='' />
                    </div>
                    <div className='name-box'>
                        <span style={{fontFamily:'Lato',fontSize:13,fontWeight:'bold'}}>Pradeep</span>
                        <span style={{fontFamily:'Lato',fontSize:11,fontWeight:'normal'}}>Frontend Developer</span>
                    </div>
            </div>
            <div>
                <span style={{fontFamily:'Lato',fontSize:14,fontWeight:'normal'}}>Round 1 | Interview for Frontend Developer</span>
            </div>
            <div className='round'>
                   <div className='round-count'>
                        <div className='round-one'>
                            <div style={{backgroundColor:'#7DC46E',height:15,width:15,borderRadius:'50%',alignItems:'center',justifyContent:'center',display:'flex'}}>
                                  <Image src="/check.png" width={10} height={10} alt='' />
                            </div>
                            <p style={{marginLeft:10,fontFamily:'Lato',fontSize:11,color:'white'}}>Application Review</p>
                        </div>
                        <div className='round-one'>
                            <div style={{backgroundColor:'#D9D9D9',height:15,width:15,borderRadius:'50%',alignItems:'center',justifyContent:'center',display:'flex'}}>
                                 
                            </div>
                            <p style={{marginLeft:10,fontFamily:'Lato',fontSize:11,color:'white'}}>Screening</p>
                        </div>
                        <div className='round-one'>
                            <div style={{backgroundColor:'#D9D9D9',height:15,width:15,borderRadius:'50%',alignItems:'center',justifyContent:'center',display:'flex'}}>
                                 
                            </div>
                            <p style={{marginLeft:10,fontFamily:'Lato',fontSize:11,color:'white'}}>Further Rounds</p>
                        </div>
                        <div className='round-one'>
                            <div style={{backgroundColor:'#D9D9D9',height:15,width:15,borderRadius:'50%',alignItems:'center',justifyContent:'center',display:'flex'}}>
                            
                            </div>
                            <p style={{marginLeft:10,fontFamily:'Lato',fontSize:11,color:'white'}}>Final Round</p>
                        </div>
                        <div className='round-one'>
                            <div style={{backgroundColor:'#D9D9D9',height:15,width:15,borderRadius:'50%',alignItems:'center',justifyContent:'center',display:'flex'}}>
                                 
                            </div>
                            <p style={{marginLeft:10,fontFamily:'Lato',fontSize:11,color:'white'}}>Offer Letter</p>
                        </div>
                   </div>
              </div>
        </div>
        <div className='interview-pannel'>
            <div className='video-panel'>
            <Image src="/interview-pannel.png" width={900} height={600} alt='' />
            <div className='flex-information'>
                <div className='logos-container'>
                <Image src="/logo2.png" width={30} height={20} alt='' />
                <Image src="/timeline.png" width={60} height={60} alt='' />
                </div>
                <div className='question-pannel'>
                <div className='interview-person-new'>
                    <div>
                    <Image src="/interview-person.png" width={30} height={30} alt='' />
                    </div>
                    <div className='question-box'>
                        <span style={{fontFamily:'Lato',fontSize:13,fontWeight:'bold'}}>Pradeep</span>
                        <span style={{fontFamily:'Lato',fontSize:13,fontWeight:'bold',marginTop:5}}>Q1 . What&apos;s your goal in next 5 years</span>
                    </div>
                </div>
                <div className='interview-person-new'>
                    <div>
                    <Image src="/person2.png" width={30} height={30} alt='' />
                    </div>
                    <div className='question-box'>
                        <span style={{fontFamily:'Lato',fontSize:13,fontWeight:'bold'}}>Sidharth</span>
                        <span style={{fontFamily:'Lato',fontSize:13,fontWeight:'normal',marginTop:5}}>Q2: What are your recent achievements?</span>
                    </div>
                </div>
                <div className='interview-person-new'>
                    <div>
                    <Image src="/person3.png" width={30} height={30} alt='' />
                    </div>
                    <div className='question-box'>
                        <span style={{fontFamily:'Lato',fontSize:13,fontWeight:'bold'}}>Janet</span>
                        <span style={{fontFamily:'Lato',fontSize:13,fontWeight:'normal',marginTop:5}}>Q3: Interesting fact about you?</span>
                    </div>
                </div>
                </div>
                <div className='pannel-buttons'>
                    <button className='pannel-btn'>Live QNA</button>
                    <button className='pannel-btn'>Pre Assessment</button>
                </div>
                <div className='interview-input'>
                <Image src="/mic.png" width={20} height={20} alt=''style={{position:'absolute',left:35}} />
                    <input type='text' className='input-text' placeholder='post a question...'/>
                <Image src="/ic.png" width={20} height={20} alt='' style={{position:'absolute',left:300}} />

                </div>
                <div className='rating-input'>
                    <span className='q1'>Q1 Ratings</span>
                    <Image src="/info2.png" width={15} height={15} alt='' style={{marginLeft:3,cursor:'pointer'}} onClick={toggleDropdown} />
                    <div className='color-box'>
                        <div className='yello-box'></div>
                        <div className='red-box'></div>
                        <div className='purple-box'></div>
                        <div className='blue-box'></div>
                        <div className='green-box'></div>
                    </div>
                    <span className='q2'>overall Rating</span>
                    <span className='q3' style={{color:'#FFB929',fontWeight:'bold',fontSize:12,marginRight:3}}>4.2</span>

                </div>
                <div className='dropdown-container'>
                {isOpen && (
                    <div className="dropdown-content">
                        <span style={{fontFamily:'Lato',fontSize:15,fontWeight:'bold',textAlign:'center',padding:10}}>Rating parameters</span>
                        <div className='status-wrap'>
                        <div style={{display:'flex',alignItems:'center',paddingLeft:10,paddingRight:10,justifyContent:'space-evenly'}}>
                            <div style={{backgroundColor:'#27924A',width:10,height:10,borderRadius:50}}/> 
                            <span style={{fontFamily:'Lato',fontSize:13,marginLeft:10}}>Outstanding</span>
                        </div>
                        <div style={{display:'flex',alignItems:'center',paddingLeft:10,paddingRight:10,justifyContent:'space-evenly',marginTop:10}}>
                            <div style={{backgroundColor:'#1274BD',width:10,height:10,borderRadius:50}}/> 
                            <span style={{fontFamily:'Lato',fontSize:13,marginLeft:10}}>Exceed expectations</span>
                        </div>
                        <div style={{display:'flex',alignItems:'center',paddingLeft:10,paddingRight:10,justifyContent:'space-evenly',marginTop:10}}>
                            <div style={{backgroundColor:'#A61F62',width:10,height:10,borderRadius:50}}/> 
                            <span style={{fontFamily:'Lato',fontSize:13,marginLeft:10}}>Meets expectations</span>
                        </div>
                        <div style={{display:'flex',alignItems:'center',paddingLeft:10,paddingRight:10,justifyContent:'space-evenly',marginTop:10}}>
                            <div style={{backgroundColor:'#C21F30',width:10,height:10,borderRadius:50}}/> 
                            <span style={{fontFamily:'Lato',fontSize:13,marginLeft:10}}>Needs Improvement</span>
                        </div>
                        <div style={{display:'flex',alignItems:'center',paddingLeft:10,paddingRight:10,justifyContent:'space-evenly',marginTop:10}}>
                            <div style={{backgroundColor:'#F49121',width:10,height:10,borderRadius:50}}/> 
                            <span style={{fontFamily:'Lato',fontSize:13,marginLeft:10}}>Unacceptable</span>
                        </div>
                        </div>
                     </div>
                     )}
                </div>
            </div>
            <div className='user-image'>
                        <div>
                    <Image src="/person4.png" width={140} height={120} alt='' style={{marginLeft:3,cursor:'pointer'}}  />
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between',position:'absolute',bottom:0,width:120,padding:10}}>
                    <Image src="/video.png" width={20} height={20} alt='' style={{marginLeft:3,cursor:'pointer'}}  />
                    <Image src="/usermic.png" width={20} height={20} alt='' style={{marginLeft:3,cursor:'pointer'}}  />
</div>
                     </div>
                     <div className='controls'>
                        <div className='call-circle' style={{backgroundColor:'#C21F30',height:40,width:40,borderRadius:50,display:'flex',alignItems:"center",justifyContent:'center',marginLeft:20}}>
                            <div style={{backgroundColor:'#D9D9D9',height:10,width:10,borderRadius:50}}></div>
                        </div>
                        <div style={{width:1,backgroundColor:'#C5C5C5',height:30,marginLeft:50}}></div>
                        <div className='call-circle' style={{backgroundColor:'#58788C',height:40,width:60,borderRadius:10,display:'flex',alignItems:"center",justifyContent:'center',marginLeft:20}}>
                    <Image src="/chat.png" width={30} height={30} alt='' />
                        </div>
                        <div className='call-circle' style={{backgroundColor:'#58788C',height:40,width:60,borderRadius:10,display:'flex',alignItems:"center",justifyContent:'center',marginLeft:20}}>
                        <Image src="/vid.png" width={30} height={30} alt='' />
                        </div>
                        <div className='call-circle' style={{backgroundColor:'#58788C',height:40,width:60,borderRadius:10,display:'flex',alignItems:"center",justifyContent:'center',marginLeft:20}}>
                        <Image src="/callmic.png" width={30} height={30} alt='' />
                        </div>
                        <div className='call-circle' style={{backgroundColor:'#C21F30',height:40,width:60,borderRadius:10,display:'flex',alignItems:"center",justifyContent:'center',marginLeft:20}}>
                        <Image src="/call.png" width={70} height={40} alt='' />
                        </div>
                     </div>
            </div>

          

            <div className='options'>
                <div style={{display:'flex',alignItems:'center'}}>
               <div className='waiting'>
               <Image src="/cross.png" width={30} height={30} alt='' />
               <span style={{fontFamily:'Lato',fontSize:16,marginLeft:10,color:"white"}}>{menuName}</span>
               <Image src="/chevron-white.png" width={25} height={30} alt='' style={{marginLeft:10}} onClick={handleOpen} />
               </div>
               <Image src="/menu.png" width={20} height={20} alt='' style={{marginLeft:10}} />
               </div>
               <div className='dropdown-menu'>
                {isMenuopen && (
                   <div className="dropdown">
                   <button className='dropdown-btn' onClick={(e) => changeContainer('container1',e.target.textContent)}>Chat</button>
                   <button className='dropdown-btn' onClick={(e) => changeContainer('container2',e.target.textContent)}>People on call</button>
                   <button className='dropdown-btn' onClick={(e) => changeContainer('container3',e.target.textContent)}>Decesion panel</button>
                   <button className='dropdown-btn' onClick={(e) => changeContainer('container4',e.target.textContent)}>Pre assessment QNA</button>
                 </div>
                     )}
                </div>
               <div style={{margin:10}}>
               <div>

<div id="container1" className={`container ${activeContainer === 'container1' ? 'active' : ''}`}>
      <div
        className='main_div'
        style={{ display: showChat ? "none" : "" }}
      >
        <input
          className='main_input'
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
          disabled={showSpinner}
        />
        <input
          className='main_input'
          type="text"
          placeholder="room id"
          onChange={(e) => setroomId(e.target.value)}
          disabled={showSpinner}
        />
        <button className='main_button' onClick={() => handleJoin()}>
          {!showSpinner ? "Join" : <div className='loading_spinner'></div>}
        </button>
      </div>
      <div style={{ display: !showChat ? "none" : "" }}>
        <ChatPage socket={socket} roomId={roomId} username={userName} />
      </div>
    
</div>

<div id="container2" className={`container ${activeContainer === 'container2' ? 'active' : ''}`}>
  Container 2
</div>

<div id="container3" className={`container ${activeContainer === 'container3' ? 'active' : ''}`}>
  Container 3
</div>

<div id="container4" className={`container ${activeContainer === 'container4' ? 'active' : ''}`}>
     <Image src="/side.png" width={300} height={500} alt='' /> 
</div>
</div>
              
               </div>
            </div>
        </div>

        
  
    
        </div>
  )
}
