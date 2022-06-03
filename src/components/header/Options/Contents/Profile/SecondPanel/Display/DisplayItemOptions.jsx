import React from 'react'
import classes from './DisplayItemOptions.module.scss'
const DisplayItemOptions = ({ options, onChangeRadio }) => {
  const changeRadioHandler = (option) => {
    onChangeRadio(option)
  }
  return (
    <ul className={classes['item-options']}>
      {options.map((option) => {
        return (
          <li
            key={option.id}
            className={classes['item-options__element']}
            onClick={() => {
              changeRadioHandler(option)
            }}
          >
            <div className={classes['item-options__element__title']}>
              <div>{option.title}</div>
              <span className={option.description ? '' : classes.disabled}>
                {option.description ? option.description : ''}
              </span>
            </div>
            <div className={classes['item-options__element__icon']}>
              <input
                type="radio"
                checked={option.isChecked}
                onChange={() => {
                  changeRadioHandler(option)
                }}
              />
            </div>
          </li>
        )
      })}
    </ul>
  )
}
export default DisplayItemOptions
