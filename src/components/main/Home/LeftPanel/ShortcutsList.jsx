import React, { useState, useEffect } from 'react'
import classes from './ShortcutsList.module.scss'
import ShortcutItem from './ShortcutItem'
const ShortcutsList = ({ list, showMore }) => {
  const [filteredList, setFilteredList] = useState([])
  useEffect(() => {
    if (showMore) {
      const fl = list.slice(0, 6)
      setFilteredList(fl)
    } else {
      setFilteredList([...list])
    }
  }, [list, showMore])
  return (
    <div className={classes['shortcuts-list']}>
      {filteredList.map((item) => {
        return <ShortcutItem key={item.id} item={item} />
      })}
    </div>
  )
}
export default ShortcutsList
