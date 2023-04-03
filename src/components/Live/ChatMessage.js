import React from 'react'
import userIcon from "../../images/user.png"

const ChatMessage = ({name,message}) => {
  return (
    <div className='chats'>
    <img alt="" className='user-icon-comment' src={userIcon}></img>
    <h4 style={{marginLeft:"5px"}}>{name} </h4>
    <span style={{marginLeft:"8px"}}>{message}</span>
    </div>
  )
}

export default ChatMessage