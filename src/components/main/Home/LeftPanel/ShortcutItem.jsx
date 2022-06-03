import React from 'react'
import classes from './ShortcutItem.module.scss'
const ShortcutItem = ({ item }) => {
  return (
    <div className={classes['shortcut-item']}>
      <div className={classes['shortcut-item__picture']}>
        <div
          style={{
            backgroundImage: 'url("' + item.icon.url + '")',
            height: '28px',
            width: '28px'
          }}
        ></div>
      </div>
      <div className={classes['shortcut-item__text']}>{item.text}</div>
    </div>
  )
}
export default ShortcutItem
