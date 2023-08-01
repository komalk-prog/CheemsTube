import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../util/chatSlice';
import { generateRandomName, makeRandomString } from '../../helper';

const LiveChat = () => {

  const [liveMessage,setLiveMessage]=useState("");

  const dispatch=useDispatch();

  const chatMessage=useSelector((store)=> store.chat.messages);

  useEffect(()=>{
  
    const i=setInterval(()=>{
      //Api polling
      dispatch(addMessage({
        name:generateRandomName(),
        message:makeRandomString(),
       }));
      //console.log("Api polling")
    },1500);

    return ()=>clearInterval(i);
  },[]);

  return (
<div className='live-chat-box'>
<div className='live-header'>LiveChat</div> 
    
    <div className='live-chat'>
   
 
   
     
    {
      // don't use index as key
      chatMessage.map((c,i)=><ChatMessage
        key={i}
        name={c.name}
        message={c.message}
      />)
    }
    
   
    
    
  </div>
  <form className='input-chat' onSubmit={(e)=>{
    e.preventDefault();
    dispatch(addMessage({
      name : "komal kushwaha :)",
      message:liveMessage,
      }))
      setLiveMessage("");
    }}>
      <input className='input-box'  value={liveMessage}
      onChange={(e)=>{setLiveMessage(e.target.value);}}></input>
      
     <button className='send-btn'>send</button>
      
      
    </form>
  </div>
  )
}

export default LiveChat