import React from 'react'
import classes from './MessagesMenuList.module.scss'
const MessagesMenuList = () => {
  const menuIconsList = [
    'options-menu',
    'full-view',
    'create-room',
    'new-message'
  ]
  return (
    <ul className={classes['messages-menu-list']}>
      {menuIconsList.map((icon, index) => (
        <li key={index}>
          <div className={classes[icon]}></div>
        </li>
      ))}
    </ul>
  )
}
export default MessagesMenuList
