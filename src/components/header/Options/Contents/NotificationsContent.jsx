import React, { useState } from 'react'
import classes from './NotificationsContent.module.scss'
import NotificationsList from './Notifications/NotificationsList'
import NotificationsHeader from './Notifications/NotificationsHeader'
const NotificationsContent = () => {
  const [filters, setFilters] = useState([
    {
      id: 'f1',
      name: 'All',
      selected: true
    },
    {
      id: 'f2',
      name: 'Unread',
      selected: false
    }
  ])
  const [notifications, setNotifications] = useState([
    {
      id: 'n1',
      text: 'Esta es una notificacion de prueba. HAHAHAHA. dasdasda sdas dasdas asdas asdasdasd asdasdsd dasdsad asds dad asdasdasd as dasdas das d as dasdasdasdasd',
      read: false,
      date: '1 min ago',
      type: 'groups',
      picture: 'https://via.placeholder.com/150'
    },
    {
      id: 'n2',
      text: 'Esta es una notificacion de prueba. HEHEHEHEHEHE',
      read: true,
      date: '10 min ago',
      type: 'pages',
      picture: 'https://via.placeholder.com/150'
    },
    {
      id: 'n3',
      text: 'Oye esta es una notificacion de prueba. :D',
      read: false,
      date: '30 min ago',
      type: 'videos',
      picture: 'https://via.placeholder.com/150'
    },
    {
      id: 'n4',
      text: 'Oye esta es una notificacion de prueba. :D',
      read: false,
      date: '50 min ago',
      type: 'comments',
      picture: 'https://via.placeholder.com/150'
    },
    {
      id: 'n5',
      text: 'Oye esta es una notificacion de prueba. :D',
      read: false,
      date: '2 hours ago',
      type: 'alerts',
      picture: 'https://via.placeholder.com/150'
    },
    {
      id: 'n6',
      text: 'Oye esta es una notificacion de prueba. :D',
      read: false,
      date: '13 hours ago',
      type: 'pages',
      picture: 'https://via.placeholder.com/150'
    }
  ])
  const clickFilterHandler = (filter) => {
    setFilters((oldVal) => {
      return oldVal.map((f) => {
        if (f.id === filter.id) {
          f.selected = true
        } else {
          f.selected = false
        }
        return f
      })
    })
  }
  return (
    <div className={classes['notifications-content']}>
      <NotificationsHeader />
      <div className={classes['notifications-content__subheader']}>
        {filters.map((filter) => {
          return (
            <span
              key={filter.id}
              className={filter.selected ? classes.active : ''}
              onClick={() => {
                clickFilterHandler(filter)
              }}
            >
              {filter.name}
            </span>
          )
        })}
      </div>
      <NotificationsList notifications={notifications} filters={filters} />
    </div>
  )
}
export default NotificationsContent
