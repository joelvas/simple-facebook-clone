import React from 'react'
import classes from './MessagesList.module.scss'
import MessageItem from './MessageItem'
const MessagesList = ({ messages }) => {
  return (
    <ul className={classes['messages-list']}>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </ul>
  )
}
export default MessagesList
