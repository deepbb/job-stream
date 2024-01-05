"use client";
import React, { useEffect, useState } from "react";
import "./chat.css"

const ChatPage = ({ socket, username, roomId,time }) => {
  const [currentMsg, setCurrentMsg] = useState("");
  const [chat, setChat] = useState([]);

  const sendData = async (e) => {
    e.preventDefault();
    if (currentMsg !== "") {
      const msgData = {
        roomId,
        user: username,
        msg: currentMsg,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_msg", msgData);
      setCurrentMsg("");
    }
  };

  useEffect(() => {
    socket.on("receive_msg", (data) => {
      setChat((pre) => [...pre, data]);
    });
  }, [socket]);

  return (
    <div className='chat_div'>
      <div className='chat_border'>
        <div style={{ marginBottom: "1rem" }}>
          <p style={{marginLeft:50}}>
            Name: <b>{username}</b> and Room Id: <b>{roomId}</b>
          </p>
        </div>
        <div>
          {chat.map(({ roomId, user, msg, time }, key) => (
            <>
            <div
              key={key}
              className={user === username ? 'chatProfileRight': 'chatProfileLeft'}
            >
              {/* <span
                className='chatProfileSpan'
                style={{ textAlign: user === username ? "right" : "left" }}
              >
                {user.charAt(0)}
              </span> */}
              <span style={{ textAlign: user === username ? 'right' : 'left' }}>
                {msg}
              </span>
              <span className={{ textAlign: user === username ? 'right' : 'left' }}>{time}</span>
            </div>
            
             </>
          ))}
        </div>
        <div style={{display:'flex'}}>
          <form onSubmit={(e) => sendData(e)} style={{display:'flex',width:'80%',marginLeft:'10%',alignItems:'center',justifyContent:'space-between'}}>
            <input
              className='chat_input'
              type="text"
              value={currentMsg}
              placeholder="Type your message.."
              onChange={(e) => setCurrentMsg(e.target.value)}
            />
            <button className='chat_button'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
