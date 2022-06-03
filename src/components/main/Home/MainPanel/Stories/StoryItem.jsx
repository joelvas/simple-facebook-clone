import React from 'react'
import classes from './StoryItem.module.scss'
const StoryItem = ({ item }) => {
  return (
    <li className={classes['story-item']}>
      <div className={classes['story-item__image']}>
        <img src={item.image} alt="" />
      </div>
      <div className={classes['story-item__owner']}>
        <div className={classes['story-item__owner__picture']}>
          <img src={item.owner.picture} alt="" />
        </div>
        <div className={classes['story-item__owner__name']}>
          <span>{item.owner.name}</span>
        </div>
      </div>
    </li>
  )
}
export default StoryItem
