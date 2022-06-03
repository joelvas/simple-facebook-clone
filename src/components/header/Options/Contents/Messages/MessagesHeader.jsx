import React from 'react'
import classes from './MessagesHeader.module.scss'
import MessagesMenuList from './MessagesMenuList'
const MessagesHeader = () => {
  return (
    <div className={classes['messages-header']}>
      <div className={classes['messages-header__title']}>Chats</div>
      <MessagesMenuList />
    </div>
  )
}
export default MessagesHeader
