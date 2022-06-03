import React from 'react'
import classes from './NotificationItem.module.scss'
const NotificationItem = ({ notification }) => {
  const shortText = (text) => {
    if (text.length > 80) {
      return text.slice(0, 80) + '...'
    }
    return text
  }
  return (
    <li className={classes['notification-item']}>
      <div className={classes['content']}>
        <div className={classes['content__picture']}>
          <img src={notification.picture} alt="" width={56} />
          <div className={classes[notification.type]}></div>
        </div>
        <div className={classes['content__body']}>
          <div
            className={`${classes['content__body__text']} ${
              notification.read ? classes.opened : ''
            }`}
          >
            {shortText(notification.text)}
          </div>
          <span
            className={`${classes['content__body__footer']} ${
              notification.read ? classes.opened : ''
            }`}
          >
            {notification.date}
          </span>
        </div>
      </div>
      <div
        className={`${classes.read} ${notification.read ? classes.opened : ''}`}
      >
        •
      </div>
    </li>
  )
}
export default NotificationItem
