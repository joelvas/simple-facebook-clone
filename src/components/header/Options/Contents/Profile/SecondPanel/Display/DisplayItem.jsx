import React, { useState } from 'react'
import classes from './DisplayItem.module.scss'
import DisplayItemOptions from './DisplayItemOptions'
const DisplayItem = ({ item }) => {
  const [optionsList, setOptionsList] = useState(item.options)
  const changeRadioHandler = (option) => {
    setOptionsList((oldVal) => {
      return oldVal.map((oldOption) => {
        return {
          ...oldOption,
          isChecked: oldOption.id === option.id ? true : false
        }
      })
    })
  }
  return (
    <div className={classes['display-item']}>
      <div className={classes['display-item__header']}>
        <div className={classes['display-item__header__picture']}>
          <div
            style={{
              backgroundImage: 'url("' + item.icon.url + '")',
              backgroundPosition: item.icon.position,
              width: '20px',
              height: '20px'
            }}
          ></div>
        </div>
        <div className={classes['display-item__header__body']}>
          <div className={classes['display-item__header__body__title']}>
            {item.title}
          </div>
          <div className={classes['display-item__header__body__description']}>
            {item.description}
          </div>
        </div>
      </div>
      {item.options.length > 0 && (
        <DisplayItemOptions
          options={optionsList}
          onChangeRadio={changeRadioHandler}
        />
      )}
    </div>
  )
}
export default DisplayItem
