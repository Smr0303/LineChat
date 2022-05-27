import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import './Messages.css'
function Messages({messages,name}) {
  return (
    <div><ScrollToBottom>
  {messages.map((ele,i)=>{
 <div key={i}><Message message={message} name={name}/></div>

  })}


      </ScrollToBottom></div>
  )
}

export default Messages