"use client"

import React, { useState } from 'react'
import "./AssessFinal.css"
import Profile from '@/components/profile/Profile'
import Filter from '@/components/filters/Filter'
import Analytics from '@/components/analytics/Analytics'
import ProfileAssessment from '@/components/profile/ProfileAssessment'
import ChatPage from '@/components/chatpage/Chatpage'
import { io } from "socket.io-client";
import Image from 'next/image'
import Navbar from '@/components/navbar/Navbar'

export default function Assesment() {
  // const [showChat, setShowChat] = useState(false);
  // const [userName, setUserName] = useState("");
  // const [showSpinner, setShowSpinner] = useState(false);
  // const [roomId, setroomId] = useState("");

  // var socket;
  // socket = io("http://localhost:3001");

  // const handleJoin = () => {
  //   if (userName !== "" && roomId !== "") {
  //     console.log(userName, "userName", roomId, "roomId");
  //     socket.emit("join_room", roomId);
  //     setShowSpinner(true);
  //     // You can remove this setTimeout and add your own logic
  //     setTimeout(() => {
  //       setShowChat(true);
  //       setShowSpinner(false);
  //     }, 4000);
  //   } else {
  //     alert("Please fill in Username and Room Id");
  //   }
  // };
  
  return (
    <div className='assessment'>
      <Navbar />
      <div style={{backgroundColor:'green'}}>
          <ProfileAssessment />
      </div>
      <div className='assess-questions'>
          <div className='assess-buttons'>
              <button className='live-btn'>Live Q&A</button>
              <button className='live-btn2'>Pre Assessment Q&A</button>
          </div>
          <div className='questions-assess'>
        <div className='questin-heading'>
            <p>Questions</p>
            <p>Ratings</p>
        </div>
        <div className='question-paragraph'>
          <div className='question-section'>
            <div className='q-para'>
                <p style={{fontWeight:'bold'}}>1. What are your strenghts?</p>
                <p>Ans.One of my key strength is my ability to effectively communicate and collaborate with others.
                       I have strong interpersonal skills , which allow me to build relationship and work well in team environments
                       Im also highly organizedand detail oriented, which helps me consistently deliver high quality work.
                 </p>
            </div>
            <div className='q-para'>
                <p style={{fontWeight:'bold'}}>1. What are your strenghts?</p>
                <p>Ans.One of my key strength is my ability to effectively communicate and collaborate with others.
                       I have strong interpersonal skills , which allow me to build relationship and work well in team environments
                       Im also highly organizedand detail oriented, which helps me consistently deliver high quality work.
                 </p>
            </div>
            <div className='q-para'>
                <p style={{fontWeight:'bold'}}>1. What are your strenghts?</p>
                <p>Ans.One of my key strength is my ability to effectively communicate and collaborate with others.
                       I have strong interpersonal skills , which allow me to build relationship and work well in team environments
                       Im also highly organizedand detail oriented, which helps me consistently deliver high quality work.
                 </p>
            </div>
          </div>
          <div className='btn-section'>
          <div className='btn-cont1'>
            <div className='green-btn'> </div>
            <p style={{marginLeft:10}}>Outstanding</p>
            </div>
            <div className='btn-cont2'>
            <div className='pink-btn'> </div>
            <p style={{marginLeft:10}}>Exceed Expectations</p>
            </div>
            <div className='btn-cont3'>
            <div className='red-btn'> </div>
            <p style={{marginLeft:10}}>Needs improvement</p>
            </div>
          </div>
         
          <div>
          
            </div>
        </div>
     
     </div>
     </div>
     <div className='conclusion'>
        <div className='conclusion-button'>
            <p>Conclusion</p>
        </div>
        <div className='conc-text'>
             <p>He demonstrated a strong understanding of the role , effectively communicated their roles , qualifications
              and showcased relevent skills and experience, His response were well thought out, displaying critical thinking 
              and problem- solving abilities. Moreover , the candidate exhibited professionalism, confidence and enthusiasm
              throught the interview. His performance indicates that they would be a valuable asset to the organization and they have potential
              to excel in the position
             </p>
        </div>
     </div>
     <div className='conclusion'>
        <div className='conclusion-button'>
            <p>Attachments</p>
        </div>
        <div className='conc-text-attach'>
            <div>
               <div className='img-wrap'>
                <p>1. Resume.PDF</p>
                <Image style={{marginLeft:10}} src="/download.png" width={16} height={16} alt='' />
               </div>
               <div className='img-wrap'>
                <p>2. Resume.PDF</p>
                <Image style={{marginLeft:10}} src="/download.png" width={16} height={16} alt='' />
               </div>
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <Image style={{marginLeft:10}} src="/attach.png" width={12} height={12} alt='' />
            <div style={{width:1,height:20,backgroundColor:'#AAAAAA',marginLeft:20}} />
            <Image style={{marginLeft:20}} src="/menu.png" width={12} height={12} alt='' />
            <Image style={{marginLeft:20}} src="/share.png" width={12} height={12} alt='' />
              </div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <Image style={{marginLeft:10}} src="/attach.png" width={12} height={12} alt='' />
            <div style={{width:1,height:20,backgroundColor:'#AAAAAA',marginLeft:20}} />
            <Image style={{marginLeft:20}} src="/menu.png" width={12} height={12} alt='' />
            <Image style={{marginLeft:20}} src="/share.png" width={12} height={12} alt='' />
              </div>
            </div>
        </div>

     </div>

     <div className='shortlist-section'>
        <div className='shortlist-container'>
           <h1 className='short-heading'>Shortlist the Candidate for the Next round</h1>
           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>
        <div className='rounds-container'>
              <div className='round'>
                   <div className='round-count'>
                        <div className='round-one'>
                            <div style={{backgroundColor:'#7DC46E',height:35,width:50,borderRadius:'50%',alignItems:'center',justifyContent:'center',display:'flex'}}>
                                  <Image src="/check.png" width={20} height={20} alt='' />
                            </div>
                            <p style={{marginLeft:10,fontFamily:'Poppins',fontSize:13}}>Round 1</p>
                        </div>
                        <div className='round-one'>
                            <div style={{backgroundColor:'#F99F20',height:35,width:50,borderRadius:'50%',alignItems:'center',justifyContent:'center',display:'flex'}}>
                                 
                            </div>
                            <p style={{marginLeft:10,fontFamily:'Poppins',fontSize:13}}>Round 2</p>
                        </div>
                        <div className='round-one'>
                            <div style={{backgroundColor:'#D9D9D9',height:35,width:50,borderRadius:'50%',alignItems:'center',justifyContent:'center',display:'flex'}}>
                                 
                            </div>
                            <p style={{marginLeft:10,fontFamily:'Poppins',fontSize:13}}>Round 3</p>
                        </div>
                        <div className='round-one'>
                            <div style={{backgroundColor:'#D9D9D9',height:35,width:50,borderRadius:'50%',alignItems:'center',justifyContent:'center',display:'flex'}}>
                            
                            </div>
                            <p style={{marginLeft:10,fontFamily:'Poppins',fontSize:13}}>Round 4</p>
                        </div>
                        <div className='round-one'>
                            <div style={{backgroundColor:'#D9D9D9',height:35,width:50,borderRadius:'50%',alignItems:'center',justifyContent:'center',display:'flex'}}>
                                 
                            </div>
                            <p style={{marginLeft:10,fontFamily:'Poppins',fontSize:13}}>Final Round</p>
                        </div>
                   </div>
              </div>
              <div className='offer'>
                <p>Offer Letter</p>
              <Image src="/right.svg" width={20} height={20} alt='' />
              </div>
        </div>
        </div>
        <div className='conclusion'>
          <div className='hold'>
          <Image src="/smile.png" width={30} height={30} alt='' />
          <p>Hey! Are you confused! Want to make a life changing decision? Keep your caniddate on hold! Let’s Go!!!</p>
          </div>

          <div className='on-hold'>
              <p>on hold</p>
          <Image src="/person-white.png" width={23} height={25} alt='' />

          </div>

     </div>
     <div className='conclusion'>
          <div className='reject'>
          <Image src="/sad.png" width={30} height={30} alt='' />
          <p>Dis-satisfied?!</p>
          </div>

          <div className='on-reject'>
              <p>Reject</p>
          <Image src="/cancel.png" width={23} height={25} alt='' />

          </div>

     </div>
     </div>
     <div className='assess-buttons'>
     <div className='on-reject-buttons'>
              <p>Download this profile</p>
          <Image src="/down-white.png" width={23} height={25} alt='' />

          </div>
          <div className='on-reject-buttons2'>
              <p>Take a Print</p>
          <Image src="/print.png" width={23} height={25} alt='' />

          </div>
          <div className='on-reject-buttons3'>
              <p>Submit</p>
          <Image src="/tick.png" width={30} height={25} alt='' />

          </div>
     </div>

     {/* <div>
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
    </div> */}
    </div>
  )
}
