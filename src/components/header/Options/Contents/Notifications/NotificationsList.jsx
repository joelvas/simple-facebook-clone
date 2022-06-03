import React, { useState, useEffect } from 'react'
import classes from './NotificationsList.module.scss'
import NotificationItem from './NotificationItem'
const NotificationsList = ({ notifications, filters }) => {
  const [filteredNotifications, setFilteredNotifications] = useState([
    ...notifications
  ])
  const selectedFilter = filters.find((filter) => filter.selected)
  useEffect(() => {
    if (selectedFilter.name === 'All') {
      setFilteredNotifications([...notifications])
    } else if (selectedFilter.name === 'Unread') {
      setFilteredNotifications(
        notifications.filter((notification) => !notification.read)
      )
    }
  }, [selectedFilter, notifications])
  return (
    <ul className={classes['notifications-list']}>
      {filteredNotifications.map((notification) => {
        return (
          <NotificationItem key={notification.id} notification={notification} />
        )
      })}
    </ul>
  )
}
export default NotificationsList
