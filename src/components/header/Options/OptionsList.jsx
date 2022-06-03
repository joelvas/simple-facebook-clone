import React from 'react'
import classes from './OptionsList.module.scss'
import OptionItem from './OptionItem'
const OptionsList = ({ onClickElement, optionsList }) => {
  const clickIconHandler = (icon) => {
    onClickElement(icon)
  }
  return (
    <ul className={classes['navbar-options']}>
      {optionsList.map((item) => {
        return (
          <OptionItem
            key={item.id}
            item={item}
            onClickIcon={clickIconHandler}
          />
        )
      })}
    </ul>
  )
}
export default OptionsList
