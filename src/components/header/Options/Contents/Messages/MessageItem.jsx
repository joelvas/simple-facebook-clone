import React from 'react'
import classes from './MessageItem.module.scss'
const MessageItem = ({ message }) => {
  return (
    <li className={classes['message-item']}>
      <div className={classes['message-item__profile']}>
        <div
          style={{
            backgroundImage:
              'url(https://ui-avatars.com/api/?background=random&name=' +
              message.name +
              ')'
          }}
        ></div>
      </div>
      <div className={classes['message-item__content']}>
        <div className={classes['message-item__content__name']}>
          {message.name}
        </div>
        <div className={classes['message-item__content__message']}>
          <p className={message.read ? classes.pending : ''}>
            {message.message}
          </p>
          <span>•</span>
          <div className={classes['time']}>{message.time}</div>
        </div>
      </div>
      <div
        className={`${classes['message-item__read']} ${
          message.read ? classes.opened : ''
        }`}
      >
        •
      </div>
    </li>
  )
}
export default MessageItem
