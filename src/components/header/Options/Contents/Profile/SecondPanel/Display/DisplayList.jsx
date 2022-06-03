import React from 'react'
import classes from './DisplayList.module.scss'
import DisplayItem from './DisplayItem'
const DisplayList = ({ displayList }) => {
  return (
    <ul className={classes['display-list']}>
      {displayList.map((item) => {
        return <DisplayItem key={item.id} item={item} />
      })}
    </ul>
  )
}
export default DisplayList
