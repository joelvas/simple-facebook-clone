import React from 'react'
import classes from './NotificationsHeader.module.scss'
const NotificationsHeader = () => {
  return (
    <div className={classes['notifications-header']}>
      <h1 className={classes['notifications-header__title']}>
        Notifications
      </h1>
      <span className={classes['notifications-header__options']}>•••</span>
    </div>
  )
}
export default NotificationsHeader
