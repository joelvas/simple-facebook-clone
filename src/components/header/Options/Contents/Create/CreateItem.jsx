import React from 'react'
import classes from './CreateItem.module.scss'
const CreateItem = ({ item }) => {
  return (
    <li className={classes['create-item']}>
      <div className={classes['create-item__icon']}>
        <div className={classes[item.icon]}></div>
      </div>
      <div className={classes['create-item__body']}>
        <div className={classes['create-item__body__title']}>{item.title}</div>
        <div className={classes['create-item__body__description']}>
          {item.description}
        </div>
      </div>
    </li>
  )
}
export default CreateItem
