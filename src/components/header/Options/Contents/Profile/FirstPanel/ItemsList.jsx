import React, { useState } from 'react'
import classes from './ItemsList.module.scss'
const ItemsList = ({ onClickItem, firstPanelItems }) => {
  const clickButtonHandler = (item) => {
    if (item.hasSecondPanel) {
      onClickItem(item)
    }
  }
  return (
    <ul className={classes['items-list']}>
      {firstPanelItems.map((item) => {
        return (
          <li
            className={classes['items-list__item']}
            key={item.id}
            onClick={() => {
              clickButtonHandler(item)
            }}
          >
            <div className={classes['items-list__item__picture']}>
              <div className={classes[item.picture]}></div>
            </div>
            <div className={classes['items-list__item__text']}>{item.text}</div>
            <div
              className={`${classes['items-list__item__icon']} ${
                item.hasSecondPanel ? '' : classes.disabled
              }`}
            >
              <div></div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
export default ItemsList
